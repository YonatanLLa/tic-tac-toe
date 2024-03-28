// actions.ts
import { Action } from './reducer';
import { AUMENTAR, DISMINUIR } from './tipes';


export const aumentarNumero = (): Action => ({
  type: AUMENTAR,
});

export const disminuirNumero = (): Action => ({
  type: DISMINUIR,
});