import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {HomePageResolver} from './resolvers/home-page.resolver';

const routes: Routes = [
    {
        path: '', component: HomePageComponent,
        resolve: {
            data: HomePageResolver,
        },
        runGuardsAndResolvers: 'always',
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
