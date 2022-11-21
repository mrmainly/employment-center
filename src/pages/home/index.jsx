import { Container } from "@mui/material";

import FirstScreen from "./components/FirstScreen";
import JobSearch from "./components/JobSearch";
import MapScreen from "./components/MapScreen";
import NewsSliderWrapper from "./components/NewsSliderWrapper";
import TestsAndSurveys from "./components/TestsAndSurveys";
import PromoBoxs from "./components/PromoBoxs";
import PartnersScreen from "./components/PartnersScreen";

const Home = () => {
    return (
        <div>
            <FirstScreen />
            <Container maxWidth="xl">
                <JobSearch />
                <MapScreen />
                <NewsSliderWrapper />
                <TestsAndSurveys />
                <PromoBoxs />
            </Container>
            <PartnersScreen />
        </div>
    );
};

export default Home;
