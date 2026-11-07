import { useEffect, useState } from "react";
import Hero from "../components/dashboard/Hero";
import CreateTripCard from "../components/dashboard/CreateTripCard";
import { getTrips } from "../api/tripApi";
import TripList from "../components/dashboard/TripList";

interface Trip {
    id: number;
    title: string;
    city: string;
    startDate: string;
    endDate: string;
    budget: number;
}

function Dashboard() {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTrips();
    }, []);

    async function loadTrips() {
        try {
            const data = await getTrips();
            setTrips(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="mx-auto max-w-7xl px-8 py-10">
            <Hero />

            <div className="grid gap-6 lg:grid-cols-2">
                <CreateTripCard />

                {loading ? (
                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        Yükleniyor...
                    </div>
                ) : (
                    <TripList trips={trips} />
                )}
            </div>
        </div>
    );
}

export default Dashboard;