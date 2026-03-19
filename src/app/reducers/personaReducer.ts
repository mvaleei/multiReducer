import { IPersona } from '../Model/Ipersona'

import { createSelector } from '@ngrx/store'

//oggetto che andra nello state
export interface PersonaState {
    Anagrafica: Array<IPersona>
}


//creo un oggetto per inizializzare lo state
const inizializzazione: PersonaState = {
    Anagrafica: [
        { nome: "Lamberto" },
        { nome: "Mario" },
        { nome: "Alberto" }
    ]
}

//creiamo i lreducer
export function personaReducer(
    personaState: PersonaState = inizializzazione,
    action: any
) {

    console.log(personaState)
    switch (action.type) {

        default:
            return personaState
    }

}

const selectPersonaState = (state: any) => state.personaState

//creo ed esporto il vero selettore
export const selectPersona = createSelector(
    selectPersonaState,
    (state) => state.Anagrafica
)