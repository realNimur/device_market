export const SET_TYPES = 'SET_TYPES';
export const SET_BRANDS = 'SET_BRANDS';
export const SET_DEVICES = 'SET_DEVICES';

export const setTypes = (boolean: any) => ({type: SET_TYPES, payload: boolean})
export const setBrands = (brands: any) => ({type: SET_BRANDS, payload: brands})
export const setDevices = (devices: any) => ({type: SET_DEVICES, payload: devices})