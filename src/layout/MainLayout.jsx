import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import { MainHeader, Footer, MobileHeader } from "../components";
import ROUTES from "../routes";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div>
            {location.pathname !== ROUTES.HOME && <MainHeader />}
            <MobileHeader />
            <Box
                sx={{
                    bgcolor: "bg.main",
                    overflow: "hidden",
                    pb: 11.4,
                }}
            >
                <Outlet />
            </Box>
            <Footer />
        </div>
    );
};

export default MainLayout;
