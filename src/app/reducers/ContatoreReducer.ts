import { Contatore } from "../Model/Contatore";

import { createSelector } from '@ngrx/store'

export interface ContatoreState {
    contatore: Contatore
}


const inizializzazione: ContatoreState = {
    contatore: new Contatore(5)
}

export function contatoreReducer(
    contatoreState: ContatoreState = inizializzazione,
    action: any
) {
    //console.log(contatoreState)

    switch (action.type) {

        case "INCREMENTA":
            let nuovoValore: Contatore = new Contatore(contatoreState.contatore.counter + 1);
            let nuovoStato: ContatoreState = {
                contatore: nuovoValore
            }
            return nuovoStato;

        case "DECREMENTA":
            let nuovoValore1: Contatore = new Contatore(contatoreState.contatore.counter - 1);
            let nuovoStato1: ContatoreState = {
                contatore: nuovoValore1
            }
            return nuovoStato1;


        default:
            return contatoreState
    }

}


const selectContatoreState = (state: any) => state.contatoreState

//vero selettore letto dai componenti
export const selectContatore = createSelector(selectContatoreState, (stato) => stato.contatore)