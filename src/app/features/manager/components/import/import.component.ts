import { Component } from '@angular/core';
import { SnackMessageService } from '../../../../shared/services/snack-message.service';
import { ImportService } from '../../services/import.service';

@Component({
    selector: 'app-import',
    templateUrl: './import.component.html',
    styleUrls: ['./import.component.scss'],
})
export class ImportComponent {
    public saving = false;
    public url = '';

    constructor(private snack: SnackMessageService,
                private importService: ImportService) {
    }

    public async import() {
        this.snack.clear();

        this.saving = true;

        try {
            await this.importService.sendSheet(this.url);
        } catch (e) {
            this.snack.showError(e);
        }

        this.saving = false;
    }

}
