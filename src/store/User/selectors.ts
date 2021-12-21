import {userStoreType} from "./UserStore";
import {deviceStoreType} from "../Device/DeviceStore";

type stateType = {
    user: userStoreType,
    device: deviceStoreType
}
export const selectIsAuth = (state: stateType) => state.user.isAuth