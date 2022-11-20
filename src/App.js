import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import MainLayout from "./layout/MainLayout";
import ROUTES from "./routes";
import { Home } from "./pages";
import theme from "./MuiTheme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.HOME} element={<MainLayout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
