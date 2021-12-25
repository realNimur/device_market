import {userStoreType} from "./store/User/UserStore";
import {deviceStoreType} from "./store/Device/DeviceStore";

export type CreateTypeProps = {
    show: boolean,
    onHide: () => void
}

export type stateType = {
    user: userStoreType,
    device: deviceStoreType
}