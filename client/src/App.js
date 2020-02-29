import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
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
  );
}
// function App() {
  
//     return (
//       <div className="App">
//         This is my project
//       </div>
//     );
  
// }

export default App;
