import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomService } from '../../../../shared/services/room.service';
import { RoomModel } from '../../../../shared/models/room-model';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { RoomDetailsDialogComponent } from '../room-details-dialog/room-details-dialog.component';

@Component({
    selector: 'app-rooms-table',
    templateUrl: './rooms-table.component.html',
    styleUrls: ['./rooms-table.component.scss'],
})
export class RoomsTableComponent implements OnInit {
    public displayedColumns: string[] = ['index', 'name', 'location', 'capacity', 'area', 'soundSystem', 'seats', 'actions'];
    public entries: RoomModel[] = [];

    public dataSource: MatTableDataSource<RoomModel>;
    @ViewChild(MatPaginator, {static: true}) public paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) public sort: MatSort;

    constructor(
        private roomService: RoomService,
        public dialog: MatDialog
    ) {
    }

    public async ngOnInit() {
        this.entries = await this.roomService.getAll().toPromise();
        this.dataSource = new MatTableDataSource(this.entries);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    public view(room: RoomModel): void {
        console.log('new Location');
        const dialogRef = this.dialog.open(RoomDetailsDialogComponent, {
            width: '450px',
            data: room,
        });


        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}

function compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
