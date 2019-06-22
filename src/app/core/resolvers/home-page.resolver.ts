import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {Observable} from "rxjs";

@Injectable()
export class HomePageResolver implements Resolve<any> {
    constructor() {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return true;
    }


    // public async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    //     Promise<{isLoggedIn: boolean, user: User, status: Status}> {
    //
    //     return new Promise (async (resolve) => {
    //         let isLoggedIn = false;
    //         let status = null;
    //
    //         try {
    //             isLoggedIn = await this.authService.authStateAsync;
    //             status = await this.statusService.get();
    //         } catch {}
    //
    //         let user = null;
    //
    //         if (isLoggedIn) {
    //             try {
    //                 user = await this.accountService.getOwnAccount();
    //             } catch {
    //                 isLoggedIn = false;
    //             }
    //         }
    //
    //         resolve({
    //             isLoggedIn,
    //             user,
    //             status,
    //         });
    //     });
    // }
}
