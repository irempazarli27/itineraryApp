import Card from "../common/Card";

import BudgetItemCard from "./BudgetItem";

import { dummyBudget } from "../../utils/dummyBudget";

function BudgetTab() {
    const total = dummyBudget.reduce(
        (sum, item) => sum + item.amount, 
        0
    );

    return (
        <Card>
            <h2 className="text-2xl font-semibold">
                💰 Bütçe
            </h2>

            <p className="mt-2 text-slate-500">
                Seyahat giderlerini takip et.
            </p>

            <div className="mt-8 space-y-4">
                {dummyBudget.map((item) => (
                    <BudgetItemCard 
                        key={item.id} 
                        item={item} 
                    />
                ))}
            </div>

            <div className="mt-8 rounded-2xl bg-indigo-600 p-6 text-white">
                <p className="text-sm opacity-80">
                    Toplam Tahmini Bütçe
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                    ₺{total.toLocaleString("tr-TR")}
                </h3>
            </div>
        </Card>
    )
}    

export default BudgetTab;