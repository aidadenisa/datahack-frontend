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

    public create(room: any): Observable<RoomModel> {
        const data = {
          name: room.name ? room.name : '',
          location: room.location ? room.location : '',
          area: room.area ? room.area : 0,
          capacity: room.capacity ? room.capacity : 0,
          soundSystem: room.soundSystem ? room.soundSystem : false,
          seats: room.seats ? room.seats : false,
        };

        const url = this.constants.apiUrl + 'booking/rooms/';
        return this.http.post<RoomModel>(url, data);
    }
}
