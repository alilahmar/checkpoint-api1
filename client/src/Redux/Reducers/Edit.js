import { TOGGLE_TRUE, TOGGLE_FALSE } from "../constants/Edit";

const initialization = {
  edit: false,
};

export const editReducer = (state = initialization, { type }) => {
  switch (type) {
    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };

    default:
      return state;
  }
};
