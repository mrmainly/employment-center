import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import { YandexMap } from "..";

const InteractionMapModal = ({ data, open, handleOpen }) => {
    const regionSZNInfo = [
        {
            label: "Наименование ЦЗН:",
            value: 'Представительство "ЦЗН Среднеколымского улуса"',
        },
        {
            label: "Горячая линия:",
            value: "(4112) 42-13-56",
        },
        {
            label: "Сотовые телефоны:",
            value: "+7 (962) 730 03-14, +7 (962) 730 03-14",
        },
        {
            label: "Адрес:",
            value: "677000, Республика Саха (Якутия), город Якутск ул. Петра Алексеева, дом 6, корпус 1",
        },
        {
            label: "Электронная почта:",
            value: "gkzn@sakha.gov.ru",
        },
        {
            label: "Часы работы:",
            value: "10:00-19:00 (пн-сб), 10:00-17:00 (вс)",
        },
    ];

    return (
        <Dialog
            open={open}
            onClose={handleOpen}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle>
                <Typography
                    color="secondary.main"
                    sx={{ fontWeight: 600, fontSize: 24 }}
                >
                    {data.title}
                </Typography>
            </DialogTitle>
            <DialogContent sx={{ height: 600 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        mb: 2,
                    }}
                >
                    {regionSZNInfo.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: "customColors.dark",
                                }}
                            >
                                {item.label}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "customColors.grey",
                                    fontWeight: 600,
                                    fontSize: 14,
                                }}
                            >
                                {item.value}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <YandexMap coordinates={data.coordinates} />
            </DialogContent>
        </Dialog>
    );
};

export default InteractionMapModal;
