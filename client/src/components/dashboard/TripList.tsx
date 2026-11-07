import { Link } from "react-router-dom";

interface Trip {
    id: number;
    title: string;
    city: string;
    startDate: string;
    endDate: string;
    budget: number;
}

interface TripListProps {
    trips: Trip[];
}

function TripList({ trips }: TripListProps) {
    if (trips.length === 0) {
        return (
            <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Seyahatlerim</h2>

                <p className="mt-4 text-slate-500">
                    Henüz oluşturulmuş bir seyahat yok.
                </p>
            </div>
        )
    }

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">
                Seyahatlerim
            </h2>

            <div className="space-y-4">
                {trips.map((trip) => (
                    <Link
                        key={trip.id}
                        to={`/trips/${trip.id}`}
                        className="block rounded-2xl border border-slate-200 p-4 transition hover:border-indigo-500 hover-shadow-sm"
                    >
                        <h3 className="text-lg font-semibold">
                            {trip.title}
                        </h3>

                        <p className="text-slate-500">
                            📍 {trip.city}
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                            {trip.startDate} - {trip.endDate}
                        </p>

                        <p className="mt-2 font-medium text-blue-600">
                            ₺{trip.budget}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TripList;