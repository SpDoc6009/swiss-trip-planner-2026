import type { TripPlace } from "@/types/trip";

export function googleMapsUrl(place: TripPlace) {
  const query = encodeURIComponent(`${place.name} ${place.lat},${place.lng}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function appleMapsUrl(place: TripPlace) {
  const query = encodeURIComponent(place.name);
  return `https://maps.apple.com/?ll=${place.lat},${place.lng}&q=${query}`;
}

