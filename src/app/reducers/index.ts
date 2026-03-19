//serve a raggruppare tutti ireducers, per poi montare lo store centrale

import {
    ContatoreState, // la tipo0logia di stato che dovrò gestire
    contatoreReducer    //la funzione del reducer (contatore)
} from './ContatoreReducer'


import {
    personaReducer,
    PersonaState
} from './personaReducer'

//oggewtto che espone l'oggetto inglobante tutti i reducer(mappai ai rispettivi state)
import { ActionReducerMap } from '@ngrx/store'


//oggetto che mappa i reducer in uno solo
interface AppState {
    contatoreState: ContatoreState,
    personaState: PersonaState
}

export const reducers: ActionReducerMap<AppState> = {
    contatoreState: contatoreReducer,
    personaState: personaReducer
}



