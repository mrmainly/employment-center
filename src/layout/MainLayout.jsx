import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import { MainHeader, Footer, MobileHeader, FeedBackModal } from "../components";

const MainLayout = () => {
    return (
        <div>
            <MainHeader />
            <MobileHeader />
            <FeedBackModal />
            <Box
                sx={{
                    bgcolor: "bg.main",
                    overflow: "hidden",
                    pb: 11.4,
                    pt: 24,
                    minHeight: 800,
                }}
            >
                <Container maxWidth="xl">
                    <Outlet />
                </Container>
            </Box>
            <Footer />
        </div>
    );
};

export default MainLayout;
