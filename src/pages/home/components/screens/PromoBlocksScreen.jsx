import { Box, Typography, Button, Grid } from "@mui/material";

const PromoBoxs = () => {
    const imgList = [
        "/img/maxresdefault.jpg",
        "/img/maxresdefault.jpg",
        "/img/maxresdefault.jpg",
        "/img/maxresdefault.jpg",
        "/img/maxresdefault.jpg",
        "/img/maxresdefault.jpg",
        "/img/maxresdefault.jpg",
        "/img/maxresdefault.jpg",
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
                    mb: 2,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: {
                            xs: 20,
                            md: 35,
                        },
                    }}
                >
                    Промо-блоки
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
            <Grid container spacing={2}>
                {imgList.map((item, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={3}
                    >
                        <img
                            alt=""
                            src={item}
                            style={{
                                width: "100%",
                                height: 205,
                                objectFit: "cover",
                            }}
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

export default PromoBoxs;
