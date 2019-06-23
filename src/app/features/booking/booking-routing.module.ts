import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingLandingPageComponent } from './pages/landing-page/booking-landing-page.component';

const routes: Routes = [
    {path: '', component: BookingLandingPageComponent},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BookingRoutingModule {
}
