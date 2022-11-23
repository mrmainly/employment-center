import {
    Dialog,
    DialogTitle,
    Typography,
    Box,
    TextField,
    DialogContent,
    Checkbox,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/system";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import { ModalsSlice } from "../../reducer/ModalsSlice";
import { MyButton } from "..";

const Form = styled(Box)(({ theme }) => ({
    padding: 10,
}));

const FeedBackModal = () => {
    const { feedBackOpen } = useSelector(
        (state) => state.ModalsSlice
    );

    const dispatch = useDispatch();
    const { handleFeedBackModal } = ModalsSlice.actions;

    return (
        <Dialog
            open={feedBackOpen}
            onClose={() => dispatch(handleFeedBackModal(false))}
            fullWidth
            maxWidth="md"
        >
            <DialogTitle
                sx={{ display: "flex", justifyContent: "center" }}
            >
                <Typography sx={{ fontWeight: 600, fontSize: 22 }}>
                    Обратная связь
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Form component="form">
                    <Box
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <TextField
                            label="ФИО"
                            placeholder="ФИО"
                            sx={{ width: "100%" }}
                        />
                        <TextField
                            label="Телефон"
                            sx={{ ml: 2, width: "100%" }}
                            placeholder="7 (999) 999 99-99"
                        />
                    </Box>
                    <TextField
                        rows={4}
                        label="Сообщение"
                        multiline
                        sx={{ width: "100%", mt: 2 }}
                        placeholder="Напишите сообщение..."
                    />
                    <Box
                        sx={{
                            ml: "-10px",
                            display: "flex",
                            mt: 2,
                            alignItems: " center",
                        }}
                    >
                        <Checkbox sx={{ mr: 1 }} />
                        <Typography
                            sx={{ fontSize: 16, fontWeight: 500 }}
                        >
                            Нажимая на кнопку, вы соглашаетесь с
                            <span
                                style={{
                                    color: "#1B4E9B",
                                    marginLeft: 5,
                                    cursor: "pointer",
                                }}
                            >
                                Политикой персональных данных
                            </span>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 2,
                        }}
                    >
                        <MyButton>Отправить</MyButton>
                        <Box sx={{ display: "flex" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <LocalPhoneIcon
                                    fontSize="medium"
                                    sx={{ color: "primary.main" }}
                                />
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        ml: 1,
                                    }}
                                >
                                    8(4112) 507-850
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    ml: 4,
                                }}
                            >
                                <EmailIcon
                                    fontSize="medium"
                                    sx={{ color: "primary.main" }}
                                />
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        ml: 1,
                                    }}
                                >
                                    gkzn@sakha.gov.ru
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default FeedBackModal;
