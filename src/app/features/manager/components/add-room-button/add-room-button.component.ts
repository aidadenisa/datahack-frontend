import { Component, OnInit } from '@angular/core';
import {EditRoomDialogComponent} from '../edit-room-dialog/edit-room-dialog.component';
import {MatDialog} from '@angular/material';
import {RoomModel} from '../../../../shared/models/room-model';

@Component({
  selector: 'app-add-room-button',
  templateUrl: './add-room-button.component.html',
  styleUrls: ['./add-room-button.component.scss']
})
export class AddRoomButtonComponent implements OnInit {

  public newRoom: RoomModel;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public createRoom() {
    const dialogRef = this.dialog.open(EditRoomDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newRoom = result;
    });
  }
}
