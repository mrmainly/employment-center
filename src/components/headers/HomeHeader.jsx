import { useState } from "react";
import {
    Box,
    Container,
    MenuItem,
    Typography,
    Menu,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ModalsSlice } from "../../reducer/ModalsSlice";
import menuList from "../../local_list/menuList";

const HeaderContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const MenuHeader = styled(Box)(({ theme }) => ({
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

const CusMenuItem = styled(MenuItem)(({ theme }) => ({
    textDecoration: "none",
    marginLeft: 10,
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    color: "white",
}));

const HomeHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const dispatch = useDispatch();
    const open = Boolean(anchorEl);

    const { handleFeedBackModal } = ModalsSlice.actions;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <HeaderContainer maxWidth="xl">
            <MenuHeader>
                <LeftMenu>
                    <Logo src="/img/logoSvg.svg" />

                    <Typography
                        sx={{
                            color: "customColors.white",
                            fontWeight: 600,
                            fontSize: 18,
                            textShadow:
                                "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            marginLeft: 2,
                            marginRight: 3,
                        }}
                    >
                        Работа в Якутии
                    </Typography>
                    <Box>
                        <CusMenuItem
                            onClick={handleClick}
                            aria-haspopup="true"
                            aria-controls={
                                open ? "basic-menu" : undefined
                            }
                            aria-expanded={open ? "true" : undefined}
                        >
                            <Typography
                                sx={{
                                    color: "customColors.white",
                                    fontWeight: 600,
                                    fontSize: 18,
                                }}
                            >
                                Гражданам
                            </Typography>
                        </CusMenuItem>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            {menuList.map((item, index) => (
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={item.path}
                                >
                                    <MenuItem
                                        sx={{ width: 300, mt: 0.5 }}
                                        key={index}
                                    >
                                        <Typography
                                            color="primary.main"
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: 18,
                                            }}
                                        >
                                            {item.label}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>

                    <CusMenuItem
                        onClick={() =>
                            dispatch(handleFeedBackModal(true))
                        }
                    >
                        <Typography
                            sx={{
                                color: "customColors.white",
                                fontWeight: 600,
                                fontSize: 18,
                            }}
                        >
                            Обратная связь
                        </Typography>
                    </CusMenuItem>
                </LeftMenu>
                <MenuItem>
                    <Typography
                        sx={{
                            color: "customColors.white",
                            textShadow:
                                "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            fontWeight: 600,
                            fontSize: 18,
                        }}
                    >
                        Для слабовидящих
                    </Typography>
                </MenuItem>
            </MenuHeader>
        </HeaderContainer>
    );
};

export default HomeHeader;
