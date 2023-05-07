import { combineReducers } from "redux";

import exerReducer from "./exersices/exersices.reducer";

export default combineReducers({
    exersic: exerReducer
})