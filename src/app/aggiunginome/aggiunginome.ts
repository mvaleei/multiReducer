import { Component } from '@angular/core';



import { Store, select } from '@ngrx/store';
import { PersonaState, selectPersona } from '../reducers/personaReducer'


@Component({
  selector: 'app-aggiunginome',
  imports: [],
  templateUrl: './aggiunginome.html',
  styleUrl: './aggiunginome.css',
})
export class Aggiunginome {
  constructor(private AggiungiPersonaState: Store<PersonaState>) { }

  /*
    aggiungiNome(): void {
      this.AggiungiPersonaState.dispatch(
        {
          type: "AGGIUNGI",
          nuovoNome: this.nomeInserito
        }
      )
    }*/


  aggiungiNomeTemplate(nomeDainserire: string): void {
    this.AggiungiPersonaState.dispatch(
      {
        type: "AGGIUNGI",
        nuovoNome: nomeDainserire
      }
    )
  }

  //nomeInserito: string = ""

}
