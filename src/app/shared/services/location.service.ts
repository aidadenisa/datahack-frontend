import {Observable} from 'rxjs';
import {RoomModel} from '../models/room-model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConstantsService} from '../../core/services/constants.service';
import {LocationModel} from '../models/location-model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor(private constants: ConstantsService,
              private http: HttpClient) {

  }

  public getAll(): Observable<LocationModel[]> {
    const url = this.constants.apiUrl + 'booking/locations/';
    return this.http.get<LocationModel[]>(url);
  }
}
