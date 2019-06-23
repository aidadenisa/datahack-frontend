import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomePageResolver } from './resolvers/home-page.resolver';
import { AuthGuard } from './auth/guards/auth.guard';
import { RoleGuard } from './auth/guards/role.guard';

const routes: Routes = [
    {
        path: '', component: HomePageComponent,
        resolve: {
            data: HomePageResolver,
        },
    },
    {
        path: 'admin',
        loadChildren: '../features/admin/admin.module#AdminModule',
        canActivate: [AuthGuard, RoleGuard],
        data: {authenticated: true, requiredRole: 'Admin'},
    },
    {
        path: 'manager',
        loadChildren: '../features/manager/manager.module#ManagerModule',
        canActivate: [AuthGuard, RoleGuard],
        data: {authenticated: true, requiredRole: 'Manager'},
    },
    {
        path: 'booking',
        loadChildren: '../features/booking/booking.module#BookingModule',
    },
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'}),
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        HomePageResolver,
    ],
})
export class CoreRoutingModule {
}
