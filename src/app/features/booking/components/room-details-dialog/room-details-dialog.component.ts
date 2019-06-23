import { Component, Inject, OnInit } from '@angular/core';
import { RoomModel } from '../../../../shared/models/room-model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-room-details',
    templateUrl: './room-details-dialog.component.html',
    styleUrls: ['./room-details-dialog.component.scss'],
})
export class RoomDetailsDialogComponent implements OnInit {

    public entry: RoomModel;


    constructor(public dialogRef: MatDialogRef<RoomDetailsDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: RoomModel) {
        this.entry = data;
    }

    public ngOnInit() {
    }
}
