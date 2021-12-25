import {deviceType, selectedParamBrand, selectedParamType} from "./Device/DeviceStore";
import {stateType} from "../types";

export const selectCurrentPage = (state: stateType): number => state.device.page.currentPage
export const selectTotalCount = (state: stateType): number => state.device.page.totalCount
export const selectLimit = (state: stateType): number => state.device.page.limitItem
export const selectIsAuth = (state: stateType): boolean => state.user.isAuth
export const selectDevices = (state: stateType): deviceType[] => state.device.devices
export const selectDevicesTypes = (state: stateType): selectedParamType[] => state.device.types
export const selectDevicesBrands = (state: stateType): selectedParamBrand[] => state.device.brands
export const selectDeviceType = (state: stateType): selectedParamType => state.device.selectedParam.type
export const selectDeviceBrand = (state: stateType): selectedParamBrand => state.device.selectedParam.brand