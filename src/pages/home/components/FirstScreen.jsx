import { Container, Box, Typography, TextField } from "@mui/material";
import { styled } from "@mui/system";

import { HomeHeader } from "../../../components";

const WrapperContainer = styled(Box)(({ theme }) => ({
    backgroundImage: "url(/img/HomeFirstScreen.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
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

const SearchWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginTop: 70,
    marginBottom: 100,
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const SearchTextField = styled(TextField)(({ theme }) => ({
    width: 800,
    background: "white",
    borderTopRightRadius: 0,
    borderEndEndRadius: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    boxShadow: "inset 1px 1px 4px rgba(0, 0, 0, 0.5)",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderTopRightRadius: 0,
            borderEndEndRadius: 0,
        },
    },
    "& .MuiInputBase-root": {
        height: 50,
    },
    "& .MuiInput-root": {
        "&:before, :after, :hover:not(.Mui-disabled):before": {
            borderBottom: 0,
        },
    },
    [theme.breakpoints.down("lg")]: {
        width: 600,
    },
}));

const FirstScreen = () => {
    return (
        <WrapperContainer>
            <HomeHeader />
            <CustomContainer maxWidth="xl">
                <Typography
                    sx={{
                        color: "customColors.white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        fontSize: {
                            xs: 26,
                            sm: 30,
                            md: 53,
                        },
                        fontWeight: 600,
                        width: {
                            xl: "65%",
                            lg: "50%",
                            md: "60%",
                            sm: "100%",
                            xs: "100%",
                        },
                    }}
                >
                    Найдите работу мечты в любой точке Якутии
                </Typography>
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
                <SearchWrapper>
                    <Box sx={{ display: "flex" }}>
                        <SearchTextField placeholder="Поиск вакансий" />
                        <Box
                            sx={{
                                bgcolor: "secondary.main",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 100,
                                borderEndEndRadius: 8,
                                borderTopRightRadius: 8,
                                cursor: "pointer",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "customColors.white",
                                    fontSize: 16,
                                }}
                            >
                                Поиск
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            bgcolor: "white",
                            borderRadius: 2,
                            height: 50,
                            marginLeft: 1.5,
                            width: 120,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid primary.main",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "primary.main",
                                fontWeight: 500,
                            }}
                        >
                            Фильтры
                        </Typography>
                    </Box>
                </SearchWrapper>
            </CustomContainer>
        </WrapperContainer>
    );
};

export default FirstScreen;
