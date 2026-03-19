import { Component } from '@angular/core';

import { IPersona } from '../Model/Ipersona'

import { PersonaState, selectPersona } from '../reducers/personaReducer'

import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-nomi',
  imports: [],
  templateUrl: './nomi.html',
  styleUrl: './nomi.css',
})
export class Nomi {

  constructor(
    private StatePersonaComponente: Store<PersonaState>
  ) {
    StatePersonaComponente.pipe(
      select(selectPersona)
    ).subscribe(
      (datiLetti) => {
        this.listaNomi = datiLetti
      }
    )
  }

  listaNomi: Array<IPersona> = []


}
