import type { Place } from "../../types/place";

interface PlaceCardProps {
    place: Place;
    isSelected: boolean;
    onAdd: (place: Place) => void;
}

function PlaceCard({ 
    place, 
    isSelected, 
    onAdd,
}: PlaceCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <h3 className="font-semibold">
                            {place.name}
                        </h3>

                        <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                            ⭐ {place.rating}
                        </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                        {place.category}
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                        ⏱ {place.duration}
                    </p>
                </div>

                <button
                    onClick={() => onAdd(place)}
                    disabled={isSelected}
                    className={`rounded-xl px-4 py-2 text-white transition ${
                        isSelected
                            ? "cursor-not-allowed bg-green-600"
                            : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                >
                    {isSelected ? "✔ Eklendi" : "➕ Ekle"}
                </button>
            </div>
        </div>
    )
}

export default PlaceCard;