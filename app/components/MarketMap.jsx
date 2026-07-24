"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

// Leaflet's default marker icon references image paths that don't survive
// a webpack bundle. Rebuild it from the CDN so the pin renders.
const signalIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [30, 49],
  iconAnchor: [15, 49],
  popupAnchor: [1, -40],
  className: "market-map-signal-pin",
});

const neighborhoods = [
  {
    id: "fwb",
    name: "Fort Walton Beach",
    lat: 30.4013,
    lng: -86.6186,
    blurb:
      "Home base. Walkable downtown, Brooks Bridge access, strong rental demand near the beach.",
    medianPrice: "$385K",
    vibe: "Established / Coastal",
  },
  {
    id: "destin",
    name: "Destin",
    lat: 30.3935,
    lng: -86.4958,
    blurb:
      "Premium short-term rental market. High CAP rates on turnkey condos near Harborwalk.",
    medianPrice: "$625K",
    vibe: "Vacation Rental Hub",
    featured: true,
  },
  {
    id: "niceville",
    name: "Niceville",
    lat: 30.5169,
    lng: -86.4794,
    blurb:
      "Top-rated schools, family-oriented, steady appreciation with less tourist volatility.",
    medianPrice: "$415K",
    vibe: "Family / Long-Term Hold",
  },
  {
    id: "shalimar",
    name: "Shalimar",
    lat: 30.4402,
    lng: -86.5747,
    blurb:
      "Small-town feel right next to Eglin AFB — reliable tenant base of military families.",
    medianPrice: "$340K",
    vibe: "Military / Rental Stability",
  },
  {
    id: "mary-esther",
    name: "Mary Esther",
    lat: 30.4041,
    lng: -86.6547,
    blurb:
      "Emerging growth zone — older housing stock at a discount with renovation upside.",
    medianPrice: "$295K",
    vibe: "Value / Growth Zone",
  },
  {
    id: "crestview",
    name: "Crestview",
    lat: 30.7621,
    lng: -86.5705,
    blurb:
      "The affordability play. New construction, more land per dollar, longer commute.",
    medianPrice: "$310K",
    vibe: "New Construction",
  },
];

export default function MarketMap() {
  const [active, setActive] = useState(neighborhoods[0].id);
  const activeNeighborhood = neighborhoods.find((n) => n.id === active);

  return (
    <div className="grid lg:grid-cols-[320px_1fr] gap-6">
      <div className="corner-marks border border-ink/10 divide-y divide-ink/10 max-h-[520px] overflow-y-auto order-2 lg:order-1">
        {neighborhoods.map((n) => (
          <button
            key={n.id}
            onClick={() => setActive(n.id)}
            className={`w-full text-left p-4 transition-colors ${
              active === n.id ? "bg-signal/10" : "hover:bg-ink/5"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-ink">{n.name}</span>
              {n.featured && (
                <span className="font-mono text-[9px] uppercase tracking-widest text-signal font-bold">
                  Hot
                </span>
              )}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gulf block mt-1">
              {n.vibe} · {n.medianPrice} median
            </span>
            <p className="text-xs text-ink/60 mt-2 leading-relaxed">
              {n.blurb}
            </p>
          </button>
        ))}
      </div>

      <div className="corner-marks border border-ink/10 h-[420px] lg:h-[520px] order-1 lg:order-2 overflow-hidden">
        <MapContainer
          center={[30.48, -86.55]}
          zoom={10}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
          className="grayscale-[15%] contrast-[1.05]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapFlyTo neighborhood={activeNeighborhood} />
          {activeNeighborhood && (
            <Marker
              position={[activeNeighborhood.lat, activeNeighborhood.lng]}
              icon={signalIcon}
              eventHandlers={{
                click: () => setActive(activeNeighborhood.id),
              }}
            >
              <Popup>
                <strong>{activeNeighborhood.name}</strong>
                <br />
                {activeNeighborhood.vibe} · {activeNeighborhood.medianPrice}{" "}
                median
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
}

// Pans/zooms the map to the selected neighborhood whenever the list
// selection changes, since only one pin is ever shown at a time.
function MapFlyTo({ neighborhood }) {
  const map = useMap();

  useEffect(() => {
    if (!neighborhood) return;
    map.flyTo([neighborhood.lat, neighborhood.lng], 13, {
      duration: 0.8,
    });
  }, [neighborhood, map]);

  return null;
}
