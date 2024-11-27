export const ADD_AGENDA = "ADD_AGENDA"

export interface IAgenda {
  id: number
  nome: string
  sobrenome: string
  telefone: string
}

export interface AgendaState {
  agenda: IAgenda[]
}

interface AddAgenda {
  type: typeof ADD_AGENDA
  payload: IAgenda
}

export type AgendaAction = AddAgenda
