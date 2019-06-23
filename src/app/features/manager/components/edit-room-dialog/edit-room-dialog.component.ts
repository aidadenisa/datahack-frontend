import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-room-dialog',
  templateUrl: './edit-room-dialog.component.html',
  styleUrls: ['./edit-room-dialog.component.scss']
})
export class EditRoomDialogComponent implements OnInit {

  public dialogTitle: string;

  public locationNames;

  constructor(
    private dialogRef: MatDialogRef<EditRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
  }

  ngOnInit() {

    this.locationNames = () => {
      const names: string[] = ['Aa', 'Bb'];
      // if (this.data && this.data.locations && this.data.locations.length) {
      //   this.data.location.forEach( (location) => {
      //     names.push(location.name);
      //   });
      // }
      return names;
    };

  }



}
