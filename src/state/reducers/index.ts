import { combineReducers } from "redux";
import calcReducer from "./calcReducer";

const reducers = combineReducers({
  calculator: calcReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
