import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../../../../shared/models/room-model';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {

    public rooms: RoomModel[] = [{name: 'Bla bla'}, {name: 'Bla'}];

    constructor() {
    }

    public ngOnInit() {
    }

}
