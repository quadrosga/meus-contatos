import { FiltrarAction, FILTRAR_TEXTO } from "../types/filtrarTypes";

export const filtrarTexto = (texto: string): FiltrarAction => {
  return {
    type: FILTRAR_TEXTO,
    texto
  }
}
