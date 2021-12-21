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
        default:
            return state;
    }
}
