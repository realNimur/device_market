import {SET_SELECTED_BRAND, SET_SELECTED_TYPE} from "./actionDevice";


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
        {id: 3, name: 'Lenovo'},
        {id: 4, name: 'Asus'},
    ],
    devices: [
        {id: 1, name: 'Iphone 1', price: 25000, rating: 4.1, img: 'https://via.placeholder.com/250'},
        {id: 2, name: 'Iphone 2', price: 30000, rating: 4.2, img: 'https://via.placeholder.com/250'},
        {id: 3, name: 'Iphone 3', price: 35000, rating: 4.3, img: 'https://via.placeholder.com/250'},
        {id: 4, name: 'Iphone 4', price: 40000, rating: 4.5, img: 'https://via.placeholder.com/250'},
    ],
    selectedParam: {
        type: {
            id: null,
            name: null
        },
        brand: {
            id: null,
            name: null
        },
    }
}
export type deviceStoreType = typeof initialState;

export type deviceType = { id: number, name: string, price: number, rating: number, img: string };
export type selectedParamType = { id: number | null, name: string | null };
export type selectedParamBrand = { id: number | null, name: string | null };

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
        case SET_SELECTED_BRAND: {
            return {
                ...state,
                selectedParam: {
                    ...state.selectedParam,
                    brand: payload
                }
            }
        }
        default:
            return state;
    }
}
