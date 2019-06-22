import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';
import {ManagerRoutingModule} from './manager-routing.module';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomComponent } from './components/room/room.component';
import {MatCardModule, MatListModule} from '@angular/material';

@NgModule({
    declarations: [ManagerPageComponent, RoomListComponent, RoomComponent],
    imports: [
        CommonModule,
        ManagerRoutingModule,
        MatListModule,
      MatCardModule
    ]
})
export class ManagerModule { }
