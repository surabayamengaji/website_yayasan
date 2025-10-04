import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  imports: [],
  templateUrl: './copyright.html',
  styleUrl: './copyright.css',
})
export class Copyright {
  currentYear: number = new Date().getFullYear();
}
