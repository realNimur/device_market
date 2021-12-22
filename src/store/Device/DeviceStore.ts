import {SET_SELECTED_TYPE} from "./actionDevice";


export const initialState = {
    types: [
        {id: 1, name: 'Холодильник'},
        {id: 2, name: 'Смартфоны'},
        {id: 3, name: 'Ноутбуки'},
        {id: 4, name: 'Телевизоры'},
    ],
    brands: [
        {id: 1, name: 'Samsung'},
        {id: 2, name: 'Apple'},
    ],
    devices: [
        {id: 1, name: 'Iphone 1', price: 25000, rating: 4.1, img: '123'},
        {id: 2, name: 'Iphone 2', price: 30000, rating: 4.2, img: '123'},
        {id: 3, name: 'Iphone 3', price: 35000, rating: 4.3, img: '123'},
        {id: 4, name: 'Iphone 4', price: 40000, rating: 4.5, img: '123'},
    ],
    selectedParam: {
        type: null,
        brand: null,
    }
}
export type deviceStoreType = typeof initialState;

export type selectedParamType = { id: number, name: string } | null;

type actionType = {
    type: string
    payload?: any
}

export const deviceReducer = (state = initialState, {type, payload}: actionType) => {
    switch (type) {
        case SET_SELECTED_TYPE: {
            return {
                ...state,
                selectedParam: {
                    ...state.selectedParam,
                    type: payload
                }
            }
        }
        default:
            return state;
    }
}
