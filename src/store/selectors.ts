import {userStoreType} from "./User/UserStore";
import {deviceStoreType, selectedParamBrand, selectedParamType} from "./Device/DeviceStore";

type stateType = {
    user: userStoreType,
    device: deviceStoreType
}
export const selectAuthUser = (state: stateType) => state.user.user
export const selectIsAuth = (state: stateType) => state.user.isAuth
export const selectDevices = (state: stateType) => state.device.devices
export const selectDevicesTypes = (state: stateType) => state.device.types
export const selectDevicesBrands = (state: stateType) => state.device.brands
export const selectDeviceType = (state: stateType): selectedParamType => state.device.selectedParam.type
export const selectDeviceBrand = (state: stateType): selectedParamBrand => state.device.selectedParam.brand