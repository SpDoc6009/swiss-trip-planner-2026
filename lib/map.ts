import type { PlaceType } from "@/types/trip";

export const placeTypeLabels: Record<PlaceType, string> = {
  airport: "機場",
  train: "車站",
  hotel: "飯店",
  mountain: "高山",
  lake: "湖泊",
  town: "城鎮",
  parking: "停車",
  restaurant: "餐廳",
  viewpoint: "景點"
};

export const placeTypeIcons: Record<PlaceType, string> = {
  airport: "✈",
  train: "◇",
  hotel: "▣",
  mountain: "▲",
  lake: "◒",
  town: "●",
  parking: "P",
  restaurant: "◎",
  viewpoint: "◆"
};

export function getTileProvider() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const maptilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  if (mapboxToken) {
    return {
      url: `https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`,
      attribution: "© Mapbox © OpenStreetMap",
      tileSize: 512,
      zoomOffset: -1
    };
  }

  if (maptilerKey) {
    return {
      url: `https://api.maptiler.com/maps/outdoor-v2/{z}/{x}/{y}.png?key=${maptilerKey}`,
      attribution: "© MapTiler © OpenStreetMap contributors",
      tileSize: 256,
      zoomOffset: 0
    };
  }

  return {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors",
    tileSize: 256,
    zoomOffset: 0
  };
}
