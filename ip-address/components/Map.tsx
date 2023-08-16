import 'leaflet/dist/leaflet.css'
import style from '@/styles/Home.module.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Icon } from "leaflet";
import { IpInformation } from '@/app/server'

const icon = new Icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [30, 40]
  });

export default function Map({details} : {details: IpInformation}) {
    return (
        <div>
            <MapContainer className={style.map} center={[details?.location?.lat, details?.location?.lng]} zoom={20} scrollWheelZoom={true}> 
                <ChangeView center={[details?.location?.lat, details?.location?.lng]} zoom={20} /> 
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap</a> contributors' 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[details?.location?.lat, details?.location?.lng]} icon={icon}>
                    <Popup> {details?.location?.city}, {details?.location?.region} </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

function ChangeView({ center, zoom} : any) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }