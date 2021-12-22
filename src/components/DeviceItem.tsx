import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import styled from 'styled-components';
import {deviceType} from "../store/Device/DeviceStore";
import starSvg from '../assets/img/star.svg';
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

type DeviceItemProp = {
    device: deviceType
}
const CardStyled = styled(Card)`
  width: 150px;
  cursor: pointer;
`

const DeviceItem = (props: DeviceItemProp) => {
    const {device} = props;
    const navigate = useNavigate();
    return (
        <Col md={3} className={'mb-2'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <CardStyled border={"light"}>
                <Image src={device.img} height={150} width={150} alt={device.name} />
                <div className="text-black-50 d-flex justify-content-between align-items-center mt-2">
                    <p>Samsung...</p>
                    <div className="d-flex align-items-center">
                        <p>{device.rating}</p>
                        <Image src={starSvg} width={14} height={14} alt={'rating'} />
                    </div>
                </div>
                <p>{device.name}</p>
            </CardStyled>

        </Col>
    );
};

export default DeviceItem;