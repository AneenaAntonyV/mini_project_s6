import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const libraries = ['places'];
const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [fireStations, setFireStations] = useState([]);
  const [selectedFireStation, setSelectedFireStation] = useState(null);
  const [directions, setDirections] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lng: longitude });
    }, (error) => {
      console.error(error);
    });
  }, []);

  const handleLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const searchFireStations = () => {
    if (userLocation) {
      const service = new window.google.maps.places.PlacesService(map);
      const request = {
        location: userLocation,
        radius: 7000, // Adjust radius as needed
        type: 'fire_station', // Search for fire stations
      };
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setFireStations(results);
        }
      });
    }
  };

  useEffect(() => {
    searchFireStations();
  }, [userLocation]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180); // deg2rad below
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      0.5 - Math.cos(dLat) / 2 +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      (1 - Math.cos(dLon)) / 2;

    return R * 2 * Math.asin(Math.sqrt(a)); // Distance in km
  };

  const handleDirections = () => {
    if (userLocation && selectedFireStation) {
      const directionsService = new window.google.maps.DirectionsService();
      const id = setInterval(() => {
        directionsService.route(
          {
            origin: userLocation,
            destination: selectedFireStation.geometry.location,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result);
              setUserLocation({
                lat: result.routes[0].legs[0].end_location.lat(),
                lng: result.routes[0].legs[0].end_location.lng(),
              });
            } else {
              console.error(`Directions request failed due to ${status}`);
            }
          }
        );
      }, 5000); // Update route every 5 seconds
      setIntervalId(id);
    }
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  return (
    <>
      <style jsx global>{`
        .map-container {
          height: 50vh;
          width: 100%;
        }
      `}</style>
      <LoadScript
        googleMapsApiKey="AIzaSyDU7aogpPGvovMLFoNkzWAhCVz3nKwwGuA"
        libraries={libraries}
      >
        <GoogleMap
          mapContainerClassName="map-container"
          zoom={13}
          center={userLocation}
          onLoad={handleLoad}
        >
          {userLocation && <Marker position={userLocation} />}
          {fireStations.map((fireStation) => (
            <Marker
              key={fireStation.id}
              position={fireStation.geometry.location}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // Red icon for fire stations
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15)
              }}
              onClick={() => {
                setSelectedFireStation(fireStation);
                setDirections(null); // Reset directions if a new fire station is selected
              }}
            />
          ))}
          {selectedFireStation && (
            <InfoWindow position={selectedFireStation.geometry.location} onCloseClick={() => setSelectedFireStation(null)}>
              <div>
                <strong>{selectedFireStation.name}</strong>
                <br />
                Distance: {calculateDistance(
                  userLocation.lat,
                  userLocation.lng,
                  selectedFireStation.geometry.location.lat(),
                  selectedFireStation.geometry.location.lng()
                ).toFixed(2)} km
                <br />
                {intervalId ? (
                  <button onClick={handleStop}>Stop</button>
                ) : (
                  <button onClick={handleDirections}>Start</button>
                )}
              </div>
            </InfoWindow>
          )}
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                polylineOptions: {
                  strokeColor: 'blue',
                },
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
      {fireStations.length > 0 && (
        <div>
          <h2>Fire Stations Nearby:</h2>
          <ul>
            {fireStations.map((fireStation) => (
              <li key={fireStation.id}>{fireStation.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Map;

