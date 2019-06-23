import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../../shared/services/room.service';
import { RoomModel } from '../../../../shared/models/room-model';

@Component({
    selector: 'app-rooms-table',
    templateUrl: './rooms-table.component.html',
    styleUrls: ['./rooms-table.component.scss'],
})
export class RoomsTableComponent implements OnInit {
    public displayedColumns: string[] = ['index', 'name', 'location', 'capacity', 'soundSystem', 'seats'];
    public entries: RoomModel[] = [];

    constructor(
        private roomService: RoomService
    ) {
    }

    public async ngOnInit() {
        this.entries = await this.roomService.getAll().toPromise();
    }

}
