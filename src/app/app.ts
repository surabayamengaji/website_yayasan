import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headers } from './shared/components/headers/headers';
import { Footers } from './shared/components/footers/footers';
import { Donation } from './shared/components/donation/donation';
import { News } from './shared/components/news/news';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footers, Donation, News],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('company_profile');
}
