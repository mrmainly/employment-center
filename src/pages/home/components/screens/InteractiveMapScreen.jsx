import { lazy, Suspense } from "react";
import { Typography, Box, Grid } from "@mui/material";

import { InteractiveMapSideBar } from "../../../../components";

const LazyInteractiveMap = lazy(() =>
    import("../../../../components/interactive-map")
);

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
                <Grid
                    item
                    xl={8}
                    lg={8}
                    md={8}
                    sm={12}
                    xs={12}
                    sx={{
                        height: {
                            xs: 380,
                            md: 850,
                        },
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "white",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyInteractiveMap />
                        </Suspense>
                    </Box>
                </Grid>
                <Grid
                    item
                    xl={4}
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    sx={{
                        height: {
                            xs: "auto",
                            md: 850,
                        },
                    }}
                >
                    <InteractiveMapSideBar />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MapScreen;
