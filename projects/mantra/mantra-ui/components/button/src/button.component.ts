/** @format */

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonBase } from './button-base';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'button[mantra-button]',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class MantraButtonComponent extends ButtonBase {
    @Input()
    color:
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'success'
        | 'warning'
        | 'danger' = 'primary';
}
