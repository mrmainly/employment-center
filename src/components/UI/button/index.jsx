import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme }) => ({
    background: "primary.main",
    paddingRight: 42,
    paddingLeft: 42,
    paddingTop: 14,
    paddingBottom: 14,
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
}));

const MyButton = ({ children, ...props }) => {
    return (
        <CustomButton variant="contained" {...props}>
            <Typography
                sx={{
                    fontSize: 18,
                    fontWeight: 500,
                    fontStyle: "normal",
                }}
            >
                {children}
            </Typography>
        </CustomButton>
    );
};

export default MyButton;
