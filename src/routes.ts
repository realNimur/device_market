import Admin from "./pages/Admin";
import {ADMIN_ROUTE, CART_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePages from "./pages/DevicePages";
import Cart from "./pages/Cart";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CART_ROUTE,
        Component: Cart
    }
];
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePages
    }
];