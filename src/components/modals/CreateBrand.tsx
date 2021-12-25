import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {CreateTypeProps} from "../../types";
import {createBrand} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}: CreateTypeProps) => {
    const [value, setValue] = useState('');

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('');
            onHide();
        })
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
                    Добавить новый бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        placeholder={'Введите название бренда'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;