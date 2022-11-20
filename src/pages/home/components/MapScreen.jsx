import { Typography, Box, Grid } from "@mui/material";

const MapScreen = () => {
    return (
        <Box style={{ marginTop: 150 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 35 }}>
                КАРТА ВАКАНСИЙ
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2.5 }}>
                <Grid item xl={8}>
                    <Box sx={{ bgcolor: "white" }}>
                        <img
                            src="/img/Frame1658.png"
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </Box>
                </Grid>
                <Grid item xl={4}>
                    <Box
                        sx={{
                            bgcolor: "white",
                            height: "100%",
                            padding: 2,
                        }}
                    >
                        asd
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MapScreen;
