import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomComponent } from './components/room/room.component';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule
} from '@angular/material';
import { EditRoomDialogComponent } from './components/edit-room-dialog/edit-room-dialog.component';
import { FormsModule } from '@angular/forms';
import { AddRoomButtonComponent } from './components/add-room-button/add-room-button.component';
import { ImportComponent } from './components/import/import.component';
import { SharedModule } from '../../shared/shared.module';

const matImports = [
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatCheckboxModule,
    MatButtonModule,
];

@NgModule({
    declarations: [
        ManagerPageComponent,
        RoomListComponent,
        RoomComponent,
        EditRoomDialogComponent,
        AddRoomButtonComponent,
        ImportComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ManagerRoutingModule,
        ...matImports,
    ],
    entryComponents: [
        EditRoomDialogComponent,
    ],
})
export class ManagerModule {
}
