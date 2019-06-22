import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    // constructor(private authService: AuthService,
    //             private router: Router,
    //             private snack: SnackMessageService) {
    //
    // }
    //
    // public async canActivate(
    //     next: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Promise<boolean> {
    //
    //     const authenticated = next.data['authenticated'] as boolean;
    //
    //     const authState = await this.authService.authStateAsync;
    //
    //     if (authState === authenticated) {
    //         return true;
    //     }
    //
    //     this.snack.display('You are not allowed to access that page.');
    //
    //     if (authenticated) {
    //         await this.router.navigate(['/login'], { queryParams: { returnUrl: '/' + next.url } });
    //     } else {
    //         await this.router.navigate(['/']);
    //     }
    //
    //     return false;
    // }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('activate auth guard');
        return true;
    }
}
