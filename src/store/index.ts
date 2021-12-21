import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./User/UserStore";
import {deviceReducer} from "./Device/DeviceStore";

export const store = createStore(combineReducers({
    user: userReducer,
    device: deviceReducer,
}), composeWithDevTools());