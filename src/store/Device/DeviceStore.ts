export const initialState = {
    types: [
        {id: 1, name: 'Холодильник'},
        {id: 2, name: 'Смартфоны'},
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
    ]
}
export type userStoreType = typeof initialState;

type actionType = {
    type: string
    payload?: any
}

export const deviceReducer = (state = initialState, {type, payload}: actionType) => {
    switch (type) {
        default:
            return state;
    }
}
