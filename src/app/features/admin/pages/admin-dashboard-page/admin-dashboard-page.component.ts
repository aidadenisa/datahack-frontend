import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LocationFormDialogComponent } from '../../components/location-form-dialog/location-form-dialog.component';

@Component({
    selector: 'app-admin-dashboard-page',
    templateUrl: './admin-dashboard-page.component.html',
    styleUrls: ['./admin-dashboard-page.component.scss'],
})
export class AdminDashboardPageComponent implements OnInit {

    constructor(public dialog: MatDialog) {
    }


    public ngOnInit() {
    }

    public newLocation() {
        console.log('new Location');
        const dialogRef = this.dialog.open(LocationFormDialogComponent, {
            width: '450px',
        });


        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
