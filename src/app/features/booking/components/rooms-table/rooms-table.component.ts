import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../../shared/services/room.service';
import { RoomModel } from '../../../../shared/models/room-model';
import { MatDialog } from '@angular/material';
import { RoomDetailsDialogComponent } from '../room-details-dialog/room-details-dialog.component';

@Component({
    selector: 'app-rooms-table',
    templateUrl: './rooms-table.component.html',
    styleUrls: ['./rooms-table.component.scss'],
})
export class RoomsTableComponent implements OnInit {
    public displayedColumns: string[] = ['index', 'name', 'location', 'capacity', 'soundSystem', 'numberOfSeats', 'actions'];
    public entries: RoomModel[] = [];

    constructor(
        private roomService: RoomService,
        public dialog: MatDialog
    ) {
    }

    public async ngOnInit() {
        this.entries = await this.roomService.getAll().toPromise();
    }

    public view(room: RoomModel): void {
        console.log('new Location');
        const dialogRef = this.dialog.open(RoomDetailsDialogComponent, {
            width: '450px',
            data: room,
        });


        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
