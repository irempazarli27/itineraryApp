import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function CreateTripCard() {
    return (
        <Link
            to="/trips/new"
            className="flex min-h-60 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-indigo-300 bg-indigo-50 transition hover:scale-[1.02] hover:bg-indigo-100">
                <Plus size={48} className="text-indigo-600" />

                <h2 className="mt-4 text-2xl font-semibold">
                    Yeni Seyahat Oluştur
                </h2>

                <p className="mt-2 text-slate-500">
                    Yeni rotanı planlamaya başla.
                </p>
            </Link>
    )
}

export default CreateTripCard;