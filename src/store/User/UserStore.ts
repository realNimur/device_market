import {SET_AUTH, SET_USER} from "./actionUser";

export const initialState = {
    isAuth: false,
    user: {}
}
export type userStoreType = typeof initialState;

type actionType = {
    type: string
    payload?: any
}

export const userReducer = (state = initialState, {type, payload}: actionType) => {
    switch (type) {
        case SET_USER: {
            return {
                ...state,
                user: payload
            }
        }
        case SET_AUTH: {
            return {
                ...state,
                isAuth: payload
            }
        }
        default:
            return state;
    }
}
