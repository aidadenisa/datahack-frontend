import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-location-form-modal',
    templateUrl: './location-form-dialog.component.html',
    styleUrls: ['./location-form-dialog.component.scss'],
})
export class LocationFormDialogComponent implements OnInit {

    public form: FormGroup;

    constructor(private fb: FormBuilder,
                public dialogRef: MatDialogRef<LocationFormDialogComponent>) {
        this.form = fb.group({
            'name': ['', [Validators.required]],
        });
    }

    public ngOnInit() {
    }

    public async save(): Promise<void> {
        console.log('save', this.form.value);
    }

}
