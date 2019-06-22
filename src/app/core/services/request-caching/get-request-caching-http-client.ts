import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/internal/operators';
import { InMemoryCache } from './in-memory-cache';

@Injectable({
    providedIn: 'root',
})
export class GetRequestCachingHttpClient {

    private observableCache = new Map<string, Observable<any>>();

    constructor(private cache: InMemoryCache,
                private http: HttpClient) {

    }

    public get<T>(url: string, options?: any): Observable<T> {
        const cacheKey = this.getCacheKey(url);
        const cachedResponse = this.cache.get(cacheKey);
        // console.log('you want: ' + cacheKey);
        if (cachedResponse) {
            // console.log('got from cache: ' + cacheKey);
            return of(cachedResponse);
        } else {
            // console.log('getting request for: ' + cacheKey);
            return this.makeRequestObservable<T>(url, cacheKey, options);
        }
    }

    private makeRequestObservable<T>(url: string, cacheKey: string, options?: any): Observable<T> {
        if (this.observableCache.has(cacheKey)) {
            // console.log('you got an cached obs for url: ' + cacheKey);
            return this.observableCache.get(cacheKey);
        }

        const observers: Observer<any>[] = [];
        const observable = Observable.create(observer => {
            observers.push(observer);
        });

        const requestObs = this.http.get<T>(url, options).pipe(map((response: any) => {
            return <T>response;
        })).pipe(tap((data) => {
            this.cache.put(cacheKey, data);
            for (const observer of observers) {
                observer.next(data);
                observer.complete();
            }
        }));

        this.observableCache.set(cacheKey, observable);
        // console.log('you got a request obs for: ' + cacheKey);
        return requestObs;
    }

    private getCacheKey(url): string {
        if (url.startsWith('http')) {
            url = '/' + url.split('/').slice(3).join('/');
        }
        return url;
    }
}
