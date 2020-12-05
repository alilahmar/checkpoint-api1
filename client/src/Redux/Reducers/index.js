import { combineReducers } from "redux";
import { userReducer } from "./Users";
import { editReducer } from "./Edit";

export const rootReducer = combineReducers({ userReducer, editReducer });
