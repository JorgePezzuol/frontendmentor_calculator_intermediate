import { evaluate } from "mathjs";
import { CalcActionType } from "../action-types";
import { CalcAction } from "../actions";

interface ICalculatorState {
  inputs: string;
}

const initialState: ICalculatorState = {
  inputs: "0",
};

const symbols = ["x", "+", "-", "/", "RESET", "DEL", "="];

const hasSymbol = (newInput: string): boolean => {
  return symbols.some((symbol) => newInput.includes(symbol));
};

const validateInput = (currentState: string, newInput: string): boolean => {
  if (currentState === "." && newInput === ".") {
    return false;
  }

  // split with symbols and check if [1] has .
  let hasDot = false;

  symbols.forEach((symbol: string) => {
    if (currentState.includes(symbol)) {
      const split = currentState.split(symbol);
      if (split[1].includes(".")) {
        hasDot = true;
      }
    }
  });

  const lastInput = currentState.slice(-1);

  if (
    !hasSymbol(currentState) &&
    currentState.includes(".") &&
    newInput === "."
  ) {
    return false;
  }

  // .. or +.
  if (newInput === "." && (hasSymbol(lastInput) || hasDot)) {
    return false;
  }

  // .+
  if (hasSymbol(newInput) && lastInput === ".") {
    return false;
  }

  // ++
  if (hasSymbol(newInput) && hasSymbol(currentState)) {
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
      return validateInput(state.inputs.toString(), action.payload) === true
        ? {
            ...state,
            inputs:
              state.inputs === "0"
                ? action.payload === "."
                  ? state.inputs.toString().concat(action.payload)
                  : action.payload
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
