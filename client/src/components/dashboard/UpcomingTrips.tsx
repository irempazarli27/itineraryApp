import Card from "../common/Card";

function UpcomingTrips() {
    return (
        <Card title="Yaklaşan Geziler">
            <div className="space-y-4">

                <div className="rounded-xl bg-slate-100 p-4">
                    <h3 className="font-semibold">
                        🇫🇷 Paris
                    </h3>

                    <p className="text-sm text-slate-500">
                        12 Ağustos • 5 gün
                    </p>
                </div>

                <div className="rounded-xl bg-slate-100 p-4">
                    <h3 className="font-semibold">
                        🇮🇹 Roma
                    </h3>

                    <p className="text-sm text-slate-500">
                        20 Ağustos • 4 gün
                    </p>
                </div>

            </div>
        </Card>
    );
}

export default UpcomingTrips;