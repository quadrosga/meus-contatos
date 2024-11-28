import { ADD_AGENDA, IAgenda, AgendaAction, AgendaState } from "../../types/agendaTypes"



const initialState:AgendaState  = {
  agendas: []
}

  export const agendaReducer = (state: AgendaState = initialState, action: AgendaAction): AgendaState => {
    switch (action.type) {
    case ADD_AGENDA:
      const novaAgenda: IAgenda = {
          id: Date.now(),
          nome: action.payload.nome,
          sobrenome: action.payload.sobrenome,
          telefone: action.payload.telefone,
      };
      return {
        ...state,
        agendas: state.agendas.concat(novaAgenda)
      };

      default:
        return state
    }
};
