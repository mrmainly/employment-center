import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const SearchWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const SearchTextField = styled(TextField)(({ theme }) => ({
    width: 800,
    background: "white",
    borderTopRightRadius: 0,
    borderEndEndRadius: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    boxShadow: "inset 1px 1px 4px rgba(0, 0, 0, 0.5)",
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderTopRightRadius: 0,
            borderEndEndRadius: 0,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
        },
    },
    "& .MuiInputBase-root": {
        height: 44,
    },
    "& .MuiInput-root": {
        "&:before, :after, :hover:not(.Mui-disabled):before": {
            borderBottom: 0,
        },
    },
    [theme.breakpoints.down("lg")]: {
        width: 600,
    },
}));

const SearchInput = ({ ...props }) => {
    return (
        <SearchWrapper {...props}>
            <Box sx={{ display: "flex" }}>
                <SearchTextField placeholder="Поиск вакансий" />
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 100,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderEndEndRadius: 8,
                        borderTopRightRadius: 8,
                        cursor: "pointer",
                    }}
                >
                    <Typography
                        sx={{
                            color: "customColors.white",
                            fontSize: 16,
                        }}
                    >
                        Поиск
                    </Typography>
                </Button>
            </Box>
            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: 2,
                    height: 44,
                    marginLeft: 1.5,
                    width: 120,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #1B4E9B",
                    cursor: "pointer",
                    color: "primary.main",
                    "&:hover": {
                        bgcolor: "primary.main",
                        color: "customColors.white",
                    },
                    transition: "all 500ms ease",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: 16,
                    }}
                >
                    Фильтры
                </Typography>
            </Box>
        </SearchWrapper>
    );
};

export default SearchInput;
