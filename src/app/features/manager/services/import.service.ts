import { Injectable } from '@angular/core';
import { ConstantsService } from '../../../core/services/constants.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ImportService {
    constructor(private constants: ConstantsService,
                private http: HttpClient) {

    }

    public sendSheet(spreadsheetUrl: string): Promise<any> {
        const url = this.constants.apiUrl + 'import/';
        return this.http.post<any>(url, {url: spreadsheetUrl}).toPromise();
    }
}

