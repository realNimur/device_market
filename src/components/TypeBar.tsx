import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {selectDevicesTypes, selectDeviceType} from "../store/selectors";
import {setSelectedType} from "../store/Device/actionDevice";
import styled from "styled-components";
import {deviceType} from "../store/Device/DeviceStore";

const ListGroupStyled = styled(ListGroup.Item)`
  cursor: pointer;
`

const TypeBar = () => {
    const devicesTypes = useSelector(selectDevicesTypes);
    const selectType = useSelector(selectDeviceType);
    const dispatch = useDispatch();

    if (!devicesTypes || devicesTypes.length === 0){
        return null;
    }

    return (
        <ListGroup>
            {devicesTypes.map((item) =>
                <ListGroupStyled
                    active={item.id === selectType?.id}
                    key={item.id}
                    onClick={() => dispatch(setSelectedType(item))}
                >
                    {item.name}
                </ListGroupStyled>
            )}
        </ListGroup>
    );
};

export default TypeBar;