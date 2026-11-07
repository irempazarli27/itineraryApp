import { useNavigate } from "react-router-dom";
import { createTrip } from "../../api/tripApi";
import type { Trip } from "../../types/trip";

interface TripHeaderProps {
    trip: Trip;
    setTrip: React.Dispatch<React.SetStateAction<Trip>>;
}

function TripHeader({ 
    trip, 
    setTrip,
}: TripHeaderProps) {
    const navigate = useNavigate();

    async function handleSave() {
        try {
            await createTrip({
                title: trip.title,
                city: trip.city,
                startDate: trip.startDate,
                endDate: trip.endDate,
                budget: trip.budget,
            });

            alert("Seyahat başarıyla oluşturuldu!");

            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Seyahat oluşturulamadı.");
        }
    }
    return (
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Yeni Seyahat
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Seyahat bilgilerini girerek planlamaya başlayabilirsiniz.
                    </p>
                </div>

                <button
                    onClick={handleSave}
                    className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
                >
                    Kaydet
                </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                    <label className="mb-2 block font-medium">
                        Seyahat Adı
                    </label>

                    <input
                        type="text"
                        value={trip.title}
                        onChange={(e) => 
                            setTrip({ 
                            ...trip, 
                            title: e.target.value,
                        })
                    }
                    placeholder="Örn. Yaz Tatili"
                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Şehir
                    </label>

                    <input
                        type="text"
                        value={trip.city}
                        onChange={(e) => 
                            setTrip({ 
                            ...trip, 
                            city: e.target.value,
                        })
                    }
                    placeholder="Örn. İstanbul"
                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Başlangıç Tarihi
                    </label>

                    <input
                        type="date"
                        value={trip.startDate}
                        onChange={(e) => 
                            setTrip({ 
                            ...trip, 
                            startDate: e.target.value,
                        })
                    }
                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Bitiş Tarihi
                    </label>

                    <input
                        type="date"
                        value={trip.endDate}
                        onChange={(e) => 
                            setTrip({ 
                            ...trip, 
                            endDate: e.target.value,
                        })
                    }
                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Bütçe
                    </label>

                    <input
                        type="number"
                        value={trip.budget}
                        onChange={(e) => 
                            setTrip({ 
                            ...trip, 
                            budget: Number(e.target.value),
                        })
                    }
                    placeholder="15000"
                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
                    />
                </div>
            </div>
        </div>
    );
}

export default TripHeader;