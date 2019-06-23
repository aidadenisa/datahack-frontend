import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardPageComponent } from './pages/admin-dashboard-page/admin-dashboard-page.component';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LocationFormDialogComponent } from './components/location-form-dialog/location-form-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const matImports = [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
];

@NgModule({
    declarations: [
        AdminDashboardPageComponent,
        LocationFormDialogComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ...matImports,
    ],
    entryComponents: [
        LocationFormDialogComponent,
    ],
})
export class AdminModule {
}
