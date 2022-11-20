import { Container } from "@mui/material";

import FirstScreen from "./components/FirstScreen";
import JobSearch from "./components/JobSearch";
import MapScreen from "./components/MapScreen";
import NewsSliderWrapper from "./components/NewsSliderWrapper";
import TestsAndSurveys from "./components/TestsAndSurveys";
import PromoBoxs from "./components/PromoBoxs";

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
        </div>
    );
};

export default Home;
