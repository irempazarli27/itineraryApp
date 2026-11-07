import type { Place } from "../types/place";

interface NominatimResult {
    place_id: number;
    display_name: string;
    lat: string;
    lon: string;
    type: string;
}

function getCategory(type: string): string {
    switch (type) {
        case "museum":
            return "Müze";

        case "restaurant":
        case "cafe":
        case "fast_food":
            return "Restoran";

        case "park":
            return "Park";

        case "hotel":
            return "Otel";

        case "attraction":
        case "monument":
            return "Tarihi Yer";

        default:
            return "Konum";
    }
}

export async function searchPlaces(
    query: string
): Promise<Place[]> {
  if (query.trim().length < 2) {
    return [];
  }

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
    )}&limit=10`,
    {
        headers: {
            Accept: "application/json",
        },
    }
);

if (!response.ok) {
    throw new Error("Yerler alınamadı.");
}

  const data: NominatimResult[] = await response.json();

  return data.map((item) => ({
    id: item.place_id,
    trip_id: 0,
    name: item.display_name,
    category: getCategory(item.type),
    rating: 0,
    duration: "_",
    latitude: Number(item.lat),
    longitude: Number(item.lon),
  })); 
}