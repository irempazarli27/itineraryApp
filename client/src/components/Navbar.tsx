function Navbar() {
    return (
        <header className="h-16 border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                <h1 className="text-xl font-bold text-blue-600">
                Itinerary App
                </h1>

                <div className="flex items-center gap-4">
                    <button className="rounded-full bg-gray-100 px-3 py-2">
                      🔔 
                    </button>

                    <button className="rounded-full bg-gray-100 px-3 py-2">
                      👤 
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;