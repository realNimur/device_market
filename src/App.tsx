import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Provider} from "react-redux";
import {store} from "./store/";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavBar />
                <AppRouter />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
