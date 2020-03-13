import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import cityData from "../../data/city-info.json";
import Navbar from "./Navbar";
// import * as image from "../../assets/images";
import 'mapbox-gl/dist/mapbox-gl.css';
// import "../../assets/images";

// console.log(cityData);

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
        description: 'Washington, D.C.',
        image: "../../assets/images/1.jpg"
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
        description: 'San Francisco, California',
        image: "../../assets/images/1.jpg"
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
          description: 'La Paz, Bolivia',
          image: "../../assets/images/1.jpg"
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
          description: 'Cairns, Australia',
          image: "../../assets/images/1.jpg"
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
          description: 'Toranto, Canada',
          image: "../../assets/images/1.jpg"
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
          description: 'Ampamantanana, Madagascar',
          image: "../../assets/images/1.jpg"
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
          description: 'Athens, Greece',
          image: "../../assets/images/1.jpg"
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
          description: 'Beirut, Lebanon',
          image: "../../assets/images/1.jpg"
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
          description: 'Mumbai, India',
          image: "../../assets/images/1.jpg"
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
          description: 'Moscow, Russia',
          image: "../../assets/images/1.jpg"
        }
      }
    ]
  };

const Map = () => {
  const [viewport, setViewport] = useState({
          width: "100vw",
          height: "100vh",
          latitude: 32.4279,
          longitude: 53.6880,
          zoom: 2
      });
      const [selectedCity, setSelectedCity] = useState(null);

      useEffect(() => {
          const listener = e => {
              if (e.key === "Escape") {
                  setSelectedCity(null);
              }
          };
          window.addEventListener("keydown", listener);
      }, []);

      return (
          <div>
              <Navbar />
              <ReactMapGL 
              {...viewport}
              mapboxApiAccessToken={TOKEN}
              mapStyle="mapbox://styles/rosebourn/ck6nza16t18ct1iqbrjn5st2u"
              onViewportChange={viewport => {
                setViewport(viewport);
              }}
              >
                  {geojson.features.map((city) => (
                    <Marker key={city.properties.city_id}
                     latitude={city.geometry.coordinates[1]} 
                     longitude={city.geometry.coordinates[0]}>
                      <button onClick={(e) => {
                          e.preventDefault();
                          setSelectedCity(city);
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer"
                      }}>
                          <img src="/pin-navy.svg" alt="pin" 
                          style={{
                              width: "20px",
                              height: "20px"
                          }}/>
                      </button>
                    </Marker >
                  ))}
                  {selectedCity ? (
                      <Popup 
                        latitude={selectedCity.geometry.coordinates[1]}
                        longitude={selectedCity.geometry.coordinates[0]}
                        onClose={() => {
                            setSelectedCity(null);
                        }}>
                          <div>
                            <p>{selectedCity.properties.description}</p>
                            <img src={selectedCity.properties.image} alt="city"
                            style={{
                                width: "30px",
                                height: "30px"
                            }}
                            ></img>
                          </div>
                      </Popup>
                  ) : null}
              </ReactMapGL>
          </div>
      )
  }

  export default Map;