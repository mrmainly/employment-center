import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { TestCard } from "../../../../components";

const TestsAndSurveys = () => {
    const testList = [
        {
            title: "Реализация в профессии",
            type: "Тестирование",
            img: "/img/Frame1721.svg",
            count: "5 вопросов",
        },
        {
            title: "Реализация в профессии",
            type: "Тестирование",
            img: "/img/Frame1721.svg",
            count: "5 вопросов",
        },
        {
            title: "Реализация в профессии",
            type: "Тестирование",
            img: "/img/Frame1721.svg",
            count: "5 вопросов",
        },
        {
            title: "Реализация в профессии",
            type: "Тестирование",
            img: "/img/Frame1721.svg",
            count: "5 вопросов",
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
                    Тесты и опросы
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
                    Смотреть больше
                </Button>
            </Box>
            <Grid container spacing={3} sx={{ mt: 0.5 }}>
                {testList.map((item, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        key={index}
                    >
                        <TestCard
                            type={item.type}
                            img={item.img}
                            title={item.title}
                            count={item.count}
                        />
                    </Grid>
                ))}
            </Grid>
            <Button
                variant="outlined"
                sx={{
                    borderColor: "primary.light",
                    color: "primary.light",
                    display: {
                        xs: "block",
                        sm: "none",
                    },
                    mt: 4,
                    width: "100%",
                }}
            >
                Смотреть больше
            </Button>
        </Box>
    );
};

export default TestsAndSurveys;
