export const SET_TYPES = 'SET_TYPES';
export const SET_BRANDS = 'SET_BRANDS';
export const SET_DEVICES = 'SET_DEVICES';

export const setTypes = (boolean : any) => ({SET_TYPES, boolean})
export const setBrands = (brands : any) => ({SET_BRANDS, brands})
export const setDevices = (devices : any) => ({SET_DEVICES, devices})