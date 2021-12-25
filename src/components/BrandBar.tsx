import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectDeviceBrand, selectDevicesBrands} from "../store/selectors";
import {Card, Col, Row} from "react-bootstrap";
import {setSelectedBrand} from "../store/Device/actionDevice";
import styled from "styled-components";
import {deviceBrand} from "../store/Device/DeviceStore";

const CardWrapper = styled(Card)`
  cursor: pointer
`

const BrandBar = () => {
    const brands = useSelector(selectDevicesBrands);
    const selectedBrand = useSelector(selectDeviceBrand);
    const dispatch = useDispatch();
    return (
        <Row>
            <Col md={12} className={"d-flex flex-wrap"}>
                {brands.map((brand : deviceBrand) =>
                    <CardWrapper
                        key={brand.id}
                        className="p-3"
                        onClick={() => {
                            dispatch(setSelectedBrand(brand))
                        }}
                        border = {brand.id === selectedBrand.id ? 'danger' : 'light'}
                    >
                        {brand.name}
                    </CardWrapper>
                )}

            </Col>
        </Row>
    );
};

export default BrandBar;