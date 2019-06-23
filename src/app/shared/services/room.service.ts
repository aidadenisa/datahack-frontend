import { Injectable } from '@angular/core';
import { RoomModel } from '../models/room-model';
import { Observable } from 'rxjs';
import { ConstantsService } from '../../core/services/constants.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class RoomService {

    constructor(private constants: ConstantsService,
                private http: HttpClient) {

    }

    public getAll(): Observable<RoomModel[]> {
        const url = this.constants.apiUrl + 'booking/rooms/';
        return this.http.get<RoomModel[]>(url);
    }
}
