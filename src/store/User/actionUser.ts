export const SET_AUTH = 'SET_AUTH';
export const SET_USER = 'SET_USER';

export const setAuth = (boolean: boolean) => ({type: SET_AUTH, payload: boolean})
export const setUser = (user: any) => ({type: SET_USER, payload: user})