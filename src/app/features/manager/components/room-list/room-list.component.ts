import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../../../../shared/models/room-model';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {

    public rooms: RoomModel[] = [{
        name: 'Galeria de arta',
        location: {name: 'FITT'},
        capacity: 80,
        area: 100,
        soundSystem: true,
        seats: true,
    },
        {
            name: 'Sala de sedinte parter',
            location: {name: 'FITT'},
            capacity: 10,
            area: 12,
            soundSystem: false,
            seats: true,
        }];

    constructor() {
    }

    public ngOnInit() {
    }

}
