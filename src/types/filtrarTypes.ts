export const FILTRAR_TEXTO = "FILTRAR_TEXTO"

export interface FiltrarState {
  texto: string
}

interface FiltrarTextoAction {
  type: typeof FILTRAR_TEXTO
  texto: string
}

export type FiltrarAction = FiltrarTextoAction
