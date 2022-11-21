import { Box, Container, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Link } from "react-router-dom";

const HeaderContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const Menu = styled(Box)(({ theme }) => ({
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}));

const LeftMenu = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
}));

const Logo = styled("img")(({ theme }) => ({
    height: 56,
    width: "auto",
}));

const CustomLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    marginLeft: 10,
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    color: "white",
}));

const HomeHeader = () => {
    return (
        <HeaderContainer maxWidth="xl">
            <Menu>
                <LeftMenu>
                    <Logo src="/img/logoSvg.svg" />
                    <CustomLink to="/">
                        <MenuItem>
                            <Typography
                                sx={{
                                    color: "customColors.white",
                                    fontWeight: 600,
                                    fontSize: 20,
                                }}
                            >
                                Работа в Якутии
                            </Typography>
                        </MenuItem>
                    </CustomLink>
                    <CustomLink to="/">
                        <MenuItem>
                            <Typography
                                sx={{
                                    color: "customColors.white",
                                    fontWeight: 600,
                                    fontSize: 20,
                                }}
                            >
                                Гражданам
                            </Typography>
                        </MenuItem>
                    </CustomLink>
                    <CustomLink to="/">
                        <MenuItem>
                            <Typography
                                sx={{
                                    color: "customColors.white",
                                    fontWeight: 600,
                                    fontSize: 20,
                                }}
                            >
                                Обратная связь
                            </Typography>
                        </MenuItem>
                    </CustomLink>
                </LeftMenu>
                <MenuItem>
                    <Typography
                        sx={{
                            color: "customColors.white",
                            textShadow:
                                "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            fontWeight: 600,
                            fontSize: 20,
                        }}
                    >
                        Для слабовидящих
                    </Typography>
                </MenuItem>
            </Menu>
        </HeaderContainer>
    );
};

export default HomeHeader;
