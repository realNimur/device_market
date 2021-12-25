import React, {useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {CreateTypeProps} from "../../types";
import {useSelector} from "react-redux";
import {selectDevicesBrands, selectDevicesTypes} from "../../store/selectors";
import {deviceBrand, deviceType} from "../../store/Device/DeviceStore";

const CreateDevice = ({show, onHide}: CreateTypeProps) => {
    const types = useSelector(selectDevicesTypes);
    const brands = useSelector(selectDevicesBrands);

    type infoProps = {
        title: string
        description: string
        number: number
    }


    const [info, setInfo] = useState<infoProps[]>([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (id: number) => {
        const filteredInfo = info.filter((item) => item.number !== id)
        setInfo(filteredInfo)
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новое устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {types.map((type : deviceType) =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {brands.map((brand : deviceBrand) =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className={'mt-2'}
                        placeholder={'Введите название устройства'}
                    />
                    <Form.Control
                        className={'mt-2'}
                        placeholder={'Введите стоимость устройства'}
                        type={'number'}
                    />
                    <Form.Control
                        className={'mt-2'}
                        placeholder={'Загрузите изображение'}
                        type={'file'}
                    />
                    <hr />
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >Добавить новое свойство</Button>
                    {info.map((i) =>
                        <Row className={'mt-3 '} key={i.number}>
                            <Col md={5}>
                                <Form.Control placeholder={'Введите название свойства'} />
                            </Col>
                            <Col md={5}>
                                <Form.Control placeholder={'Введите описание свойства'} />
                            </Col>
                            <Col md={2}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => removeInfo(i.number)}
                                >Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
        ;
};

export default CreateDevice;