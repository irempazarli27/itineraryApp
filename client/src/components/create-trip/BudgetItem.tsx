import type { BudgetItem } from "../types/budget";

interface BudgetItemProps {
    item: BudgetItem;
}

function BudgetItemCard({
    item,
}: BudgetItemProps) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
                <span className="text-3xl">
                    {item.icon}
                </span>

                <div>
                    <h3 className="font-semibold">
                        {item.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                        Tahmini gider
                    </p>
                </div>
            </div>

            <p className="text-lg font-bold text-indigo-600">
                ₺{item.amount.toLocaleString("tr-TR")}
            </p>
        </div>
    )
}

export default BudgetItemCard;