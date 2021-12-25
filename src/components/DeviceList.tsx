import React from 'react';
import {useSelector} from "react-redux";
import {selectDevices} from "../store/selectors";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import {deviceType} from "../store/Device/DeviceStore";
import Pages from "./Pages";

const DeviceList = () => {
    const devices = useSelector(selectDevices);
    return (
        <div>
            <Row className={"d-flex mt-3"}>
                {devices.map((device: deviceType) => <DeviceItem key={device.id} device={device} />)}
            </Row>
            <Pages />
        </div>
    );
};

export default DeviceList;