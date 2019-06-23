import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
    public isCollapsed = false;
    private isMobile: boolean;
    public menuItems = [];

    @ViewChild('sidemenu', {static: true})
    private sidemenu: ElementRef;

    constructor(private authService: AuthService) {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', () => {
                this.recalculate();
            });
            window.addEventListener('click', (win) => {
                if (this.isCollapsed || !this.isMobile) {
                    return;
                }
                const sidebar = this.sidemenu.nativeElement;
                const targetElement = win.target || win.relatedTarget;
                if (!this.isDescendant(sidebar, targetElement)) {
                    this.isCollapsed = true;
                }
            });
        }
        this.recalculate();
    }

    public async ngOnInit() {
        // await this.populateMenu(this.authService.authState);
        await this.populateMenu(false);
    }

    private async populateMenu(loggedIn: boolean) {
        // this.menuItems = await this.menuItemsService.get(loggedIn);
        this.menuItems = [
            {
                title: 'Manager',
                routerLink: ['/manager'],
                activated: 'active',
            },
        ];
    }

    public toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
    }

    public doCollapse() {
        if (!this.isMobile) {
            return;
        }
        this.isCollapsed = true;
    }

    public doExpand() {
        if (!this.isMobile) {
            return;
        }
        this.isCollapsed = false;
    }

    public recalculate() {
        if (typeof window === 'undefined') {
            return;
        }
        this.isMobile = window.innerWidth < 992;
        this.isCollapsed = this.isMobile;
    }

    public isDescendant(parent, child) {
        if (parent === child) {
            return true;
        }
        let node = child.parentNode;
        while (node != null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

}
