/** @format */

import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
    selector: 'mantra-footer-card',
    standalone: true,
    imports: [],
    templateUrl: './footer-card.component.html',
    styleUrl: './footer-card.component.scss',
})
export class FooterCardComponent {
    @Input({ transform: booleanAttribute }) inset?: boolean;
}
