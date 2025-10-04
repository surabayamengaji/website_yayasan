import { Component } from '@angular/core';
import { TopHeader } from './top-header/top-header';
import { MidHeader } from './mid-header/mid-header';
import { BottomHeader } from './bottom-header/bottom-header';

@Component({
  selector: 'app-header',
  imports: [TopHeader, MidHeader, BottomHeader],
  templateUrl: './headers.html',
  styleUrl: './headers.css',
})
export class Headers {}
