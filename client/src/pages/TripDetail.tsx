import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTrip } from "../api/tripApi";

import type { Place } from "../types/place";
import type { Trip } from "../types/trip";

import MapPanel from "../components/create-trip/MapPanel";
import TripHeader from "../components/create-trip/TripHeader";
import TripTabs from "../components/create-trip/TripTabs";
import PlacesTab from "../components/create-trip/PlacesTab";
import PlanTab from "../components/create-trip/PlanTab";
import BudgetTab from "../components/create-trip/BudgetTab";
import ChecklistTab from "../components/create-trip/ChecklistTab";

function TripDetail() {
    const { id } = useParams();

    const [trip, setTrip] = useState<Trip | null>(null);

    const [selectedPlaces, setSelectedPlaces] = useState<Place[]>([]);

    const [activeTab, setActiveTab] = useState<
        "places" | "plan" | "budget" | "checklist"
    >("places");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            loadTrip(Number(id));
        }
    }, [id]);

    async function loadTrip(tripId: number) {
        try {
            const data = await getTrip(tripId);
            setTrip(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <h1 className="text-2xl font-semibold">
                    Yükleniyor...
                </h1>
            </div>
        );
    }

    if (!trip) {
        return (
            <div className="flex h-screen items-center justify-center">
                <h1 className="text-2xl font-semibold text-red-500">
                    Seyahat bulunamadı.
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto flex max-w-7xl gap-6 p-6">
                <div className="w-2/5">
                    <MapPanel 
                        selectedPlaces={selectedPlaces}
                    />
                </div>

                <div className="flex-1">
                    <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h1 className="text-3xl font-bold">
                            {trip.title}
                        </h1>

                        <p className="mt-2 text-slate-500">
                            📍 {trip.city}
                        </p>

                        <div className="mt-6 grid grid-cols-3 gap-4">
                            <div className="rounded-xl bg-slate-100 p-4">
                                <p className="text-sm text-slate-50">
                                    Başlangıç
                                </p>
                                <h3 className="mt-1 font-semibold">
                                    {trip.startDate}
                                </h3>
                            </div>

                            <div className="rounded-xl bg-slate-100 p-4">
                                <p className="text-sm text-slate-500">
                                    Bitiş
                                </p>
                                <h3 className="mt-1 font-semibold">
                                    {trip.endDate}
                                </h3>
                            </div>

                            <div className="rounded-xl bg-slate-100 p-4">
                                <p className="text-sm text-slate-500">
                                    Bütçe
                                </p>
                                <h3 className="mt-1 font-semibold">
                                    ₺{trip.budget}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <TripTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    {activeTab === "places" && (
                        <PlacesTab 
                            tripId={trip.id}
                            selectedPlaces={selectedPlaces}
                            setSelectedPlaces={setSelectedPlaces}
                        />
                    )}

                    {activeTab === "plan" && (
                        <PlanTab
                            trip={trip}
                            selectedPlaces={selectedPlaces}
                        />
                    )}

                    {activeTab === "budget" && (
                        <BudgetTab />
                    )}

                    {activeTab === "checklist" && (
                        <ChecklistTab />
                    )}
                </div>
            </div>
        </div>
    );
}

export default TripDetail;

