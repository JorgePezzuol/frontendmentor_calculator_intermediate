import { CalcActionType } from "../action-types";

interface DelAction {
  type: CalcActionType.DEL;
}

interface CalculcateAction {
  type: CalcActionType.CALCULATE;
}

interface ResetAction {
  type: CalcActionType.RESET;
}

interface InputAction {
  type: CalcActionType.INPUT;
  payload: string;
}

export type CalcAction =
  | DelAction
  | CalculcateAction
  | ResetAction
  | InputAction;
