import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MantraButtonBase } from './mantra-button-base';

@Component({
    selector: 'button[mantra-button]',
    standalone: true,
    imports: [],
    templateUrl: './mantra-button.component.html',
    styleUrl: './mantra-button.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class MantraButton extends MantraButtonBase {
    @Input()
    color:
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'success'
        | 'warning'
        | 'danger' = 'primary';
}
