import { useEffect, useState } from "react";

import Card from "../common/Card";
import DayCard from "./DayCard";

import type { Day } from "../../types/day";
import type { Place } from "../../types/place";
import type { Trip } from "../../types/trip";

import { createDays } from "../../helpers/createDays";

interface PlanTabProps {
    trip?: Trip;
    selectedPlaces: Place[];}

function PlanTab({ 
    trip,
    selectedPlaces,
}: PlanTabProps) {
    const [days, setDays] = useState<Day[]>([]);

    useEffect(() => {
        setDays(
            createDays(
                trip.startDate,
                trip.endDate
            )
        );
    }, [trip.startDate, trip.endDate]);

    return (
        <Card>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">
                        📅 Günlük Plan
                    </h2>

                    <p className="mt-2 text-slate-500">
                        Tarih seçtiğinde günler otomatik oluşur.
                    </p>
                </div>
            </div>

            <div className="mt-8 space-y-6">
                {days.length === 0 ? (
                    <div className="rounded-2xl bg-slate-100 text-center text-slate-500">
                        Önce seyahat tarihini seç.
                    </div>
                ) : (
                  days.map((day) => (
                    <DayCard 
                      key={day.id} 
                      day={day} 
                      selectedPlaces={selectedPlaces}
                    />
                  ))
                )}
            </div>
        </Card>
    );
}

export default PlanTab;