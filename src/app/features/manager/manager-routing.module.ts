import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../../core/auth/guards/role.guard';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';

const routes: Routes = [
    {
        path: '',
        component: ManagerPageComponent,
        canActivate: [RoleGuard],
        data: {requiredRole: 'Manager'},
    },
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class ManagerRoutingModule {
}
