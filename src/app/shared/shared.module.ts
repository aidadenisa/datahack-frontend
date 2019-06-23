import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from './components/buttons/submit-button/submit-button.component';
import { SnackMessageService } from './services/snack-message.service';
import { MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { StorageModule } from '@ngx-pwa/local-storage';
import { RoomService } from './services/room.service';

const matImports = [
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
];

const exportableComponents = [
    SubmitButtonComponent,
];

@NgModule({
    declarations: [
        ...exportableComponents,
    ],
    imports: [
        CommonModule,
        StorageModule,
        ...matImports,
    ],
    exports: [
        ...exportableComponents,
    ],
})
export class SharedModule {
    public static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                SnackMessageService,
            ],
        };
    }
}
