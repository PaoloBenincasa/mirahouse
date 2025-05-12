
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 



function Map() {

  const bnbLocation = {
    lat: 40.8488002, 
    lng: 17.1245203,
  };

  

  return (
    <div className='map-container'>
      <MapContainer center={bnbLocation} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={bnbLocation}>
          <Popup>
            MiRa House
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;