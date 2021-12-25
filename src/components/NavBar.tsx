import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../store/selectors";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import styled from "styled-components";
import {setAuth, setUser} from "../store/User/actionUser";

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
  }
`
const NavStyled = styled(Nav)`
  color: white;
`
const NavBar = () => {
    const isAuth = useSelector(selectIsAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(setAuth(false));
        dispatch(setUser({}));
        localStorage.removeItem('token');
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLinkStyled to={SHOP_ROUTE}>BuyDevice</NavLinkStyled>
                    {isAuth ?
                        <NavStyled className="ml-auto">
                            <Button
                                variant={"outline-light"}
                                className={"me-4"}
                                onClick={() => {
                                    navigate(ADMIN_ROUTE)
                                }}
                            >Админ панель</Button>
                            <Button
                                variant={"outline-light"}
                                onClick={() => logOut()}>Выйти</Button>
                        </NavStyled>
                        :
                        <NavStyled className="ml-auto">
                            <Button variant={"outline-light"} onClick={() => {
                                navigate(LOGIN_ROUTE)
                            }}>Авторизоваться</Button>
                        </NavStyled>
                    }
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;