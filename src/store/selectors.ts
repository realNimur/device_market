import {userStoreType} from "./User/UserStore";
import {deviceStoreType, selectedParamType} from "./Device/DeviceStore";

type stateType = {
    user: userStoreType,
    device: deviceStoreType
}
export const selectIsAuth = (state: stateType) => state.user.isAuth
export const selectDevicesTypes = (state: stateType) => state.device.types
export const selectDeviceType = (state: stateType) : selectedParamType => state.device.selectedParam.type