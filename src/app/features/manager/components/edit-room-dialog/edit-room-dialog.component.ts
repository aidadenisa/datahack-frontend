import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LocationModel} from '../../../../shared/models/location-model';
import {LocationService} from '../../../../shared/services/location.service';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-edit-room-dialog',
  templateUrl: './edit-room-dialog.component.html',
  styleUrls: ['./edit-room-dialog.component.scss']
})
export class EditRoomDialogComponent implements OnInit {

  public dialogTitle: string;

  public locations: LocationModel[];
  // public locations: LocationModel[] = [{
  //   name: 'FITT',
  //   rooms: [],
  // },
  //   {
  //     name: 'UPT',
  //     rooms: [],
  //   }];

  constructor(
    private dialogRef: MatDialogRef<EditRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private locationService: LocationService
  ) {
  }

  public async ngOnInit() {
    this.data = this.data ? this.data : {};
    this.locations = await this.locationService.getAll().toPromise();
  }

  public save() {
    this.dialogRef.close(this.data);
  }

  public close() {
    this.dialogRef.close();
  }



}
