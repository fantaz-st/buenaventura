"use client";
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import classes from "./TourMap.module.css";

const stops = [
  { name: "Split", coords: [43.5081, 16.4402], img: "/assets/images/tours/lagoon/map/split.jpg" },
  { name: "Nečujam", coords: [43.383729429134746, 16.311351655822392], img: "/assets/images/tours/lagoon/map/necujam.jpg" },
  { name: "Blue Lagoon", coords: [43.44078812858363, 16.174934837308957], img: "/assets/images/tours/lagoon/map/lagoon.jpg" },
  { name: "Trogir", coords: [43.517, 16.251], img: "/assets/images/tours/lagoon/map/trogir.jpg" },
];

const pin = (cls) =>
  L.divIcon({
    className: `${classes.pin} ${cls || ""}`,
    html: `<span class="${classes.dot}"></span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
  });

/* Asymmetric cubic curve helper (stronger bend near the start) */
function asymmetricCurve(a, b, { t1 = 0.18, t2 = 0.62, off1 = 0.36, off2 = 0.14, side = -1, n = 120 } = {}) {
  const [ay, ax] = [a[0], a[1]];
  const [by, bx] = [b[0], b[1]];
  const dx = bx - ax,
    dy = by - ay;
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * side;
  const ny = (dx / len) * side;

  const c1x = ax + dx * t1 + nx * off1 * len;
  const c1y = ay + dy * t1 + ny * off1 * len;
  const c2x = ax + dx * t2 + nx * off2 * len;
  const c2y = ay + dy * t2 + ny * off2 * len;

  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n,
      u = 1 - t;
    const x = u * u * u * ax + 3 * u * u * t * c1x + 3 * u * t * t * c2x + t * t * t * bx;
    const y = u * u * u * ay + 3 * u * u * t * c1y + 3 * u * t * t * c2y + t * t * t * by;
    pts.push([y, x]);
  }
  return pts;
}

export default function TourMap() {
  // Nečujam -> Blue Lagoon (aggressive bend near Nečujam, bows “up”)
  const curveNecujamToLagoon = asymmetricCurve(stops[1].coords, stops[2].coords, {
    t1: 0.16,
    t2: 0.6,
    off1: 0.35,
    off2: -0.1,
    side: -1,
    n: 140,
  });

  const curveLagoonToTrogir = asymmetricCurve(stops[2].coords, stops[3].coords, {
    t1: 0.1, // control closer to start
    t2: 0.68, // second control further along
    off1: 0.35, // big offset near start -> strong bow
    off2: 0.28, // keep some offset later for a smooth arc
    side: 1, // 1 = curve left of the straight line (flip to -1 if needed)
    n: 160,
  });

  function FitBoundsInner() {
    const map = useMap();
    const b = L.latLngBounds([...stops.map((s) => s.coords), ...curveNecujamToLagoon, ...curveLagoonToTrogir]);
    map.fitBounds(b, { padding: [56, 56] });
    return null;
  }

  return (
    <div className={classes.wrap}>
      <MapContainer className={classes.map} center={[43.47, 16.33]} zoom={9} scrollWheelZoom={false} zoomControl>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" attribution="&copy; OpenStreetMap &copy; CARTO" />

        {/* Split -> Nečujam (straight) */}
        <Polyline positions={[stops[0].coords, stops[1].coords]} pathOptions={{ color: "#fff", weight: 8, opacity: 0.6 }} />
        <Polyline positions={[stops[0].coords, stops[1].coords]} pathOptions={{ color: "#1f6ed4", weight: 4, dashArray: "8 6" }} className={classes.routeAnim} />
        {/* Nečujam -> Blue Lagoon (curved) */}
        <Polyline positions={curveNecujamToLagoon} pathOptions={{ color: "#fff", weight: 8, opacity: 0.6 }} />
        <Polyline positions={curveNecujamToLagoon} pathOptions={{ color: "#1f6ed4", weight: 4, dashArray: "8 6" }} className={classes.routeAnim} />
        {/* Blue Lagoon -> Trogir (curved LEFT) */}
        <Polyline positions={curveLagoonToTrogir} pathOptions={{ color: "#fff", weight: 8, opacity: 0.6 }} />
        <Polyline positions={curveLagoonToTrogir} pathOptions={{ color: "#1f6ed4", weight: 4, dashArray: "8 6" }} className={classes.routeAnim} />
        {/* Markers with image popups */}
        <Marker position={stops[0].coords} icon={pin(classes.start)}>
          <Popup className={classes.bigPopup} maxWidth={480}>
            <div className={classes.popup}>
              <img src={stops[0].img} alt={stops[0].name} />
              <p>
                <b>{stops[0].name}</b>
              </p>
            </div>
          </Popup>
        </Marker>
        {stops.slice(1, -1).map((s) => (
          <Marker key={s.name} position={s.coords} icon={pin()}>
            <Popup className={classes.bigPopup} maxWidth={480}>
              <div className={classes.popup}>
                <img src={s.img} alt={s.name} />
                <p>
                  <b>{s.name}</b>
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
        <Marker position={stops.at(-1).coords} icon={pin(classes.end)}>
          <Popup className={classes.bigPopup} maxWidth={480}>
            <div className={classes.popup}>
              <img src={stops.at(-1).img} alt={stops.at(-1).name} />
              <p>
                <b>{stops.at(-1).name}</b>
              </p>
            </div>
          </Popup>
        </Marker>

        <FitBoundsInner />
      </MapContainer>
    </div>
  );
}
