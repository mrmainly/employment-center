import {
    Container,
    Box,
    Typography,
    TextField,
    MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";

import { HomeHeader } from "../../../components";

const WrapperContainer = styled(Box)(({ theme }) => ({
    backgroundImage: "url(/img/HomeFirstScreen.png)",
    backgroundSize: "cover",
}));

const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    minHeight: 650,
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
                        fontSize: 50,
                        fontWeight: 600,
                        width: {
                            xl: "60%",
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
                        fontSize: 28,
                        mt: 3,
                        fontWeight: 500,
                    }}
                >
                    Портал для работодателей и соискателей Якутии
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 7,
                        mb: 10,
                    }}
                >
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
                </Box>
            </CustomContainer>
        </WrapperContainer>
    );
};

export default FirstScreen;
