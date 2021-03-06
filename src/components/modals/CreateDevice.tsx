import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {CreateTypeProps} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {selectDeviceBrand, selectDevicesBrands, selectDevicesTypes, selectDeviceType} from "../../store/selectors";
import {deviceBrand, deviceType} from "../../store/Device/DeviceStore";
import {setBrands, setSelectedBrand, setSelectedType, setTypes} from "../../store/Device/actionDevice";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";

type infoProps = {
    title: string
    description: string
    number: number
}

const CreateDevice = ({show, onHide}: CreateTypeProps) => {
    const types = useSelector(selectDevicesTypes);
    const brands = useSelector(selectDevicesBrands);
    const selectType = useSelector(selectDeviceType);
    const selectBrand = useSelector(selectDeviceBrand);

    const dispatch = useDispatch();

    const [info, setInfo] = useState<infoProps[]>([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState<File | null>(null);
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (id: number) => {
        const filteredInfo = info.filter((item) => item.number !== id)
        setInfo(filteredInfo)
    }

    const changeInfo = (key: string, value: string, number: number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', String(price));
        // @ts-ignore
        formData.append('img', file);
        formData.append('brandId', String(selectBrand.id));
        formData.append('typeId', String(selectType.id));
        formData.append('info', JSON.stringify(info));
        createDevice(formData).then(data => onHide());
    }

    useEffect(() => {
        fetchTypes().then(data => dispatch(setTypes(data)));
        fetchBrands().then(data => dispatch(setBrands(data)));
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ???????????????? ?????????? ????????????????????
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>{selectType.name ? selectType.name : "???????????????? ??????"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {types.map((type) =>
                                <Dropdown.Item
                                    onClick={() => dispatch(setSelectedType(type))}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={'mt-2'}>
                        <Dropdown.Toggle>{selectBrand.name ? selectBrand.name : "???????????????? ??????????"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {brands.map((brand) =>
                                <Dropdown.Item
                                    onClick={() => dispatch(setSelectedBrand(brand))}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className={'mt-2'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={'?????????????? ???????????????? ????????????????????'}
                    />
                    <Form.Control
                        className={'mt-2'}
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        placeholder={'?????????????? ?????????????????? ????????????????????'}
                        type={'number'}
                    />
                    <Form.Control
                        onChange={(e: ChangeEvent<HTMLInputElement>) => selectFile(e)}
                        className={'mt-2'}
                        placeholder={'?????????????????? ??????????????????????'}
                        type={'file'}
                    />
                    <hr />
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >???????????????? ?????????? ????????????????</Button>
                    {info.map((i) =>
                        <Row className={'mt-3 '} key={i.number}>
                            <Col md={5}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => changeInfo('title', e.target.value, i.number)}
                                    placeholder={'?????????????? ???????????????? ????????????????'} />
                            </Col>
                            <Col md={5}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => changeInfo('description', e.target.value, i.number)}
                                    placeholder={'?????????????? ???????????????? ????????????????'}
                                />
                            </Col>
                            <Col md={2}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => removeInfo(i.number)}
                                >??????????????</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>??????????????</Button>
                <Button variant={"outline-success"} onClick={addDevice}>????????????????</Button>
            </Modal.Footer>
        </Modal>
    )
        ;
};

export default CreateDevice;