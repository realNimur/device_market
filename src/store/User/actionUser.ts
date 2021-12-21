export const SET_AUTH = 'SET_AUTH';
export const SET_USER = 'SET_USER';

export const setAuth = (boolean : boolean) => ({SET_AUTH, boolean})
export const setUser = (user : any) => ({SET_USER, user})