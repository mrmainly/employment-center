import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

import "../cards.css";

const Card = styled(Box)(({ theme }) => ({
    width: 250,
    height: 290,

    marginRight: 10,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    position: "relative",
    boxShadow: "1px 2px 8px rgba(0, 0, 0, 0.15)",
}));

const PreviewNewsCard = ({ date, img, description }) => {
    return (
        <Card>
            <Box
                sx={{
                    position: "absolute",
                    background: "white",
                    right: 8,
                    top: 14,
                    padding: "2px 12px",
                    borderRadius: 1,
                }}
            >
                <Typography sx={{ fontSize: 13 }}>{date}</Typography>
            </Box>
            <img
                alt=""
                src={img}
                style={{
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    height: 200,
                    objectFit: "contained",
                    cursor: "pointer",
                }}
            />
            <Box
                style={{
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 5,
                    overflow: "hidden",
                }}
            >
                <Typography
                    sx={{ fontSize: 16, fontWeight: 500 }}
                    color="customColors.lightDart"
                    className="descriptionPrewviewNews"
                >
                    {description}
                </Typography>
            </Box>
        </Card>
    );
};

export default PreviewNewsCard;
