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
import ROUTES from "../../routes";
import { SearchInput } from "..";

const HeaderContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const MenuHeader = styled(Box)(({ theme }) => ({
    height: 70,
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
    color: "white",
}));

const MainHeader = () => {
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
        <Box
            sx={{
                position: "fixed",
                width: "100%",
                zIndex: 10,
                background: "white",
            }}
        >
            <Box
                sx={{ boxShadow: " 0px 1px 5px rgba(0, 0, 0, 0.25)" }}
            >
                <HeaderContainer maxWidth="xl">
                    <MenuHeader>
                        <LeftMenu>
                            <Logo src="/img/logoSvg.svg" />
                            <Link
                                style={{ textDecoration: "none" }}
                                to={ROUTES.HOME}
                            >
                                <CusMenuItem sx={{ ml: 4 }}>
                                    <Typography
                                        sx={{
                                            color: "primary.main",
                                            fontWeight: 500,
                                            fontSize: 18,
                                        }}
                                    >
                                        Главная
                                    </Typography>
                                </CusMenuItem>
                            </Link>
                            <Box>
                                <CusMenuItem
                                    onClick={handleClick}
                                    aria-haspopup="true"
                                    aria-controls={
                                        open
                                            ? "basic-menu"
                                            : undefined
                                    }
                                    aria-expanded={
                                        open ? "true" : undefined
                                    }
                                >
                                    <Typography
                                        sx={{
                                            color: "primary.main",
                                            fontWeight: 500,
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
                                            style={{
                                                textDecoration:
                                                    "none",
                                            }}
                                            to={item.path}
                                        >
                                            <MenuItem
                                                sx={{
                                                    width: 300,
                                                    mt: 0.5,
                                                }}
                                                key={index}
                                                onClick={handleClose}
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
                                    dispatch(
                                        handleFeedBackModal(true)
                                    )
                                }
                            >
                                <Typography
                                    sx={{
                                        color: "primary.main",
                                        fontWeight: 500,
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
                                    color: "primary.main",
                                    fontWeight: 500,
                                    fontSize: 18,
                                }}
                            >
                                Для слабовидящих
                            </Typography>
                        </MenuItem>
                    </MenuHeader>
                </HeaderContainer>
            </Box>
            <Box
                sx={{
                    pt: 2,
                    pb: 2,
                    boxShadow: " 0px 4px 15px rgba(0, 0, 0, 0.1)",
                }}
            >
                <HeaderContainer maxWidth="xl">
                    <SearchInput />
                </HeaderContainer>
            </Box>
        </Box>
    );
};

export default MainHeader;
