import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row, Table} from "react-bootstrap";
import bigStar from '../assets/img/bigStar.svg';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {fetchOneDevices} from "../http/deviceAPI";

const RatingStyled = styled.div`
  width: 75px;
  height: 75px;
  background-image: url(${bigStar});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardDeviceStyled = styled(Card)`
  height: 300px;
  max-width: 300px;
  border: 5px solid lightgray;
`

type DeviceParamsInfo = {
    id: number | null
    title: string | null
    description: string | null
}

type DeviceParams = {
    name: string | null
    img: string | null
    rating: number | null
    price: number | null
    info: DeviceParamsInfo[]
}

const DevicePages = () => {
    const [device, setDevice] = useState<DeviceParams>({
        name: null,
        img: null,
        rating: null,
        price: null,
        info: [{
            id: null,
            title: null,
            description: null,
        }]
    });
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className={'mt-2'}>
            <Row>
                <Col md={8} className='d-flex flex-column justify-content-center align-items-center position-relative'>
                    <h2>{device.name}</h2>
                    {
                        device.img && <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                    }
                    <RatingStyled>
                        <h2 className={'mb-0'}>{device.rating}</h2>
                    </RatingStyled>
                </Col>
                <Col md={4}>
                    <CardDeviceStyled
                        className={'d-flex flex-column align-items-center justify-content-around'}
                    >
                        <h3>???? {device.price} ??????.</h3>
                        <Button variant={'outline-dark'}>???????????????? ?? ??????????????</Button>
                    </CardDeviceStyled>
                </Col>
            </Row>
            <Row className={'d-flex flex-column m-3'}>
                <Table striped bordered hover variant="light">
                    <thead>
                    <tr>
                        <th>????????????????</th>
                        <th>????????????????</th>
                    </tr>
                    </thead>
                    <tbody>
                    {device.info.map((info) =>
                        <tr key={info.id}>
                            <td>{info.title}</td>
                            <td>{info.description}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
};

export default DevicePages;