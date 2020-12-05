import { TOGGLE_TRUE, TOGGLE_FALSE } from "../constants/Edit";

export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};

export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};
