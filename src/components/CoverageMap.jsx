import { MapContainer, TileLayer, CircleMarker, Tooltip, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './CoverageMap.module.css'

// Préfectures de la République centrafricaine couvertes par la FVJD
const prefectures = [
  { name: 'Kemo',          coords: [6.00, 19.50], detail: 'Préfecture · accréditation Préfet' },
  { name: "Ombelle M'Poko", coords: [4.85, 18.45], detail: 'Préfecture · périphérie de Bangui' },
  { name: 'Nana-Gribizi',  coords: [7.00, 19.18], detail: 'Préfecture · accréditation Préfet (Kaga-Bandoro)' },
  { name: 'Mbomou',        coords: [5.03, 23.78], detail: 'Préfecture · sud-est (Bangassou)' },
  { name: 'Ouham-Fafa',    coords: [7.40, 17.30], detail: 'Préfecture · nord-ouest' },
  { name: 'Lim-Pendé',     coords: [7.30, 16.00], detail: 'Préfecture · ouest (Paoua)' },
]

// Bangui marker (siège)
const bangui = { name: 'Bangui — Siège', coords: [4.3947, 18.5582] }

export default function CoverageMap() {
  return (
    <div className={styles.wrapper}>
      <MapContainer
        center={[6.5, 20.0]}
        zoom={5}
        scrollWheelZoom={false}
        className={styles.map}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {/* Siège — Bangui */}
        <CircleMarker
          center={bangui.coords}
          radius={9}
          pathOptions={{
            color: '#0a5d2e',
            fillColor: '#d4a017',
            fillOpacity: 1,
            weight: 3,
          }}
        >
          <Tooltip direction="top" offset={[0, -8]} opacity={1} className={styles.tooltip}>
            {bangui.name}
          </Tooltip>
        </CircleMarker>

        {/* 6 préfectures */}
        {prefectures.map((p) => (
          <CircleMarker
            key={p.name}
            center={p.coords}
            radius={11}
            pathOptions={{
              color: '#0a5d2e',
              fillColor: '#15723b',
              fillOpacity: 0.85,
              weight: 2,
            }}
          >
            <Tooltip direction="top" offset={[0, -8]} opacity={1} className={styles.tooltip}>
              <strong>{p.name}</strong>
            </Tooltip>
            <Popup className={styles.popup}>
              <strong>{p.name}</strong>
              <br />
              {p.detail}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.dotGold}`} /> Siège — Bangui
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.dotGreen}`} /> Préfectures couvertes ({prefectures.length})
        </span>
      </div>
    </div>
  )
}
