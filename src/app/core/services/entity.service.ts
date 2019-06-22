import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Entity} from '../models/entity.model';
import {ConstantsService} from './constants.service';
import {AuthService} from '../auth/auth.service';
import {GetRequestCachingHttpClient} from './request-caching/get-request-caching-http-client';

export abstract class EntityService<T extends Entity> {
    public abstract entityName: string;

    protected constants: ConstantsService;
    protected http: HttpClient;
    protected authService: AuthService;
    protected getRCHC: GetRequestCachingHttpClient;

    protected constructor(protected injector: Injector) {
        this.constants = injector.get(ConstantsService);
        this.http = injector.get(HttpClient);
        this.authService = injector.get(AuthService);
        this.getRCHC = injector.get(GetRequestCachingHttpClient);
    }

    public getAll(noCache?: boolean): Observable<T[]> {
        const url = this.constants.apiUrl + this.entityName + '/';
        if (noCache) {
            return this.http.get<T[]>(url);
        } else {
            return this.getRCHC.get<T[]>(url);
        }
    }

    public getOne(slug: string): Observable<T> {
        const url = this.constants.apiUrl + this.entityName + '/' + slug + '/';

        return this.http.get<T>(url);
    }

    public async create(object: T): Promise<any> {
        const url = this.constants.apiUrl + this.entityName + '/';

        // return this.http.post(url, object, await this.authService.getOptions(true)).toPromise();
        return this.http.post(url, object).toPromise();
    }

    public async update(object: T): Promise<any> {
        const url = this.constants.apiUrl + this.entityName + '/';

        // return this.http.patch(url, object, await this.authService.getOptions(true)).toPromise();
        return this.http.post(url, object).toPromise();
    }
}
