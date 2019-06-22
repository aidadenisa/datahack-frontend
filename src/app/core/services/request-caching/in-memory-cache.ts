import { Injectable } from '@angular/core';

const maxAge = 600 * 1000; // = 10 minutes

@Injectable({
    providedIn: 'root',
})
export class InMemoryCache {
    private cache = new Map<string, any>();

    public get(url: string): any | undefined {
        const cached = this.cache.get(url);

        if (!cached) {
            return undefined;
        }

        const isExpired = cached.lastRead < (Date.now() - maxAge);
        return isExpired ? undefined : cached.response;
    }

    public put(url: string, response: any): void {
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
