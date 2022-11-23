import { Container } from "@mui/material";

import FirstScreen from "./components/screens/FirstScreen";
import JobSearchScreen from "./components/screens/JobSearchScreen";
import InteractiveMapScreen from "./components/screens/InteractiveMapScreen";
import NewsSliderWrapper from "./components/wrappers/NewsSliderWrapper";
import TestsAndSurveys from "./components/screens/TestsScreen";
import PromoBoxs from "./components/screens/PromoBlocksScreen";
import PartnersSliderWrapper from "./components/wrappers/PartnersSliderWrapper";

const Home = () => {
    return (
        <div>
            <FirstScreen />
            <Container maxWidth="xl">
                <JobSearchScreen />
                <InteractiveMapScreen />
                <NewsSliderWrapper />
                <TestsAndSurveys />
                <PromoBoxs />
            </Container>
            <PartnersSliderWrapper />
        </div>
    );
};

export default Home;
