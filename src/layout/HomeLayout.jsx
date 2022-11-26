import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Footer, MobileHeader, FeedBackModal } from "../components";

const HomeLayout = () => {
    return (
        <div>
            <MobileHeader />
            <FeedBackModal />
            <Box
                sx={{
                    bgcolor: "bg.main",
                    overflow: "hidden",
                    pb: 11.4,
                    minHeight: 800,
                }}
            >
                <Outlet />
            </Box>
            <Footer />
        </div>
    );
};

export default HomeLayout;
