import { Box, TextField, Typography, MenuItem } from "@mui/material";

const InteractiveMapSideBar = () => {
    const regionList = [
        {
            label: "Якутск",
            value: "",
        },
        {
            label: "Абыйский",
            value: "",
        },
        {
            label: "Алданский",
            value: "",
        },
        {
            label: "Аллаиховский",
            value: "",
        },
        {
            label: "Амгинский",
            value: "",
        },
        {
            label: "Анабарский",
            value: "",
        },
        {
            label: "Булунский",
            value: "",
        },
        {
            label: "Верхневилюйский",
            value: "",
        },
        {
            label: "Верхнеколымский",
            value: "",
        },
        {
            label: "Верхоянский",
            value: "",
        },
        {
            label: "Вилюйский",
            value: "",
        },
        {
            label: "Горный",
            value: "",
        },
        {
            label: "Жиганский",
            value: "",
        },
        {
            label: "Кобяйский",
            value: "",
        },
        {
            label: "Ленский",
            value: "",
        },
        {
            label: "Мегино-Кангаласский",
            value: "",
        },
        {
            label: "Мирнинский",
            value: "",
        },
        {
            label: "Момский",
            value: "",
        },
        {
            label: "Намский",
            value: "",
        },
        {
            label: "Нерюнгринский",
            value: "",
        },
        {
            label: "Нижнеколымский",
            value: "",
        },
        {
            label: "Нюрбинский",
            value: "",
        },
        {
            label: "Оймяконский",
            value: "",
        },
        {
            label: "Оленекский",
            value: "",
        },
    ];
    return (
        <Box
            sx={{
                bgcolor: "white",
                height: "100%",
            }}
        >
            <Box sx={{ padding: 2, height: "100%" }}>
                <TextField
                    placeholder="Район"
                    sx={{ width: "100%" }}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "column",
                        height: "65%",
                        mt: 2,
                    }}
                >
                    {regionList.map((item, index) => (
                        <MenuItem
                            key={index}
                            sx={{ mt: 1, width: "48%" }}
                        >
                            <Typography
                                color="primary.main"
                                sx={{ fontSize: 14, fontWeight: 500 }}
                            >
                                {item.label}
                            </Typography>
                        </MenuItem>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default InteractiveMapSideBar;
