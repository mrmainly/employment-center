import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ROUTES from "./routes";
import { Home, Vacancy } from "./pages";
import theme from "./MuiTheme";
import WrapperLayouts from "./layout/WrapperLayouts";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.HOME} element={<WrapperLayouts />}>
                        <Route index element={<Home />} />
                        <Route
                            path={ROUTES.BANK_VACANCY}
                            element={<Vacancy />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
