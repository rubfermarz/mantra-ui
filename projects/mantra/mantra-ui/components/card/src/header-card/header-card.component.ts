/**
 * Component header to use in conjunction with the component card
 *
 * @format
 */

import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
    selector: 'mantra-header-card',
    standalone: true,
    imports: [],
    templateUrl: './header-card.component.html',
    styleUrl: './header-card.component.scss',
})
export class HeaderCardComponent {
    /**
     * Title of the card, if you initializa this property, the card will show the title with his format and will ignore
     * the ng-content placed. Use only if you want to show a fast title without any other content.
     */
    @Input() title?: string;

    /**
     * Enable a bottom horizontal line in the header
     */
    @Input({ transform: booleanAttribute }) inset?: boolean;
}
