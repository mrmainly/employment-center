import { Box, Typography, Button, Container } from "@mui/material";

import { PartnersSlider } from "../../../../components";

const PartnersScreen = () => {
    const partnersList = [
        {
            img: "/img/elsi.png",
            description: "Добыча природных ресурсов",
        },
        {
            img: "/img/alrosa.png",
            description: "Добыча природных ресурсов",
        },
        {
            img: "/img/aeb.png",
            description: "Добыча природных ресурсов",
        },
        {
            img: "/img/mytona.png",
            description: "Добыча природных ресурсов",
        },
        {
            img: "/img/itpark.png",
            description: "Добыча природных ресурсов",
        },
    ];

    return (
        <Box
            sx={{
                mt: {
                    xs: 7.4,
                    md: 13,
                },
                bgcolor: "white",
                pt: 3.2,
                pb: 5.2,
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: {
                                xs: 20,
                                md: 35,
                            },
                            mb: 2,
                        }}
                    >
                        Партнеры службы занятости
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "primary.light",
                            color: "primary.light",
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }}
                    >
                        Все компании
                    </Button>
                </Box>
                <PartnersSlider data={partnersList} />
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: "primary.light",
                        color: "primary.light",
                        display: {
                            xs: "block",
                            sm: "none",
                        },
                        width: "100%",
                        mt: 5,
                    }}
                >
                    Все компании
                </Button>
            </Container>
        </Box>
    );
};

export default PartnersScreen;
