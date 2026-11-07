import {
    MapContainer,
    Marker, 
    Popup,
    TileLayer,
    useMap,
} from "react-leaflet";

import { useEffect } from "react";
import type { Place } from "../../types/place";

interface MapProps {
    selectedPlaces: Place[];
}

function ChangeMapView({
    selectedPlaces,
}: MapProps) {
    const map = useMap();

    useEffect(() => {
        if (selectedPlaces.length === 0) return;

        const lastPlace =
            selectedPlaces[selectedPlaces.length - 1];

        map.flyTo(
            [lastPlace.latitude, lastPlace.longitude],
            15,
            {
                duration: 1.5,
            }
        );
    }, [selectedPlaces, map]);

    return null;
}

function Map({ selectedPlaces }: MapProps) {
    return (
        <MapContainer
            center={[41.0082, 28.9784]}
            zoom={13}
            className="h-full w-full"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />

            <ChangeMapView 
                selectedPlaces={selectedPlaces} 
            />

            {selectedPlaces.map((place) => (
                <Marker
                    key={place.id}
                    position={[place.latitude, place.longitude]}
                >
                    <Popup>
                        <div className="min-w-[200px]">
                            <h3 className="font-semibold">
                                {place.name}
                            </h3>
                            
                            <p className="mt-1 text-sm text-slate-600">
                                {place.category}
                            </p>

                            <div className="mt-3 items-center flex justify-between text-sm">
                                <span>⭐ {place.rating}</span>
                                <span>⏱️ {place.duration}</span>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;