import React from 'react';
import {Button, Card, Col, Container, Image, Row, Table} from "react-bootstrap";
import bigStar from '../assets/img/bigStar.svg';
import styled from "styled-components";

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

const DevicePages = () => {
    const device = {id: 1, name: 'Iphone 1', price: 25000, rating: 4.1, img: 'https://via.placeholder.com/250'};
    const description = [
        {id: 1, title: 'Физическая память', value: '4, 8, 16 Гб'},
        {id: 2, title: 'Размеры', value: '115.5 х 61 х 11.6 мм.'},
        {id: 3, title: 'Вес устройства', value: '135 г.'},
        {id: 4, title: 'ОЗУ', value: '128Мб'},
        {id: 5, title: 'Частота процессора', value: '620 МГц'},
        {id: 6, title: 'Разрешение экрана', value: '320 х 480'},
        {id: 7, title: 'Камера ', value: '2.0 Мегапикселя'},
        {id: 8, title: 'Датчики', value: 'акселерометр, датчики освещённости и приближения'},
    ]
    return (
        <Container className={'mt-2'}>
            <Row>
                <Col md={8} className='d-flex flex-column justify-content-center align-items-center position-relative'>
                    <h2>{device.name}</h2>
                    <Image width={300} height={300} src={device.img} />
                    <RatingStyled>
                        <h2 className={'mb-0'}>{device.rating}</h2>
                    </RatingStyled>
                </Col>
                <Col md={4}>
                    <CardDeviceStyled
                        className={'d-flex flex-column align-items-center justify-content-around'}
                    >
                        <h3>от {device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </CardDeviceStyled>
                </Col>
            </Row>
            <Row className={'d-flex flex-column m-3'}>
                <Table striped bordered hover variant="light">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Значение</th>
                    </tr>
                    </thead>
                    <tbody>
                    {description.map((info) =>
                        <tr key={info.id}>
                            <td>{info.title}</td>
                            <td>{info.value}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
};

export default DevicePages;