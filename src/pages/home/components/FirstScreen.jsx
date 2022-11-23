import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { HomeHeader, SearchInput } from "../../../components";

const WrapperContainer = styled(Box)(({ theme }) => ({
    backgroundImage: "url(/img/HomeFirstScreen.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundAttachment: "fixed",
    [theme.breakpoints.down("md")]: {
        marginTop: 70,
    },
}));

const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: 650,
    [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start",
        height: 330,
        paddingTop: 50,
    },
    [theme.breakpoints.down("sm")]: {
        height: 300,
    },
}));

const FirstScreen = () => {
    return (
        <WrapperContainer>
            <HomeHeader />
            <CustomContainer maxWidth="xl">
                <Box
                    sx={{
                        boxSizing: "border-box",
                        width: {
                            xl: "65%",
                            lg: "50%",
                            md: "60%",
                            sm: "100%",
                            xs: "100%",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            color: "customColors.white",
                            textShadow:
                                "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            fontSize: {
                                xs: 26,
                                sm: 30,
                                md: 53,
                            },
                            fontWeight: 600,
                        }}
                    >
                        Найдите работу мечты в любой точке Якутии
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        color: "customColors.white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        fontSize: {
                            xs: 18,
                            sm: 22,
                            md: 28,
                        },
                        mt: 3,
                        fontWeight: 500,
                    }}
                >
                    Портал для работодателей и соискателей Якутии
                </Typography>
                <SearchInput
                    style={{ marginTop: 70, marginBottom: 100 }}
                />
            </CustomContainer>
        </WrapperContainer>
    );
};

export default FirstScreen;
