import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingLandingPageComponent } from './pages/landing-page/booking-landing-page.component';
import { RoomsTableComponent } from './components/rooms-table/rooms-table.component';
import { MatTableModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';

const matImports = [
    MatTableModule];

@NgModule({
    declarations: [
        BookingLandingPageComponent,
        RoomsTableComponent,
    ],
    imports: [
        CommonModule,
        BookingRoutingModule,
        ...matImports,
        SharedModule,
    ],
})
export class BookingModule {
}
