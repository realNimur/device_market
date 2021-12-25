import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {useDispatch, useSelector} from "react-redux";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {setBrands, setDevices, setTotalCount, setTypes} from "../store/Device/actionDevice";
import {deviceType} from "../store/Device/DeviceStore";
import {selectCurrentPage, selectDeviceBrand, selectDeviceType, selectLimit} from "../store/selectors";

const Shop = () => {
    const currentPage = useSelector(selectCurrentPage);
    const selectBrand = useSelector(selectDeviceBrand);
    const selectType = useSelector(selectDeviceType);
    const limit = useSelector(selectLimit);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchTypes().then(data => dispatch(setTypes(data)));
        fetchBrands().then(data => dispatch(setBrands(data)));
        fetchDevices(null, null, 1, limit).then((data: { count: number, rows: deviceType[] }) => {
            dispatch(setTotalCount(data.count));
            dispatch(setDevices(data.rows));
        });
    }, [])

    useEffect(() => {
        fetchDevices(selectBrand.id, selectType.id, currentPage, limit).then((data: { count: number, rows: deviceType[] }) => {
            dispatch(setTotalCount(data.count));
            dispatch(setDevices(data.rows));
        });
    }, [currentPage, selectBrand, selectType])

    return (
        <Container>
            <Row className={"mt-3"}>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;