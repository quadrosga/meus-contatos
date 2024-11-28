import { FiltrarState } from "../types/filtrarTypes";
import { IAgenda } from "../types/agendaTypes";

export const armazenaAgendaFiltrada = (agendas: IAgenda[], filtros: FiltrarState) => {
  const { texto } = filtros
  return agendas.filter((agenda) => {
    const tratarTexto =
    agenda.nome.toLowerCase().includes(texto.toLowerCase()) ||
    agenda.sobrenome.toLowerCase().includes(texto.toLowerCase()) ||
    agenda.telefone.toLowerCase().includes(texto.toLowerCase())

    return tratarTexto
  })
}
