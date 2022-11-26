import { useLocation } from "react-router-dom";

import MainLayout from "./MainLayout";
import HomeLayout from "./HomeLayout";
import ROUTES from "../routes";

const WrapperLayouts = () => {
    const location = useLocation();

    return location.pathname === ROUTES.HOME ? <HomeLayout /> : <MainLayout />;
};

export default WrapperLayouts;
