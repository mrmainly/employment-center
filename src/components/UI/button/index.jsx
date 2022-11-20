import { Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme }) => ({
    background: "pryma",
}));

const MyButton = ({ children }) => {
    return <CustomButton>{children}</CustomButton>;
};

export default MyButton;
