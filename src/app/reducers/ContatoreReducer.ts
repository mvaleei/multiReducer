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
    console.log(contatoreState)

    switch (action.type) {

        default:
            return contatoreState
    }

}


const selectContatoreState = (state: any) => state.contatoreState

//vero selettore letto dai componenti
export const selectContatore = createSelector(selectContatoreState, (stato) => stato.contatore)