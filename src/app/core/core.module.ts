import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {SharedModule} from '../shared/shared.module';
import {CoreRoutingModule} from './core-routing.module';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {MatIconModule} from '@angular/material';

const matImports = [
    MatIconModule,
];

@NgModule({
    declarations: [
        HomePageComponent,
        SideMenuComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        CoreRoutingModule,
        ...matImports,
    ],
    exports: [
        SideMenuComponent,
    ]
})
export class CoreModule {
    /* make sure CoreModule is imported only by one NgModule the AppModule */
    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
}
