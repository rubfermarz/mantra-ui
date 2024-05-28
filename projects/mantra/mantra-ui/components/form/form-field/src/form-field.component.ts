/** @format */

import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'mantra-form-field',
    standalone: true,
    imports: [],
    templateUrl: './form-field.component.html',
    styleUrl: './form-field.component.scss',
    encapsulation: ViewEncapsulation.None,
})
export class MantraButtonComponent {
    formField: FormControl = new FormControl();
}
