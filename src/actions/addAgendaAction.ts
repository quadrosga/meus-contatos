import { ADD_AGENDA, IAgenda, AgendaAction } from "../types/agendaTypes"


export const addAgenda = (agenda: IAgenda): AgendaAction => {
    return {
        type: ADD_AGENDA,
        payload: agenda
    }
}
