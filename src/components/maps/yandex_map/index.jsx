import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";

const YandexMap = ({ coordinates }) => {
    return (
        <YMaps>
            <Map
                width="100%"
                height={400}
                defaultState={{
                    center: coordinates,
                    zoom: 17,
                }}
            >
                <ZoomControl options={{ float: "right" }} />
                <Placemark
                    geometry={coordinates}
                    modules={["geoObject.addon.balloon"]}
                    options={{
                        iconLayout: "default#image",
                    }}
                />
            </Map>
        </YMaps>
    );
};

export default YandexMap;
