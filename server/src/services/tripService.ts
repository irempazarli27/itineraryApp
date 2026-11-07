import { createTrip, getAllTrips, CreateTripData } from "../models/tripModel";

export async function createTripService(data: CreateTripData) {
    if( !data.title.trim()) {
        throw new Error("Seyahat adı zorunludur.");
    }

    if( !data.city.trim()) {
        throw new Error("Şehir zorunludur.");
    }
    
    return await createTrip(data);
}

export async function getTripsService() {
    return await getAllTrips();
}

import { getTripById } from "../models/tripModel";

export async function getTripByIdService(id: number) {
    return await getTripById(id);
}