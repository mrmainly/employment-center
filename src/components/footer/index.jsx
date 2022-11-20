import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const Footer = () => {
    const list = [
        {
            title: "Общая информация",
            values: [
                {
                    label: "Партнеры",
                    path: "/",
                },
                {
                    label: "Справочная информация",
                    path: "/",
                },
                {
                    label: "Новостная лента",
                    path: "/",
                },
                {
                    label: "Календарь мероприятий",
                    path: "/",
                },
            ],
        },
        {
            title: "Гражданам",
            values: [
                {
                    label: "Тестирование и опросы",
                    path: "/",
                },
                {
                    label: "Банк вакансий",
                    path: "/",
                },
                {
                    label: "Услуги",
                    path: "/",
                },
            ],
        },
    ];

    return (
        <Box
            sx={{
                bgcolor: "customColors.darkdark",
                paddingTop: 4.2,
                paddingBottom: 5,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {list.map((item, index) => (
                        <Grid item key={index} xl={3}>
                            <Typography color="customColors.white">
                                {item.title}
                            </Typography>
                            {item.values.map((item, index) => (
                                <Typography
                                    key={index}
                                    color="customColors.grey"
                                    sx={{ mt: 1 }}
                                >
                                    {item.label}
                                </Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: "flex" }}></Box>
            </Container>
        </Box>
    );
};

export default Footer;
