import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const libraries = ['places'];

const Map = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [policeStations, setPoliceStations] = useState([]);
  const [selectedPoliceStation, setSelectedPoliceStation] = useState(null);
  const [directions, setDirections] = useState(null);

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

  const searchPoliceStations = () => {
    if (userLocation) {
      const service = new window.google.maps.places.PlacesService(map);
      const request = {
        location: userLocation,
        radius: 7000, // Adjust radius as needed
        type: 'police', // Search for police stations
      };
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPoliceStations(results);
        }
      });
    }
  };

  useEffect(() => {
    searchPoliceStations();
  }, [userLocation]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);  // deg2rad below
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      0.5 - Math.cos(dLat) / 2 +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      (1 - Math.cos(dLon)) / 2;

    return R * 2 * Math.asin(Math.sqrt(a)); // Distance in km
  };

  const handleDirections = () => {
    if (userLocation && selectedPoliceStation) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: userLocation,
          destination: selectedPoliceStation.geometry.location,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`Directions request failed due to ${status}`);
          }
        }
      );
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
          {policeStations.map((policeStation) => (
            <Marker
              key={policeStation.id}
              position={policeStation.geometry.location}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15)
              }}
              onClick={() => {
                setSelectedPoliceStation(policeStation);
                setDirections(null); // Reset directions if a new police station is selected
              }}
            />
          ))}
          {selectedPoliceStation && (
            <InfoWindow position={selectedPoliceStation.geometry.location} onCloseClick={() => setSelectedPoliceStation(null)}>
              <div>
                <strong>{selectedPoliceStation.name}</strong>
                <br />
                Distance: {calculateDistance(
                  userLocation.lat,
                  userLocation.lng,
                  selectedPoliceStation.geometry.location.lat(),
                  selectedPoliceStation.geometry.location.lng()
                ).toFixed(2)} km
                <br />
                <button onClick={handleDirections}>Show Directions</button>
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
      {policeStations.length > 0 && (
        <div>
          <h2>Police Stations Nearby:</h2>
          <ul>
            {policeStations.map((policeStation) => (
              <li key={policeStation.id}>{policeStation.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Map;
