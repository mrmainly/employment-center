import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material";

import { MyButton } from "../../../../components";

const JobInfo = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 350,
    [theme.breakpoints.down("lg")]: {
        width: "100%",

        textAlign: "center",
    },
}));

const JobSearch = () => {
    const jobInfo = [
        {
            num: "6 325",
            label: "Свободных вакансий",
        },
        {
            num: "1 531",
            label: "Вакансий для выпускников",
        },
    ];

    return (
        <Box
            sx={{
                mt: {
                    xs: 6,
                    md: 10,
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: {
                    xs: "start",
                    md: "center",
                },
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "70%" },
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: 24, md: 30, xl: 35 },
                        fontWeight: 600,
                    }}
                >
                    Поиск вакансий для выпускников
                </Typography>
                <Typography
                    sx={{
                        fontSize: {
                            xs: 18,
                            md: 22,
                        },
                        fontWeight: {
                            xs: 500,
                            md: 600,
                        },
                        mt: 2,
                    }}
                >
                    С высшим и средним профессиональным образованием
                </Typography>
                <MyButton
                    sx={{
                        mt: 4.8,
                        display: {
                            xs: "none",
                            md: "block",
                        },
                    }}
                >
                    Вакансии для выпускников
                </MyButton>
            </Box>
            <Grid
                container
                spacing={2}
                sx={{
                    mt: {
                        md: 0,
                        xs: 3.8,
                    },
                }}
            >
                {jobInfo.map((item, index) => (
                    <Grid
                        item
                        xs={6}
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <JobInfo key={index}>
                            <Typography
                                color="secondary.main"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: {
                                        md: 75,
                                        sm: 60,
                                        xs: 38,
                                    },
                                }}
                            >
                                {item.num}
                            </Typography>
                            <Box
                                sx={{
                                    border: "1px solid #E54D2B",
                                    width: {
                                        xs: 70,
                                        md: 150,
                                    },
                                }}
                            />
                            <Typography
                                color="customColors.lightDart"
                                sx={{
                                    mt: 1.5,
                                    fontSize: {
                                        md: 22,
                                        sm: 18,
                                        xs: 12,
                                    },
                                    fontWeight: 600,
                                }}
                            >
                                {item.label}
                            </Typography>
                        </JobInfo>
                    </Grid>
                ))}
            </Grid>
            <MyButton
                sx={{
                    mt: 4.8,
                    display: {
                        xs: "block",
                        md: "none",
                    },
                    width: "100%",
                }}
            >
                Вакансии для выпускников
            </MyButton>
        </Box>
    );
};

export default JobSearch;
