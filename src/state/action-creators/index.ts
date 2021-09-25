import { Dispatch } from "redux";
import { CalcActionType } from "../action-types";
import { CalcAction } from "../actions/index";

export const input = (value: string) => {
  return (dispatch: Dispatch<CalcAction>) => {
    dispatch({
      type: CalcActionType.INPUT,
      payload: value,
    });
  };
};

export const calculate = () => {
  return (dispatch: Dispatch<CalcAction>) => {
    dispatch({
      type: CalcActionType.CALCULATE,
    });
  };
};

export const del = () => {
  return (dispatch: Dispatch<CalcAction>) => {
    dispatch({
      type: CalcActionType.DEL,
    });
  };
};

export const reset = () => {
  return (dispatch: Dispatch<CalcAction>) => {
    dispatch({
      type: CalcActionType.RESET,
    });
  };
};
