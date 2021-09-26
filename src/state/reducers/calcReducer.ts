import { evaluate } from "mathjs";
import { CalcActionType } from "../action-types";
import { CalcAction } from "../actions";

interface ICalculatorState {
  inputs: string;
}

const initialState: ICalculatorState = {
  inputs: "0",
};

const operations = ["x", "+", "-", "/", "RESET", "DEL", "="];

const isOperator = (newInput: string): boolean => {
  return operations.some((operator) => newInput.includes(operator));
};

const validateInput = (currentState: string, newInput: string): boolean => {
  const lastInput = currentState.slice(-1);

  // split with symbols and check if [1] has .
  let hasDot = false;
  
  operations.forEach((operator: string) => {
    if (currentState.includes(operator)) {
      const split = currentState.split(operator);
      if (split[1].includes(".")) {
        hasDot = true;
      }
    }
  });

  // .. or +.
  if (newInput === "." && (isOperator(lastInput) || hasDot)) {
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
        };
      }

      return validateInput(state.inputs.toString(), action.payload) === true
        ? {
            ...state,
            inputs:
              state.inputs === "0"
                ? action.payload
                : state.inputs.toString().concat(action.payload),
          }
        : state;

    case CalcActionType.CALCULATE:
      return {
        ...state,
        inputs: evaluate(
          state.inputs.toString().toLowerCase().replace("x", "*")
        ),
      };

    case CalcActionType.DEL:
      const lastInput = state.inputs.toString().slice(0, -1);
      return {
        ...state,
        inputs: lastInput === "" ? "0" : lastInput,
      };

    case CalcActionType.RESET:
      return {
        ...state,
        inputs: "0",
      };
    default:
      return state;
  }
};

export default reducer;
