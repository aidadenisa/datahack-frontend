import { Component, Input, OnInit } from '@angular/core';
import { RoomModel } from '../../../../shared/models/room-model';
import { MatDialog } from '@angular/material';
import { EditRoomDialogComponent } from '../edit-room-dialog/edit-room-dialog.component';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {

    @Input()
    public room: RoomModel;

    constructor(public dialog: MatDialog) {
    }

    public ngOnInit() {
    }

    public editRoom() {
        this.openDialog();
    }

    public openDialog(): void {
        const dialogRef = this.dialog.open(EditRoomDialogComponent, {
            // width: '250px',
            data: {
                name: this.room.name,
                location: this.room.location ? this.room.location : '',
                capacity: this.room.capacity ? this.room.capacity : 0,
                area: this.room.area ? this.room.area : 0,
                soundSystem: this.room.soundSystem ? this.room.soundSystem : false,
                seats: this.room.seats ? this.room.seats : false,
            },
        });

        dialogRef.afterClosed().subscribe(result => {
            this.room = result ? result : this.room;
        });
    }
}
