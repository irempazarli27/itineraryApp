import { useState } from "react";

import Card from "../common/Card";
import ChecklistItemCard from "./ChecklistItem";

import { dummyChecklist } from "../../utils/dummyChecklist";

function ChecklistTab() {
    const [items, setItems] = useState(dummyChecklist);

    const toggleItem = (id: number) => {
        setItems(
            items.map((item) =>
                item.id === id
                    ? { 
                        ...item, 
                        completed: !item.completed, 
                      }
                    : item
            )
        );
    };

    const completedCount = items.filter(
        (item) => item.completed
    ).length;

    return (
        <Card>
            <h2 className="text-2xl font-semibold">
               ✅ Checklist
            </h2>

            <p className="mt-2 text-slate-500">
               Seyahatten önce yapılacakları takip et.
            </p>

            <div className="mt-8 space-y-4">
                {items.map((item) => (
                    <ChecklistItemCard
                        key={item.id}
                        item={item}
                        onToggle={toggleItem}
                    />
                ))}
            </div>

            <div className="mt-8 rounded-2xl bg-green-600 p-6 text-white">
                <p className="text-sm opacity-80">
                    Tamamlanan Görevler
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                    {completedCount} / {items.length}
                </h3>
            </div>
        </Card>
    )
}

export default ChecklistTab;

