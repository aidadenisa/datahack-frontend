import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardPageComponent } from './pages/admin-dashboard-page/admin-dashboard-page.component';
import { MatButtonModule } from '@angular/material';

const matImports = [
    MatButtonModule,
];

@NgModule({
    declarations: [AdminDashboardPageComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ...matImports,
    ],
})
export class AdminModule {
}
