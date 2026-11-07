import type { Place } from "../../types/place";

interface SelectedPlacesCardProps {
    place: Place;
    onRemove: (id: number) => void;
}

function SelectedPlacesCard({
    place,
    onRemove,
}: SelectedPlacesCardProps) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 shadow-sm">
            <div className="flex-1">
                <h4 className="font-medium">
                    {place.name}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                    {place.category}
                </p>

                <div className="flex items-center gap-4 mt-2 text-sm text-slate-400">
                    <span>⭐ {place.rating}</span>
                    <span>⏱ {place.duration}</span>
                </div>
            </div>

            <button
                onClick={() => onRemove(place.id)}
                className="rounded-xl bg-red-50 px-4 py-2 font-medium text-red-600 transition hover:bg-red-100"
            >
                Sil
            </button>
        </div>
    )
}

export default SelectedPlacesCard;
