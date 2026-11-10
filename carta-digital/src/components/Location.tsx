import './Location.css';

const ADDRESS = 'Calle del Marqués de Viana, 11, 28039 Madrid';
const PHONE_DISPLAY = '624 25 64 51';
const PHONE_TEL = '+34624256451';
const LAT = 40.460936;
const LNG = -3.699604;

// Sin parámetro "origin", Google Maps usa la ubicación actual del usuario:
// sirve para llegar desde cualquier punto de Madrid (a pie, metro, bus o coche).
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS
)}&travelmode=transit`;
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const EMBED_URL = `https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`;

export function Location() {
  return (
    <section className="location-section" id="como-llegar" aria-labelledby="como-llegar-title">
      <div className="section-header">
        <h2 className="section-title text-gradient-es" id="como-llegar-title">Cómo llegar</h2>
        <div className="section-divider"></div>
      </div>

      <p className="location-address">
        <strong>El Rincón de Tetuán</strong>
        <br />
        {ADDRESS} · barrio de Tetuán
      </p>

      <p className="location-address">
        <strong>Horario</strong>
        <br />
        Todos los días de 17:00 a 03:00 · Terraza hasta las 00:00
      </p>

      <div className="location-actions">
        <a className="location-btn location-btn-primary" href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
          📍 Cómo llegar desde donde estás
        </a>
        <a className="location-btn" href={`tel:${PHONE_TEL}`}>
          📞 Llamar · {PHONE_DISPLAY}
        </a>
        <a className="location-btn" href={MAP_URL} target="_blank" rel="noopener noreferrer">
          Ver en Google Maps
        </a>
      </div>

      <iframe
        className="location-map"
        title="Mapa de El Rincón de Tetuán en Madrid"
        src={EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
