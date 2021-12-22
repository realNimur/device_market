import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Provider} from "react-redux";
import {store} from "./store/";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Wrapper>
                    <NavBar />
                    <AppRouter />
                </Wrapper>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
