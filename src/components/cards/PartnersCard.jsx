import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Card = styled(Box)(({ theme }) => ({
    width: 250,

    borderRadius: 12,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
}));

const PreviewPartnerCard = ({ img, description }) => {
    return (
        <Card>
            <img
                alt=""
                src={img}
                style={{
                    objectFit: "contain",
                    margin: "0 auto",
                }}
            />
            <Typography
                sx={{
                    fontWeight: 400,
                    fontSize: 16,
                    pt: 4,
                    width: "70%",
                    margin: "0 auto",
                }}
            >
                {description}
            </Typography>
        </Card>
    );
};

export default PreviewPartnerCard;
