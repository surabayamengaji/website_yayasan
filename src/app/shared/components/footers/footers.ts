import { Component } from '@angular/core';
import { Copyright } from './copyright/copyright';
import { Main } from './main/main';
import { Subscribe } from './subscribe/subscribe';

@Component({
  selector: 'app-footer',
  imports: [Main, Copyright, Subscribe],
  templateUrl: './footers.html',
  styleUrl: './footers.css',
})
export class Footers {}
