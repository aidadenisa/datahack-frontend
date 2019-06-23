import { Component, ViewChild } from '@angular/core';
import { SideMenuComponent } from './core/components/side-menu/side-menu.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    @ViewChild(SideMenuComponent, {static: true})
    private sideMenu: SideMenuComponent;

    constructor(private domSanitizer: DomSanitizer,
                public matIconRegistry: MatIconRegistry
    ) {
        matIconRegistry.addSvgIcon('menu', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-menu-24px.svg'));
        matIconRegistry.addSvgIcon('refresh', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-refresh-24px.svg'));
    }

    public onSwipeRight(): void {
        if (this.sideMenu) {
            this.sideMenu.doExpand();
        }
    }

    public onSwipeLeft(): void {
        if (this.sideMenu) {
            this.sideMenu.doCollapse();
        }
    }
}
