import { Component, Input, OnInit } from '@angular/core';
import { RoomModel } from '../../../../shared/models/room-model';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {

    @Input()
    public room: RoomModel;

    constructor() {
    }

    public ngOnInit() {
    }

}
