import { Typography, Box, Grid, TextField } from "@mui/material";

const MapScreen = () => {
    return (
        <Box
            sx={{
                mt: {
                    xs: 7.4,
                    md: 13,
                },
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
                Карта вакансий
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2.5 }}>
                <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                    <Box sx={{ bgcolor: "white" }}>
                        <img
                            src="/img/Frame1658.png"
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </Box>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Box
                        sx={{
                            bgcolor: "white",
                            height: "100%",
                        }}
                    >
                        <Box sx={{ padding: 2 }}>
                            <TextField
                                placeholder="Район"
                                sx={{ width: "100%" }}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MapScreen;
