import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
// import * as cityData from "../../data/city-info.json";
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = process.env.REACT_APP_MAPBOX_KEY;

const geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      },
      properties: {
        city_id: 1,
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.414, 37.776]
      },
      properties: {
        city_id: 2,
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    },
    {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-68.15, -16.5]
        },
        properties: {
          city_id: 3,
          title: 'Mapbox',
          description: 'La Paz, Bolivia'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [145.766251, -16.92304]
        },
        properties: {
          city_id: 4,
          title: 'Mapbox',
          description: 'Cairns, Australia'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-79.416667, 43.666667]
        },
        properties: {
          city_id: 5,
          title: 'Mapbox',
          description: 'Toranto, Canada'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [47.533333, -18.933333]
        },
        properties: {
          city_id: 6,
          title: 'Mapbox',
          description: 'Ampamantanana, Madagascar'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [23.733333, 37.983333]
        },
        properties: {
          city_id: 7,
          title: 'Mapbox',
          description: 'Athens, Greece'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [35.509722, 33.871944]
        },
        properties: {
          city_id: 8,
          title: 'Mapbox',
          description: 'Beirut, Lebanon'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [72.836447, 18.987807]
        },
        properties: {
          city_id: 9,
          title: 'Mapbox',
          description: 'Mumbai, India'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [37.615556, 55.752222]
        },
        properties: {
          city_id: 10,
          title: 'Mapbox',
          description: 'Moscow, Russia'
        }
      }]
  };

const Map = () => {
  const [viewport, setViewport] = useState({
          width: "100vw",
          height: "100vh",
          latitude: 35.746512,
          longitude: -39.462891,
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
                  {geojson.features.map((city) => (
                    <Marker key={city.properties.city_id} latitude={city.geometry.coordinates[1]} longitude={city.geometry.coordinates[0]}>
                      <div>CITY</div>
                    </Marker >
                  ))}
                  
              </ReactMapGL>
          </div>
      )
  }

  export default Map;