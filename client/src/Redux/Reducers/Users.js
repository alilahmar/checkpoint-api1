// import constant:
import {
  GET_USERS_LOAD,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER,
  EDIT_USER,
} from "../constants/Constants";
//  initialization
const initialization = {
  users: [],
  loadUsers: false,
  errors: null,
  // edit: false,
  user: {},
  editUser: "",
};

export const userReducer = (state = initialization, { type, payload }) => {
  switch (type) {
    case GET_USERS_LOAD:
      return { ...state, loadUsers: true };
    case GET_USERS_SUCCESS:
      return { ...state, users: payload, loadUsers: false };
    case GET_USERS_FAIL:
      return { ...state, loadUsers: false, errors: payload };
    case GET_USER:
      return { ...state, user: payload };
    case EDIT_USER:
      return { ...state, editUser: payload };
    default:
      return state;
  }
};
