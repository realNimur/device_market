import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth} from "../store/selectors";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import styled from "styled-components";
import {setAuth} from "../store/User/actionUser";

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
    const dispatch = useDispatch();
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLinkStyled to={SHOP_ROUTE}>BuyDevice</NavLinkStyled>
                    {isAuth ?
                        <NavStyled className="ml-auto">
                            <Button variant={"outline-light"} className={"me-4"}>Админ панель</Button>
                            <Button variant={"outline-light"} onClick={() => {
                                dispatch(setAuth(false))
                            }}>Выйти</Button>
                        </NavStyled>
                        :
                        <NavStyled className="ml-auto">
                            <Button variant={"outline-light"} className={"me-4"}>Админ панель</Button>
                            <Button variant={"outline-light"} onClick={() => {
                                dispatch(setAuth(true))
                            }}>Авторизоваться</Button>
                        </NavStyled>
                    }
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;