const API_URL ="http://localhost:5001/api/places";

import type { Place } from "../types/place";

export async function getPlaces(tripId: number): Promise<Place[]> {
    const response = await fetch(`${API_URL}/${tripId}`);
    
    if (!response.ok) {
        throw new Error("Yerler getirilemedi.");
    }
    return response.json();
}

export async function createPlace(data: Omit<Place, "id"> ) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Yer eklenemedi.");
    }

    return response.json();
}

export async function deletePlace(id: number) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Yer silinemedi.");
    }

    return response.json();
}   