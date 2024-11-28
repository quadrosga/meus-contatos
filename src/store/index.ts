import { combineReducers } from "redux";
import { agendaReducer } from "./reducers/addReducer";
import { filtroReducer } from "./reducers/filtroReducer";

const rootReducer = combineReducers({
  add: agendaReducer,
  filtros: filtroReducer,
});

// Tipo principal do estado
export type RootState = ReturnType<typeof rootReducer>;

// Tipo das ações combinadas
export type AppActions = Parameters<typeof rootReducer>[1];

export default rootReducer;
