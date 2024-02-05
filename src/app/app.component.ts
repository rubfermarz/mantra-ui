/** @format */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MantraButtonComponent } from '@mantra/mantra-ui/components/button';
import { RippleDirective } from '@mantra/mantra-ui/directives/ripple';
import {
    CardComponent,
    ContentCardComponent,
    FooterCardComponent,
    HeaderCardComponent,
} from '@mantra/mantra-ui/components/card';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MantraButtonComponent,
        RippleDirective,
        CardComponent,
        HeaderCardComponent,
        ContentCardComponent,
        FooterCardComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'mantra';
}
