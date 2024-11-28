export const ADD_AGENDA = "ADD_AGENDA"

export interface IAgenda {
  id: number
  nome: string
  sobrenome: string
  telefone: string
}

export interface AgendaAction {
  type: typeof ADD_AGENDA;
  payload: IAgenda;
}

export interface AgendaState {
  agendas: IAgenda[];
}
