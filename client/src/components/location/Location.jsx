
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
    lat: 42.6977,  // Latitude for Sofia, Bulgaria
    lng: 23.3242,  // Longitude for Sofia, Bulgaria
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDpxXSBzQ683Kr0Yt6rPewOz2XiJYEDjGg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;

    // return (
    //     <div className="map_main">
    //         <div className="map-responsive">
    //             <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="250" height="500" frameBorder="0" style={{ "border": "0", "width": "100%" }} allow="fullscreen"></iframe>
    //         </div>
    //     </div>
    // )
