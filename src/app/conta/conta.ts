import { Component } from '@angular/core';

import { ContatoreState, selectContatore } from '../reducers/ContatoreReducer';

import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-conta',
  imports: [],
  templateUrl: './conta.html',
  styleUrl: './conta.css',
})
export class Conta {

  constructor(
    private StoreContatoreComponent: Store<ContatoreState>
  ) {
    StoreContatoreComponent.pipe(
      select(selectContatore)
    ).subscribe(
      (datoLetto) => {
        this.visite = datoLetto.counter
      }
    )
  }

  visite: number = 0

}
