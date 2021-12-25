import React from 'react';
import {useSelector} from "react-redux";
import {selectDevices} from "../store/selectors";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import {deviceType} from "../store/Device/DeviceStore";

const DeviceList = () => {
    const devices = useSelector(selectDevices);
    return (
        <div>
            <Row className={"d-flex"}>
                {devices.map((device : deviceType) => <DeviceItem key={device.id} device={device} />)}
            </Row>
        </div>
    );
};

export default DeviceList;