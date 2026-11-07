type TabType =
    | "places"
    | "plan"
    | "budget"
    | "checklist";

interface TripTabsProps {
  activeTab: TabType;
  setActiveTab: React.Dispatch<
    React.SetStateAction<TabType>
  >;
}

    const tabs = [
        { 
            id: "places",
            label: "📍 Yerler",
        },
        {
            id: "plan",
            label: "📅 Plan",
        },
        {
            id: "budget",
            label: "💰 Bütçe",
        },
        {
            id: "checklist",
            label: "✔ Checklist",
        },
    ] as const;

    function TripTabs({
        activeTab,
        setActiveTab,
    }: TripTabsProps) {
        return (
            <div className="mb-6 flex gap-3 overflow-x-auto rounded-2xl bg-white p-2 shadow-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`rounded-xl px-5 py-3 text-sm font-medium transition ${
                            activeTab === tab.id
                                ? "bg-indigo-600 text-white"
                                : "text-slate-600 hover:bg-slate-100"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        )
}

export default TripTabs;