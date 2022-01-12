import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import styled, {createGlobalStyle} from 'styled-components'
import {useDispatch} from "react-redux";
import {setAuth, setUser} from "./store/User/actionUser";
import {Spinner} from "react-bootstrap";
import {check} from "./http/userAPI";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    margin-bottom: 0;
  }
`
const SpinnerStyled = styled(Spinner)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`
function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        check().then(data => {
            dispatch(setUser(data))
            dispatch(setAuth(true));
        }).finally(() => setLoading(false))
    }, []);

    if (loading) {
        return <SpinnerStyled animation={"grow"} />
    }

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Wrapper>
                <NavBar />
                <AppRouter />
            </Wrapper>
        </BrowserRouter>
    );
}

export default App;
