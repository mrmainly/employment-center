import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import mapData from "../../map-data/geodata";
import "./interactiveMap.css";

const InteractiveMap = () => {
    let navigate = useNavigate();

    return (
        <div style={{ width: "98%", height: "98%", padding: 5 }}>
            <div className="region"></div>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 672 682"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rsmap"
            >
                {mapData.map((item, index) => (
                    <>
                        <path
                            key={index}
                            fillRule="evenodd"
                            data-redion-id={item.dataRegionId}
                            data-region-code={item.dataRegionCode}
                            className="region"
                            data-bs-toggle="tooltip"
                            title=""
                            clipRule="evenodd"
                            d={item.d}
                            fill="#6AB9E8"
                            data-bs-original-title={
                                item.dataBsOriginalTitle
                            }
                            aria-label={item.ariaLabel}
                        ></path>
                    </>
                ))}
            </svg>
        </div>
    );
};

export default InteractiveMap;
