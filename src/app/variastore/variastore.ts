import { Component } from '@angular/core';

import { Variacontatore } from '../variacontatore/variacontatore';
import { Aggiunginome } from '../aggiunginome/aggiunginome';

@Component({
  selector: 'app-variastore',
  imports: [
    Variacontatore,
    Aggiunginome
  ],
  templateUrl: './variastore.html',
  styleUrl: './variastore.css',
})
export class Variastore {

}
