import { useLocation, Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import {
    MainHeader,
    Footer,
    MobileHeader,
    FeedBackModal,
} from "../components";
import ROUTES from "../routes";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div>
            {location.pathname !== ROUTES.HOME && <MainHeader />}
            <MobileHeader />
            <FeedBackModal />
            <Box
                sx={{
                    bgcolor: "bg.main",
                    overflow: "hidden",
                    pb: 11.4,
                    pt: location.pathname !== ROUTES.HOME && 10,
                    minHeight: 800,
                }}
            >
                <Outlet />
            </Box>
            <Footer />
        </div>
    );
};

export default MainLayout;
