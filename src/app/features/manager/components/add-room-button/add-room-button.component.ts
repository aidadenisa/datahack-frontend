import { Component, OnInit } from '@angular/core';
import {EditRoomDialogComponent} from '../edit-room-dialog/edit-room-dialog.component';
import {MatDialog} from '@angular/material';
import {RoomModel} from '../../../../shared/models/room-model';
import { RoomService } from '../../../../shared/services/room.service';

@Component({
  selector: 'app-add-room-button',
  templateUrl: './add-room-button.component.html',
  styleUrls: ['./add-room-button.component.scss']
})
export class AddRoomButtonComponent implements OnInit {

  public newRoom: RoomModel;

  constructor(public dialog: MatDialog, public roomService: RoomService) { }

  ngOnInit() {
  }

  public createRoom() {
    const dialogRef = this.dialog.open(EditRoomDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(async result => {
      this.newRoom = await this.roomService.create(result).toPromise();
    });
  }
}
