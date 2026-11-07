import {
    createPlace,
    getPlacesByTripId,
    deletePlace,
} from "../models/placeModel";

export async function createPlaceService(data: any) {
    return await createPlace(data);
}

export async function getPlacesService(tripId: number) {
    return await getPlacesByTripId(tripId);
}

export async function deletePlaceService(id: number) {
    return await deletePlace(id);
}