import { useEffect, useState } from "react";

import Card from "../common/Card";
import type { Place } from "../../types/place";
import { searchPlaces } from "../../services/placeService";
import PlaceCard from "./PlaceCard";
import SelectedPlaceCard from "./selectedPlaces";

interface PlacesTabProps {
    tripId: number;
    selectedPlaces: Place[];
    setSelectedPlaces: React.Dispatch<React.SetStateAction<Place[]>>;
}

function PlacesTab({ 
    tripId,
    selectedPlaces, 
    setSelectedPlaces 
}: PlacesTabProps) {
    const [search, setSearch] = useState("");
    const [places, setPlaces] = useState<Place[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {   
        const timeout = setTimeout(async() => {
            if (search.trim().length < 2) {
                setPlaces([]);
                return;
            }

        try {
            setLoading(true);

            const results = await searchPlaces(search);

            setPlaces(results);
        }   catch (error) {
            console.error(error);
        }   finally {
            setLoading(false);
        }
    }, 500);

        return () => clearTimeout(timeout);
    }, [search]);

    const addPlace = (place: Place) => {
        if (
            !selectedPlaces.some(
                (p) => p.id === place.id
            )
        )  {
           setSelectedPlaces([
            ...selectedPlaces, 
            place,
        ]);
        }
    };

    const removePlace = (id: number) => {
        setSelectedPlaces(
            selectedPlaces.filter(
                (p) => p.id !== id
            )
        );
    };

    return (
        <Card>
            <h2 className="text-2xl font-semibold">
                📍 Yerler
            </h2>

            <p className="mt-2 text-slate-500">
                Gideceğin yerleri ara.
            </p>

            <input
                type="text"
                placeholder="Yer ara..."
                value={search}
                onChange={(e) => 
                    setSearch(e.target.value)
                }
                className="mt-6 w-full rounded-xl border border-slate-200 p-3 outline-none transition focus:border-indigo-500"
            />

            {loading && (
                <p className="mt-4 text-slate-500">
                    Aranıyor...
                </p>
            )}

            <div className="mt-6 space-y-4">
                {places.map((place) => (
                    <PlaceCard
                            key={place.id}
                            place={place}
                            isSelected={selectedPlaces.some(
                                (p) => p.id === place.id
                            )}
                            onAdd={addPlace}
                        />
                    ))}
            </div>

            <h3 className="mt-10 text-xl font-semibold">
                Seçilen Yerler ({selectedPlaces.length})
            </h3>

            <div className="mt-4 space-y-4">
                {selectedPlaces.length === 0 ? (
                    <div className="rounded-2xl bg-slate-100 p-5 text-center text-slate-500">
                        Henüz yer eklenmedi.
                    </div>
                ) : (
                    selectedPlaces.map((place) => (
                        <SelectedPlaceCard
                            key={place.id}
                            place={place}
                            onRemove={removePlace}
                        />
                    ))
                )}
            </div>  
        </Card>
    );
}

export default PlacesTab;   
