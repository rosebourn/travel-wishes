import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import cityData from "../../../public/data/city-info.json";
import Navbar from "./Navbar";
import 'mapbox-gl/dist/mapbox-gl.css';

// console.log(cityData);

const TOKEN = process.env.REACT_APP_MAPBOX_KEY;

const geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [55.4920, 4.6796]
      },
      properties: {
        city_id: 1,
        title: 'Mapbox',
        description: 'Seychelles, East Africa',
        image: "../../assets/images/1.jpg",
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.335167, 47.608013]
      },
      properties: {
        city_id: 2,
        title: 'Mapbox',
        description: 'Seattle, Washington',
        image: "../../assets/images/2.jpg"
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
          image: "../../assets/images/3.jpg"
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
          image: "../../assets/images/4.jpg"
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-73.000000, -51.000000]
        },
        properties: {
          city_id: 5,
          title: 'Mapbox',
          description: 'Patagonia, Chile',
          image: "../../assets/images/5.jpg"
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [135.75, 35.016667]
        },
        properties: {
          city_id: 6,
          title: 'Mapbox',
          description: 'Kyoto, Japan',
          image: "../../assets/images/6.jpg"
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-88.631529, 20.869456]
        },
        properties: {
          city_id: 7,
          title: 'Mapbox',
          description: 'Quintana Roo, Mexico',
          image: "../../assets/images/7.jpg"
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-79.416667, 43.666667]
        },
        properties: {
          city_id: 8,
          title: 'Mapbox',
          description: 'Toranto, Canada',
          image: "../../assets/images/8.jpg"
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [2.333333, 48.866667]
        },
        properties: {
          city_id: 9,
          title: 'Mapbox',
          description: 'Paris, France',
          image: "../../assets/images/9.jpg"
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [109.1967, 12.2388]
        },
        properties: {
          city_id: 10,
          title: 'Mapbox',
          description: 'Nha Trang, Vietnam',
          image: "../../assets/images/10.jpg"
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
                        }}
                        >
                          <div>
                            <h5>{selectedCity.properties.description}</h5>
                            <img src={selectedCity.properties.image} alt="city"
                            style={{
                                width: "300px",
                                height: "200px"
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