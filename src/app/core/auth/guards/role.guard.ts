import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class RoleGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('activate role guard');
        return true;
    }
    // constructor(private authService: AuthService,
    //             private router: Router,
    //             private snack: SnackMessageService) {
    //
    // }
    //
    // public async canActivate(
    //     next: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Promise<boolean> {
    //     if (!await this.authService.hasRole(next.data.requiredRole)) {
    //         this.snack.display('You have to be ' + next.data.requiredRole + ' to access this page.');
    //         await this.router.navigate(['/']);
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }


}
