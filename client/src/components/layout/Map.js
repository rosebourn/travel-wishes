import React, { useState } from "react";
// import { Link } from "react-router-dom";
import ReactMapGL from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
// import { connect } from "mongoose";

const Map = () => {
  const [viewport, setViewport] = useState({
          width: "100vw",
          height: "100vh",
          latitude: 45.4211,
          longitude: -75.6903,
          zoom: 8
      });

      return (
          <div>
              <ReactMapGL 
              {...viewport}
              >
              </ReactMapGL>
          </div>
      )
  }

  export default Map;

  

// const [viewport, setViewport] = useState({
    //     width: "100vw",
    //     height: "100vh",
    //     latitude: 45.4211,
    //     longitude: -75.6903,
    //     zoom: 8
    //   });
    
    //   return (
    //   <div>
    //     <ReactMapGL
    //       {...viewport}
    
    //       >
    //     </ReactMapGL>
    //   </div>
    //   );