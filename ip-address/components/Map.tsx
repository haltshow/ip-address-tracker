import 'leaflet/dist/leaflet.css'
import style from '@/styles/Home.module.css'
import { MapContainer, TileLayer } from 'react-leaflet'

export default function Map() {
    return (
        <MapContainer className={style.map} center={[52.505, -0.09]} zoom={5} scrollWheelZoom={true}> 
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap</a>' 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}