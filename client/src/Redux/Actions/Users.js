import {
  GET_USERS_LOAD,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER,
  POST_USER,
  EDIT_USER,
} from "../constants/Constants";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_LOAD });
  try {
    let result = await axios.get("/api/people/");
    //  dispatch from action to reducer?
    dispatch({ type: GET_USERS_SUCCESS, payload: result.data.response });
  } catch (error) {
    // cant use console.log(error)
    dispatch({ type: GET_USERS_FAIL, payload: error });
  }
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/api/people/${id}`)
    .then((res) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};

export const getUser = (id) => (dispatch) => {
  axios
    .get(`/api/people/${id}`)
    .then((res) => dispatch({ type: GET_USER, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const postUser = (user) => (dispatch) => {
  axios
    .post("/api/people", user)
    .then((res) => dispatch(getUsers()))
    .catch((err) => console.log(err));
};

export const editUser = (id, user) => (dispatch) => {
  axios
    .put(`/api/people/${id}`, user)
    .then((res) => {
      dispatch(getUsers());
      dispatch({ type: EDIT_USER, payload: res.data.message });
    })
    .catch((err) => console.log(err));
};
