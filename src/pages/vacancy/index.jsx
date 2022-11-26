import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { MyBreadcrumbs } from "../../components";

const VacancyPage = () => {
    const breadcrumbsList = [
        {
            path: "",
            label: "",
            type: "link",
        },
        {
            label: "",
            type: "text",
        },
    ];

    return (
        <Box>
            <MyBreadcrumbs data={breadcrumbsList} />
        </Box>
    );
};

export default VacancyPage;
