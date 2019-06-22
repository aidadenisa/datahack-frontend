import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

const maxAge = 600 * 1000; // = 10 minutes

@Injectable({
    providedIn: 'root',
})
export class HttpResponseCache {

    private cache = new Map();

    public get(url: string): HttpResponse<any> | undefined {
        const cached = this.cache.get(url);

        if (!cached) {
            return undefined;
        }

        const isExpired = cached.lastRead < (Date.now() - maxAge);
        return isExpired ? undefined : cached.response;
    }

    public put(url: string, response: HttpResponse<any>): void {
        const entry = {url, response, lastRead: Date.now()};
        this.cache.set(url, entry);

        const expired = Date.now() - maxAge;
        this.cache.forEach(expiredEntry => {
            if (expiredEntry.lastRead < expired) {
                this.cache.delete(expiredEntry.url);
            }
        });
    }
}
