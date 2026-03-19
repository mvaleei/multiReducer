import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Conta } from './conta/conta';
import { Nomi } from './nomi/nomi';

import { Variastore } from './variastore/variastore';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Conta,
    Nomi,
    Variastore
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('multi');
}
