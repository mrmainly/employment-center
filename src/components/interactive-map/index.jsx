import { AreaMap } from "@ant-design/maps";
import { useNavigate } from "react-router-dom";

const InteractiveMap = ({ map }) => {
    const config = {
        map: {
            type: "mapbox",
            style: "blank",
            center: [120.19382669582967, 30.258134],
            zoom: 4,
            pitch: 0,
        },
        source: {
            data: map,
            parser: {
                type: "geojson",
            },
        },
        autoFit: true,
        // color: {
        //     field: "pop_est",
        //     value: [
        //         "rgb(239,243,255)",
        //         "rgb(189,215,231)",
        //         "rgb(107,174,214)",
        //         "rgb(49,130,189)",
        //         "rgb(8,81,156)",
        //     ],
        //     scale: {
        //         type: "quantile",
        //     },
        // },
        style: {
            opacity: 1,
            stroke: "#FFF",
            lineWidth: 0.6,
            lineOpacity: 1,
        },
        state: {
            active: true,
        },
        color: "#6AB9E8",
        // label: {
        //     visible: true,
        //     field: "id",
        //     style: {
        //         fill: "#000",
        //         opacity: 0.8,
        //         fontSize: 10,
        //         stroke: "#fff",
        //         strokeWidth: 1.5,
        //         textAllowOverlap: false,
        //         padding: [5, 5],
        //     },
        // },
        tooltip: {
            items: ["Улус", "Индикатор", "Показатель", "Период, год"],
            zIndex: 1,
        },
        zoom: {
            position: "bottomright",
        },
    };

    let navigate = useNavigate();

    return (
        <div style={{ width: "98%", height: "98%", padding: 5 }}>
            <AreaMap
                {...config}
                onReady={(areaMap) => {
                    areaMap.on("areaLayer:click", (evt) => {
                        navigate("/raion/details/", {
                            state: {
                                raion: evt.feature.properties[
                                    "Район"
                                ],
                                id: evt.feature.properties.id,
                            },
                        });
                    });
                }}
            />
        </div>
    );
};

export default InteractiveMap;
