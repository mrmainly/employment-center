import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Card = styled(Box)(({ theme }) => ({
    width: "100%",
    height: 123,
    boxShadow: "1px 2px 8px rgba(0, 0, 0, 0.15)",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
        boxShadow: "0px 0px 12px rgba(13, 153, 255, 0.5)",
    },
    transition: "all 500ms ease",
}));

const TestCard = ({ img, type, count, title }) => {
    return (
        <Card>
            <img src={img} alt="" style={{ marginLeft: 20 }} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    ml: {
                        xs: 2,
                        md: 3,
                    },
                    height: {
                        xs: "50%",
                        md: "75%",
                    },
                }}
            >
                <Typography
                    color="customColors.darkdark"
                    sx={{
                        fontWeight: 600,
                        fontSize: {
                            xs: 14,
                            md: 18,
                        },
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: {
                            xs: 12,
                            md: 14,
                        },
                    }}
                >
                    {type}
                </Typography>
                <Typography
                    sx={{
                        fontSize: {
                            xs: 12,
                            md: 14,
                        },
                    }}
                >
                    {count}
                </Typography>
            </Box>
        </Card>
    );
};

export default TestCard;
