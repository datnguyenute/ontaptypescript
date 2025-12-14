import { useReducer } from "react";
import logger from "./logger";
import reducer, { initialState } from "./reducer";
import Context from "./Context";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(reducer), initialState);

  const value = [state, dispatch];

  return <Context value={value}>{children}</Context>;
};

export default Provider;
