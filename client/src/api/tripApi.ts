const API_URL = "http://localhost:5001/api/trips";

export async function getTrips() {
    const response = await fetch(API_URL);

    if(!response.ok) {
        throw new Error("Seyahatler alınamadı");
    }

    return response.json();
}

export async function createTrip(data: {
    title: string;
    city: string;
    startDate: string;
    endDate: string;
    budget: number;
}) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if(!response.ok) {
        throw new Error("Seyahat oluşturulamadı");
    }

    return response.json();
}

export async function getTrip(id: number) {
    const response = await fetch(`${API_URL}/${id}`);

    if(!response.ok) {
        throw new Error("Seyahat bulunamadı.");
    }

    return response.json();
}