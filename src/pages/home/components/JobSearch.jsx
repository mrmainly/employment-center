import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

import { MyButton } from "../../../components";

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
                mt: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Box>
                <Typography sx={{ fontSize: 35, fontWeight: 600 }}>
                    Поиск вакансий для
                    <br /> выпускников
                </Typography>
                <Typography
                    sx={{ fontSize: 22, fontWeight: 600, mt: 2 }}
                >
                    С высшим и средним профессиональным
                    <br /> образованием
                </Typography>
                <MyButton sx={{ mt: 4.8 }}>
                    Вакансии для выпускников
                </MyButton>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {jobInfo.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginRight: index === 0 && 10,
                            minWidth: 350,
                        }}
                    >
                        <Typography
                            color="secondary.main"
                            sx={{
                                fontWeight: 600,
                                fontSize: 75,
                            }}
                        >
                            {item.num}
                        </Typography>
                        <Box
                            sx={{
                                border: "1px solid #E54D2B",
                                width: 150,
                            }}
                        />
                        <Typography
                            color="customColors.lightDart"
                            sx={{
                                mt: 1.5,
                                fontSize: 22,
                                fontWeight: 600,
                            }}
                        >
                            {item.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default JobSearch;
