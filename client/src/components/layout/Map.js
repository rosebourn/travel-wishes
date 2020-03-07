import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

import 'mapbox-gl/dist/mapbox-gl.css';

// const TOKEN = "pk.eyJ1Ijoicm9zZWJvdXJuIiwiYSI6ImNrNm8wa2F0dzE2a3kzbm5xNWQ1NGpvMTUifQ.zZfvNREvPJxDYp3RLujCDg"
const TOKEN = process.env.REACT_APP_MAPBOX_KEY
const Map = () => {
  const [viewport, setViewport] = useState({
          width: "100vw",
          height: "100vh",
          latitude: 47.6062,
          longitude: -122.3321,
          zoom: 2
      });

      return (
          <div>
              <ReactMapGL 
              {...viewport}
              mapboxApiAccessToken={TOKEN}
              mapStyle="mapbox://styles/rosebourn/ck6nza16t18ct1iqbrjn5st2u"
              onViewportChange={viewport => {
                setViewport(viewport);
              }}
              >
              </ReactMapGL>
          </div>
      )
  }

  export default Map;