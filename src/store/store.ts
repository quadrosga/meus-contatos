import { createStore } from "redux";
import rootReducer from "./";

export const store = createStore(rootReducer);

// Tipos para usar no app
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
