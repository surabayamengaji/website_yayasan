import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headers } from './shared/components/headers/headers';
import { Footers } from './shared/components/footers/footers';
import { Donation } from './shared/components/donation/donation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footers, Donation],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('company_profile');
}
