import {SET_BRANDS, SET_DEVICES, SET_SELECTED_BRAND, SET_SELECTED_TYPE, SET_TYPES} from "./actionDevice";


export const initialState = {
    types: [],
    brands: [],
    devices: [],
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
export type deviceBrand = { id: number, name: string };
export type selectedParamType = { id: number | null, name: string | null };
export type selectedParamBrand = { id: number | null, name: string | null };

type actionType = {
    type: string
    payload?: any
}

export const deviceReducer = (state = initialState, {type, payload}: actionType) => {
    switch (type) {
        case SET_TYPES: {
            return {
                ...state,
                types: payload
            }
        }
        case SET_BRANDS: {
            return {
                ...state,
                brands: payload
            }
        }
        case SET_DEVICES: {
            return {
                ...state,
                devices: payload
            }
        }
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
