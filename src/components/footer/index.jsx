import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const Img = styled("img")(({ theme }) => ({
    height: 32,
    marginRight: 24,
}));

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

    const imglist = [
        "youtube.png",
        "vk.png",
        "ok.png",
        "appstore.png",
        "googleplay.png",
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
                                    sx={{
                                        mt: 1,
                                        fontSize: 14,
                                        color: "customColors.white",
                                        opacity: 0.4,
                                        transition: "all 500ms ease",
                                        cursor: "pointer",
                                        width: "max-content",
                                        "&:hover": {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {imglist.map((item, index) => (
                        <Img
                            key={index}
                            src={`/img/${item}`}
                            alt=""
                            style={{ marginTop: 15 }}
                        />
                    ))}
                </Box>
                <Box
                    sx={{
                        opacity: 0.15,
                        marginTop: 2,
                        marginBottom: 2,
                        width: "100%",
                        border: "1px solid #FFFFFF",
                    }}
                ></Box>
                <Typography
                    sx={{
                        color: "customColors.white",
                        fontWeight: 400,
                        opacity: 0.4,
                        fontSize: 14,
                    }}
                >
                    Ⓒ 2022 Группа компаний Работа в Якутии
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
