import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContatoreState } from '../reducers/ContatoreReducer';

@Component({
  selector: 'app-variacontatore',
  imports: [],
  templateUrl: './variacontatore.html',
  styleUrl: './variacontatore.css',
})
export class Variacontatore {

  constructor(private ContatoreComponentState: Store<ContatoreState>) { }


  incrementa(): void {
    this.ContatoreComponentState.dispatch(
      {
        type: "INCREMENTA"
      }
    )
  }


  decrementa(): void {
    this.ContatoreComponentState.dispatch(
      {
        type: "DECREMENTA"
      }
    )
  }

}
