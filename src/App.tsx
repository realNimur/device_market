import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Provider} from "react-redux";
import {store} from "./store/";
import NavBar from "./components/NavBar";
import styled, {createGlobalStyle} from 'styled-components'

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
  
  p{
    margin-bottom: 0;
  }
`

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle />
                <Wrapper>
                    <NavBar />
                    <AppRouter />
                </Wrapper>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
