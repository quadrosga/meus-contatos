import { FiltrarAction, FiltrarState, FILTRAR_TEXTO } from "../../types/filtrarTypes";

const filtrarInitialState = {
  texto: "",
};

export const filtroReducer = (state = filtrarInitialState, action: FiltrarAction): FiltrarState => {
  switch (action.type) {
      case FILTRAR_TEXTO:
          return {
              ...state,
              texto: action.texto,
          };

      default:
          return state;
  }
};
