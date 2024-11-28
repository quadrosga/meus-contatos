export const FILTRAR_TEXTO = "FILTRAR_TEXTO";

export interface FiltrarTextoAction {
  type: typeof FILTRAR_TEXTO;
  texto: string;
}

export type FiltrarAction = FiltrarTextoAction;

export interface FiltrarState {
  texto: string;
}
