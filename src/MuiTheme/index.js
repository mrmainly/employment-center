import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1B4E9B",
            light: "#6AB9E8",
        },
        secondary: {
            main: "#E54D2B",
        },
        customColors: {
            lightDart: "#343434",
            mainDark: "#071725",
            darkdark: "#031220",
            grey: "#6C757D",
            white: "#FFFFFF",
        },
    },
    typography: {
        fontSize: 16,
        fontFamily: "Montserrat",
    },
});

export default theme;
