import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomComponent } from './components/room/room.component';
import {
  MatCardModule,
  MatDialog,
  MatDialogConfig,
  MatFormFieldModule,
  MatListModule,
  MatDialogContent,
  MatSelect,
  MatOption,
  MatInput,
  MatDialogActions,
  MatDialogModule,
  MatSelectModule,
  MatInputModule,
  MatOptionModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';
import { EditRoomDialogComponent } from './components/edit-room-dialog/edit-room-dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [ManagerPageComponent, RoomListComponent, RoomComponent, EditRoomDialogComponent],
    imports: [
        CommonModule,
        ManagerRoutingModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatDialogModule,
        MatSelectModule,
        MatInputModule,
        MatOptionModule,
        FormsModule,
        MatCheckboxModule,
        MatButtonModule
    ],
    entryComponents: [
      EditRoomDialogComponent,
    ],
})
export class ManagerModule {
}
