import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import { MainHeader, Footer } from "../components";
import ROUTES from "../routes";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div>
            {location.pathname !== ROUTES.HOME && <MainHeader />}
            <Box sx={{ bgcolor: "bg.main" }}>
                <Outlet />
            </Box>
            <Footer />
        </div>
    );
};

export default MainLayout;
