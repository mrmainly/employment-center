import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import mapData from "../../map-data/geodata";
import "./interactiveMap.css";

const InteractiveMap = () => {
    const [regionName, setRegionName] = useState("");

    let navigate = useNavigate();

    return (
        <div style={{ width: "98%", height: "98%", padding: 5 }}>
            <Typography
                sx={{ fontSize: 20, fontWeight: 500, height: 30 }}
                color="primary.main"
            >
                {regionName}
            </Typography>
            <svg
                width="100%"
                height="95%"
                viewBox="0 0 672 682"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rsmap"
                onMouseLeave={() => setRegionName("")}
            >
                {mapData.map((item, index) => (
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
                        onMouseOver={() =>
                            setRegionName(item.ariaLabel)
                        }
                    ></path>
                ))}
            </svg>
        </div>
    );
};

export default InteractiveMap;
