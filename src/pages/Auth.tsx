import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import styled from "styled-components";
import {login, registration} from "../http/userAPI";
import {setAuth, setUser} from "../store/User/actionUser";
import {useDispatch} from "react-redux";

const CardWrapper = styled(Card)`
  width: 100%;
  max-width: 600px;
`

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const clickButton = async () => {
        function getErrorMessage(error: unknown) {
            if (error instanceof Error) return error.message
            return String(error)
        }

        try {
            let data;
            if (isLogin === true) {
                data = await login(email, password)
            } else {
                data = await registration(email, password);
            }
            dispatch(setAuth(true));
            dispatch(setUser(data));
            navigate(SHOP_ROUTE);
        } catch (error) {
            alert(getErrorMessage(error))
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <CardWrapper className={"p-5"}>
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-4"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="my-2"
                        placeholder="Введите ваш пароль..."
                        type="password"
                    />
                    <Row className={"mt-3"}>
                        <div className={"d-flex justify-content-between align-items-center"}>
                            {isLogin ?
                                <>
                                    <p>Нет аккаунта?<NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                                    </p>
                                </>
                                :
                                <>
                                    <p>Есть аккаунт?<NavLink to={LOGIN_ROUTE}>Войдите</NavLink></p>
                                </>
                            }

                            <Button
                                variant="outline-success"
                                className=""
                                onClick={clickButton}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </div>
                    </Row>

                </Form>
            </CardWrapper>
        </Container>
    );
};

export default Auth;