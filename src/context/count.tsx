// GlobalStateContext.tsx
import  { createContext, useContext, useReducer, FC, Dispatch } from 'react';

// Definir el tipo para el tema
export type Theme = "light" | "dark";

// Definir el estado global
export interface State {
  theme: Theme;
}

// Definir las acciones para cambiar el tema
export type Action = { type: 'TOGGLE_THEME' };

// Estado inicial
const initialState: State = {
  theme: "light",
};

// Reductor para cambiar el tema
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

// Crear el contexto global
const GlobalStateContext = createContext<{ state: State; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

// Propiedades esperadas por el proveedor de contexto
interface GlobalStateProviderProps {
  children: React.ReactNode;
}
// Proveedor de contexto global
export const GlobalStateProvider: FC<GlobalStateProviderProps>= ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Hook para acceder al estado global
export const useGlobalState = () => useContext(GlobalStateContext);