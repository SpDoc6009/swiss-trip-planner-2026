"use client";

import L, { type LatLngBoundsExpression } from "leaflet";
import { useEffect, useMemo } from "react";
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMap } from "react-leaflet";

import { itineraryDays } from "@/data/itinerary";
import { placeById } from "@/data/places";
import { getTileProvider, placeTypeIcons, placeTypeLabels } from "@/lib/map";
import type { ItineraryDay, TripPlace } from "@/types/trip";

type RouteMode = "day" | "all";

interface TripMapProps {
  selectedDay: ItineraryDay;
  routeMode: RouteMode;
  focusPlaceId?: string;
}

export function TripMap({ selectedDay, routeMode, focusPlaceId }: TripMapProps) {
  const tileProvider = getTileProvider();

  const routePlaces = useMemo(() => {
    if (routeMode === "all") {
      const ids = itineraryDays.flatMap((day) => day.routePlaceIds);
      return uniquePlaces(ids);
    }
    return uniquePlaces(selectedDay.routePlaceIds);
  }, [routeMode, selectedDay.routePlaceIds]);

  const markerPlaces = useMemo(() => uniquePlaces(routeMode === "all" ? itineraryDays.flatMap((day) => day.placeIds) : selectedDay.placeIds), [routeMode, selectedDay.placeIds]);
  const focusPlace = focusPlaceId ? placeById.get(focusPlaceId) : undefined;

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl bg-white p-2 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
      <MapContainer center={[46.8182, 8.2275]} zoom={7} scrollWheelZoom className="h-[340px] w-full sm:h-[430px] lg:h-[560px]">
        <TileLayer attribution={tileProvider.attribution} url={tileProvider.url} tileSize={tileProvider.tileSize} zoomOffset={tileProvider.zoomOffset} />
        <MapFocus places={focusPlace ? [focusPlace] : routePlaces} focusPlace={focusPlace} />
        <Polyline positions={routePlaces.map((place) => [place.lat, place.lng])} pathOptions={{ color: routeMode === "all" ? "#d52b1e" : "#16566d", weight: 4, opacity: 0.75 }} />
        {markerPlaces.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            icon={createIcon(place)}
            eventHandlers={{
              mouseover: (event) => event.target.openPopup()
            }}
          >
            <Popup>
              <div className="min-w-[180px]">
                <p className="text-sm font-black text-lake-900">{place.name}</p>
                <p className="mt-1 text-xs font-bold text-slate-500">{placeTypeLabels[place.type]}{place.stay ? ` · ${place.stay}` : ""}</p>
                {place.note ? <p className="mt-2 text-xs leading-5 text-slate-600">{place.note}</p> : null}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

function uniquePlaces(ids: string[]) {
  const seen = new Set<string>();
  return ids.reduce<TripPlace[]>((acc, id) => {
    if (seen.has(id)) return acc;
    const place = placeById.get(id);
    if (!place) return acc;
    seen.add(id);
    acc.push(place);
    return acc;
  }, []);
}

function createIcon(place: TripPlace) {
  return L.divIcon({
    className: "",
    html: `<div class="trip-marker" title="${place.name}">${placeTypeIcons[place.type]}</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -14]
  });
}

function MapFocus({ places, focusPlace }: { places: TripPlace[]; focusPlace?: TripPlace }) {
  const map = useMap();

  useEffect(() => {
    if (focusPlace) {
      map.setView([focusPlace.lat, focusPlace.lng], 13, { animate: true });
      return;
    }

    if (places.length === 1) {
      map.setView([places[0].lat, places[0].lng], 11, { animate: true });
      return;
    }

    if (places.length > 1) {
      const bounds = places.map((place) => [place.lat, place.lng]) as LatLngBoundsExpression;
      map.fitBounds(bounds, { padding: [28, 28], maxZoom: 11, animate: true });
    }
  }, [focusPlace, map, places]);

  return null;
}
