import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingLandingPageComponent } from './pages/landing-page/booking-landing-page.component';
import { RoomsTableComponent } from './components/rooms-table/rooms-table.component';
import { MatButtonModule, MatDialogModule, MatListModule, MatTableModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { RoomDetailsDialogComponent } from './components/room-details-dialog/room-details-dialog.component';

const matImports = [
    MatTableModule,
    MatDialogModule,
];

@NgModule({
    declarations: [
        BookingLandingPageComponent,
        RoomsTableComponent,
        RoomDetailsDialogComponent,
    ],
    imports: [
        CommonModule,
        BookingRoutingModule,
        ...matImports,
        SharedModule,
        MatButtonModule,
        MatListModule,
    ],
    entryComponents: [
        RoomDetailsDialogComponent,
    ]
})
export class BookingModule {
}
