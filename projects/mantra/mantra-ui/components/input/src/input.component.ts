/** @format */

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBase } from './input-base';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'input[mantra-input]',
    standalone: true,
    imports: [],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class MantraInputComponent extends InputBase {
    @Input() size: 'full' | 'narrow' = 'full';
}
