import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {SnackMessageService} from '../../../services/snack-message.service';

@Component({
    selector: 'shared-submit-button',
    templateUrl: './submit-button.component.html',
    styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent implements OnInit {

    @Input()
    public text: string;

    @Input()
    public loading: boolean;

    @Input()
    public color: string;

    @Output()
    public click: EventEmitter<any> = new EventEmitter();

    constructor(private snack: SnackMessageService) {
    }

    public ngOnInit() {
    }

    public get displayText() {
        return this.text || 'Submit';
    }

    public get isLoading() {
        return this.loading;
    }

    public clicked($event: any): void {
        $event.stopPropagation();
        if (!this.loading) {
            this.snack.clear();
            this.click.emit($event);
        }
    }
}
