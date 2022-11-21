import AppIntroSlider from "react-native-app-intro-slider";
import React from "react";
import InfoScreen1 from "./InfoScreen1";
import InfoScreen2 from "./InfoScreen2";
import InfoScreen3 from "./InfoScreen3";

const slides = [{key: '1'}, {key: '2'}, {key: '3'}]

export default function InfoView() {

    function renderSlides({item}) {
        switch (item.key) {
            case '1': {
                return <InfoScreen1/>
            }
            case '2': {
                return <InfoScreen2/>
            }
            case '3': {
                return <InfoScreen3/>
            }
        }
    }

    return (
        <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
                backgroundColor: '#192959',
                width: 30
            }}
            renderNextButton={() => {}}
            renderDoneButton={() => {}}
        />
    )
}