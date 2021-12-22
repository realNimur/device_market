import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from 'react-router-dom';
import styled from "styled-components";

const CardWrapper = styled(Card)`
  width: 100%;
  max-width: 600px;
`

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <CardWrapper className={"p-5"}>
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-4"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="my-2"
                        placeholder="Введите ваш пароль..."
                    />
                    <Row className={"mt-3"}>
                        <div className={"d-flex justify-content-between align-items-center"}>
                            {isLogin ?
                                <>
                                    <p>Нет аккаунта?<NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></p>
                                </>
                                :
                                <>
                                    <p>Есть аккаунт?<NavLink to={LOGIN_ROUTE}>Войдите</NavLink></p>
                                </>
                            }

                            <Button variant="outline-success" className="">{isLogin ? 'Войти' : 'Регистрация'}</Button>
                        </div>
                    </Row>

                </Form>
            </CardWrapper>
        </Container>
    );
};

export default Auth;