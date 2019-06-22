import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
    declarations: [ManagerPageComponent],
    imports: [
        CommonModule,
        ManagerRoutingModule,
    ],
})
export class ManagerModule { }
