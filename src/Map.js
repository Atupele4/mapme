import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function OpenMap() {
  return (
    <MapContainer
      style={{ width: "100%", height: "500px" }}
      center={[-13.41666667, 29.28333333]}
      zoom={6}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-15.41666667, 28.28333333]}>
        <Popup>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Downtown_Lusaka.JPG/1920px-Downtown_Lusaka.JPG"
            alt=""
            width="200"
            height="200"
          />
          <p>Lusaka</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default OpenMap;
