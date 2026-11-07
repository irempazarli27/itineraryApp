import { useState } from "react";

import type { Place } from "../types/place";

import MapPanel from "../components/create-trip/MapPanel";
import TripHeader from "../components/create-trip/TripHeader";
import TripTabs from "../components/create-trip/TripTabs";
import PlacesTab from "../components/create-trip/PlacesTab";
import PlanTab from "../components/create-trip/PlanTab";
import BudgetTab from "../components/create-trip/BudgetTab";
import ChecklistTab from "../components/create-trip/ChecklistTab";
import type { Trip } from "../types/trip";
import { defaultTrip } from "../utils/defaultTrip";

function CreateTrip() {
  const [activeTab, setActiveTab] = useState<
    "places" | "plan" | "budget" | "checklist"
  >("places");

  const [selectedPlaces, setSelectedPlaces] = useState<Place[]>([]);

  const [trip, setTrip] = useState<Trip>(defaultTrip);

  return (
    <div className="min-h-screen bg-slate-50">
        <div className="mx-auto flex max-w-7xl gap-6 p-6">
            <div className="w-2/5">
                <MapPanel 
                    selectedPlaces={selectedPlaces}
                />
            </div>

            <div className="flex-1">
                <TripHeader 
                    trip={trip} 
                    setTrip={setTrip}
                />

                <TripTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                {activeTab === "places" && (
                    <PlacesTab
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

export default CreateTrip;