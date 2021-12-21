import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../store/User/selectors";

const AppRouter = () => {
    const isAuth = useSelector(selectIsAuth);
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component />} key={path} />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component />} key={path} />
            )}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;