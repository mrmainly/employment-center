import {
    YMaps,
    Map,
    Placemark,
    ZoomControl,
} from "react-yandex-maps";

const YandexMap = ({ coordinates }) => {
    return (
        <YMaps>
            <Map
                width="100%"
                height={400}
                defaultState={{
                    center: coordinates,
                    zoom: 18,
                }}
            >
                <ZoomControl options={{ float: "right" }} />
                <Placemark
                    geometry={coordinates}
                    modules={["geoObject.addon.balloon"]}
                    options={{
                        iconLayout: "default#image",
                    }}
                    // properties={{
                    //     balloonContentHeader: coordinates,
                    // }}
                    // properties={{
                    //     balloonContentHeader: item.address,
                    //     balloonContentBody: `

                    //                           <p>${item.work_time}</p>
                    //                           <p>Номер телефона: ${item.unit_phone}</p>
                    //                       `,
                    // }}
                />
            </Map>
        </YMaps>
    );
};

export default YandexMap;
