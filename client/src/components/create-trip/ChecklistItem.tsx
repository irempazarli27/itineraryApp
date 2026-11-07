import type { ChecklistItem } from "../types/checklist";

interface ChecklistItemProps {
    item: ChecklistItem;
    onToggle: (id: number) => void;
}

function ChecklistItemCard({
    item,
    onToggle,
}: ChecklistItemProps) {
    return (
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
                <input 
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => onToggle(item.id)}
                    className="h-5 w-5"
                />

                <p
                    className={`${
                        item.completed
                            ? "text-slate-400 line-through"
                            : "text-slate-800"
                    }`}
                >
                    {item.title}
                </p>
            </div>
        </div>
    );
}

export default ChecklistItemCard;