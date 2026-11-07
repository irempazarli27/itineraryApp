import { useState } from "react";
import Button from "../common/Button";
import type { Day } from "../../types/day";
import type { Place } from "../../types/place";

interface DayCardProps {
    day: Day;
    selectedPlaces: Place[];
}

function DayCard({ 
    day,
    selectedPlaces
}: DayCardProps) {
    const [activities, setActivities] = useState<Activity[]>(day.activities);
    const [showAddActivity, setShowAddActivity] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState("");

    const addActivity = () => {
        if (selectedPlace) return;

        const place = selectedPlaces.find((p) => p.name === selectedPlace);

        if (!place) return;

        const newActivity: Activity = {
            id: Date.now(),
            place: place.name,
            time: "09:00",
            category: place.category,
        };

        setActivities([...activities, newActivity]);

        setSelectedPlace("");
        setShowAddActivity(false);
    };

    return (
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-semibold">
                        {day.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                        {day.date}
                    </p> 
                </div>

                <Button>
                    + Aktivite
                </Button>
            </div> 

            {showAddActivity && (
                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <h4 className="font-semibold">
                        Aktivite Ekle
                    </h4>

                    <select
                        value={selectedPlace}
                        onChange={(e) => setSelectedPlace(e.target.value)}
                        className="mt-4 w-full rounded-xl border border-slate-300 p-3"
                    >
                        <option value="">
                            Yer Seç
                        </option>

                        {selectedPlaces.map((place) => (
                            <option 
                              key={place.id}
                              value={place.name}
                            >
                                {place.name}
                            </option>
                        ))}
                    </select>

                    <div className="mt-4 flex gap-3">
                        <Button onClick={addActivity}>
                            Kaydet
                        </Button>

                        <Button
                            variant="secondary"
                            onClick={() => setShowAddActivity(false)}
                        >
                            İptal
                        </Button>
                    </div>
                </div>
            )}

            <div className="mt-6 space-y-3">
                {activities.length === 0 ? (
                    <div className="rounded-xl bg-slate-100 p-5 text-center text-slate-500">
                        Henüz aktivite eklenmedi.
                    </div>
                ) : (
                    activities.map((activity) => (
                        <div 
                          key={activity.id}
                          className="flex items-center justify-between rounded-xl bg-slate-100 p-4"
                        >
                            <div>
                                <p className="font-medium">
                                    🕘 {activity.time}
                                </p>

                                <p className="text-sm text-slate-500">
                                    {activity.place}
                                </p>
                            </div>

                            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs text-indigo-700">
                                {activity.category}
                            </span>
                        </div>
                    ))
                )}
                
            </div>
        </div>
    );
}

export default DayCard;