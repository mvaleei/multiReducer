import { IPersona } from '../Model/Ipersona'

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
    personaState: PersonaState = inizializzazione
) {
    

}