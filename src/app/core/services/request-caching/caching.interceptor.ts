import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, Observer, of } from 'rxjs';

import { tap } from 'rxjs/internal/operators';
import {HttpResponseCache} from './http-response-cache';

@Injectable({
    providedIn: 'root',
})
export class CachingInterceptor implements HttpInterceptor {
    private observableCache = new Map();

    constructor(private cache: HttpResponseCache) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cachedResponse = this.cache.get(req.urlWithParams);
        if (cachedResponse) {
            // console.log('got from cache: ' + req.urlWithParams);
            return of(cachedResponse);
        } else {
            // console.log('getting request for: ' + req.urlWithParams);
            return this.makeRequestObservable(req, next, this.cache);
        }
    }

    private makeRequestObservable(
        req: HttpRequest<any>,
        next: HttpHandler,
        cache: HttpResponseCache): Observable<HttpEvent<any>> {
        const url = req.urlWithParams;

        if (this.observableCache.has(url)) {
            // console.log('you got an cached obs for url: ' + url);
            return this.observableCache.get(url);
        }

        const observers: Observer<any>[] = [];
        const observable = Observable.create(observer => {
            observers.push(observer);
        });

        const requestObs = next.handle(req).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    // console.log('>>>got from server: ' + url);
                    if (this.canBeCached(event)) {
                        cache.put(req.urlWithParams, event);
                    }
                    this.observableCache.delete(url);
                    for (const observer of observers) {
                        observer.next(event);
                        observer.complete();
                    }
                }
            })
        );

        // console.log('you got a request obs for: ' + url);
        this.observableCache.set(url, observable);
        return requestObs;
    }

    private canBeCached(response: HttpResponse<any>): boolean {
        // if()
        return true;
    }


}
