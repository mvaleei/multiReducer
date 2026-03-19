import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Conta } from './conta/conta';
import { Nomi } from './nomi/nomi';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Conta,
    Nomi
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('multi');
}
