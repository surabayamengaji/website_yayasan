import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headers } from './shared/components/headers/headers';
import { Footers } from './shared/components/footers/footers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footers],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('company_profile');
}
