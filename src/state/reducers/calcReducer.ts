import { evaluate } from "mathjs";
import { CalcActionType } from "../action-types";
import { CalcAction } from "../actions";

interface ICalculatorState {
  inputs: string;
  result: number;
}

const initialState: ICalculatorState = {
  inputs: "0",
  result: 0,
};

const operations = ["x", "+", "-", "/", "RESET", "DEL", "="];

const isOperator = (newInput: string): boolean => {
  return operations.some((operator) => newInput.includes(operator));
};

const validateInput = (currentState: string, newInput: string): boolean => {
  const lastInput = currentState.slice(-1);

  // .. or +.
  if (
    newInput === "." &&
    (currentState.includes(".") || isOperator(lastInput))
  ) {
    return false;
  }

  // .+
  if (isOperator(newInput) && lastInput === ".") {
    return false;
  }

  // ++
  if (isOperator(newInput) && isOperator(currentState)) {
    return false;
  }

  return true;
};

const reducer = (
  state: ICalculatorState = initialState,
  action: CalcAction
): ICalculatorState => {
  switch (action.type) {
    case CalcActionType.INPUT:
      if (
        state.inputs === "0" &&
        (isOperator(action.payload) || action.payload === ".")
      ) {
        return {
          inputs: "0",
          result: 0,
        };
      }

      return validateInput(state.inputs, action.payload) === true
        ? {
            ...state,
            inputs:
              state.result !== 0
                ? action.payload
                : state.inputs === "0"
                ? action.payload
                : state.inputs.concat(action.payload),
            result: 0,
          }
        : state;

    case CalcActionType.CALCULATE:
      return {
        ...state,
        inputs: "0",
        result: evaluate(
          state.inputs.toString().toLowerCase().replace("x", "*")
        ),
      };

    case CalcActionType.DEL:
      const lastInput = state.inputs.slice(0, -1);
      return {
        ...state,
        inputs: lastInput === "" ? "0" : lastInput,
        result: 0,
      };

    case CalcActionType.RESET:
      return {
        ...state,
        inputs: "0",
        result: 0,
      };
    default:
      return state;
  }
};

export default reducer;
