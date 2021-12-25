import {
    SET_BRANDS,
    SET_CURRENT_PAGE,
    SET_DEVICES,
    SET_LIMIT_ITEM,
    SET_SELECTED_BRAND,
    SET_SELECTED_TYPE,
    SET_TOTAL_COUNT,
    SET_TYPES
} from "./actionDevice";


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
    },
    page: {
        currentPage: 1,
        totalCount: 0,
        limitItem: 2
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
                },
                page: {
                    ...state.page,
                    currentPage: 1
                }
            }
        }
        case SET_SELECTED_BRAND: {
            return {
                ...state,
                selectedParam: {
                    ...state.selectedParam,
                    brand: payload
                },
                page: {
                    ...state.page,
                    currentPage: 1
                }
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                page: {
                    ...state.page,
                    currentPage: payload
                }
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                page: {
                    ...state.page,
                    totalCount: payload
                }
            }
        }
        case SET_LIMIT_ITEM: {
            return {
                ...state,
                page: {
                    ...state.page,
                    limitItem: payload
                }
            }
        }
        default:
            return state;
    }
}
