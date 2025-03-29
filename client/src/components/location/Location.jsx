
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
    lat: 42.6977,  // Latitude for Sofia, Bulgaria
    lng: 23.3242,  // Longitude for Sofia, Bulgaria
};

export default function GoogleMapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDpxXSBzQ683Kr0Yt6rPewOz2XiJYEDjGg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

