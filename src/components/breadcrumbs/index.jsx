import { Breadcrumbs, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const MyBreadcrumbs = ({ data }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link>Главная</Link>
            <Link>Гражданам</Link>
            <Typography>Поиск работы</Typography>
        </Breadcrumbs>
    );
};

export default MyBreadcrumbs;
