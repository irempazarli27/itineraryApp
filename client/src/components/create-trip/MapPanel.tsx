import Map from "./Map";
import type { Place } from "../../types/place";

interface MapPanelProps {
    selectedPlaces: Place[];
}

function MapPanel({ selectedPlaces }: MapPanelProps) {
    return (
        <div className="sticky top-6 h-[calc(100vh-48px)]">
            <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                
                {/* Harita Alanı */}

                <div className="flex-1">
                    <Map selectedPlaces={selectedPlaces} />
                </div>

                {/* Seyahat Özeti */}

                <div className="border-t border-slate-200 p-6">
                    <h3 className="mb-5 text-lg font-semibold">
                        Seyahat Özeti
                    </h3>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-2xl bg-slate-100 p-4 text-center">
                        <p className="text-3xl">📍</p>

                        <p className="mt-2 text-xl font-bold">
                            {selectedPlaces.length}
                        </p>

                        <p className="text-sm text-slate-500">
                            Yer
                        </p>
                    </div>

                    <div className="rounded-2xl bg-slate-100 p-4 text-center">
                        <p className="text-3xl">📅</p>

                        <p className="mt-2 text-xl font-bold">
                            0
                        </p>

                        <p className="text-sm text-slate-500">
                            Gün
                        </p>
                    </div>

                    <div className="rounded-2xl bg-slate-100 p-4 text-center">
                        <p className="text-3xl">💰</p>

                        <p className="mt-2 text-xl font-bold">
                            ₺0
                        </p>

                        <p className="text-sm text-slate-500">
                            Bütçe
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MapPanel;