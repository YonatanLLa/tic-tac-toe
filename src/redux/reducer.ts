import { AUMENTAR, DISMINUIR } from "./tipes";

// reducer.ts
export interface State {
    numero: number;
  }
  
  export type Action = { type: 'AUMENTAR' } | { type: 'DISMINUIR' };
  
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case AUMENTAR:
        return { ...state, numero: state.numero + 1 };
      case DISMINUIR:
        return { ...state, numero: state.numero - 1 };
      default:
        return state;
    }
  };
  
  export default reducer;