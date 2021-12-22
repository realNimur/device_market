import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../store/User/selectors";
import styled from "styled-components";

const AppRouterWrapper = styled.div`
  flex-grow: 1;
  display: flex;
`


const AppRouter = () => {
    const isAuth = useSelector(selectIsAuth);
    return (
        <AppRouterWrapper>
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route path={path} element={<Component />} key={path} />
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} element={<Component />} key={path} />
                )}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </AppRouterWrapper>
    );
};

export default AppRouter;