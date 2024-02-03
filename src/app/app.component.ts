import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MantraButton } from '@mantra/mantra-ui/components/button';
import { RippleDirective } from '@mantra/mantra-ui/directives/ripple';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MantraButton, RippleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mantra';
}
