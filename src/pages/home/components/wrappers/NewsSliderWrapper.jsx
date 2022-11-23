import { Box, Typography, Button } from "@mui/material";

import { NewsSlider } from "../../../../components";

const NewsSliderWrapper = () => {
    const newsList = [
        {
            img: "/img/Rectangle436.png",
            description:
                "Новостная карточка  asd  asdasdasda as dasd as asdasdasdas dasd asdasd asdasdasd as ",
            date: "24.10.2022 14:00",
        },
        {
            img: "/img/Rectangle436.png",
            description:
                "Новостная карточка Новостная карточка Новостная карточка",
            date: "24.10.2022 14:00",
        },
        {
            img: "/img/Rectangle436.png",
            description:
                "Новостная карточка Новостная карточка Новостная карточка",
            date: "24.10.2022 14:00",
        },
        {
            img: "/img/Rectangle436.png",
            description:
                "Новостная карточка Новостная карточка Новостная карточка",
            date: "24.10.2022 14:00",
        },
        {
            img: "/img/Rectangle436.png",
            description:
                "Новостная карточка Новостная карточка Новостная карточка",
            date: "24.10.2022 14:00",
        },
        {
            img: "/img/Rectangle436.png",
            description:
                "Новостная карточка Новостная карточка Новостная карточка",
            date: "24.10.2022 14:00",
        },
        {
            img: "/img/Rectangle436.png",
            description:
                "Новостная карточка Новостная карточка Новостная карточка",
            date: "24.10.2022 14:00",
        },
    ];

    return (
        <Box
            sx={{
                mt: {
                    xs: 7.4,
                    md: 13,
                },
            }}
        >
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
                    Новостная лента
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
                    Новостная лента
                </Button>
            </Box>
            <NewsSlider data={newsList} />
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
                Новостная лента
            </Button>
        </Box>
    );
};

export default NewsSliderWrapper;
