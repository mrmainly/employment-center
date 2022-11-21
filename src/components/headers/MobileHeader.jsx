import {
    Box,
    Container,
    Typography,
    IconButton,
} from "@mui/material";
import { styled } from "@mui/system";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const TextWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("367")]: {
        display: "none",
    },
}));

const MobileHeader = () => {
    return (
        <Box
            sx={{
                bgcolor: "white",
                paddingTop: 1,
                paddingBottom: 1,
                width: "100%",
                display: {
                    xs: "block",
                    md: "none",
                },
                position: "fixed",
                zIndex: 10,
                boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.25)",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/img/logoSvg.svg" alt="" />
                    <TextWrapper>
                        <Typography
                            color="primary.main"
                            sx={{
                                fontWeight: 500,
                                fontSize: 18,
                                ml: 0.5,
                            }}
                        >
                            Работа в Якутии
                        </Typography>
                    </TextWrapper>
                </Box>

                <Box>
                    <IconButton>
                        <SearchIcon
                            fontSize="large"
                            sx={{ color: "primary.main" }}
                        />
                    </IconButton>
                    <IconButton>
                        <MenuIcon
                            fontSize="large"
                            sx={{ color: "primary.main", ml: 0.5 }}
                        />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
};

export default MobileHeader;
