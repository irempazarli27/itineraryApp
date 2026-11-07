import { Request, Response } from "express";

import {
    createPlaceService,
    getPlacesService,
    deletePlaceService,
} from "../services/placeService";

export async function createPlace(
    req: Request,
    res: Response
) {
    try {
        const place = await createPlaceService(req.body);

        res.status(201).json(place);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message:"Yer eklenemedi.",
        });
    }
}

export async function getPlaces(
    req: Request,
    res: Response
) {
    try {
        const tripId = Number(req.params.tripId);
        const places = await getPlacesService(tripId);

        res.json(places);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Yerler getirilemedi.",
        });
    }
}

export async function deletePlace(
    req: Request,
    res: Response
) {
    try {
        const id = Number(req.params.id);
        const place = await deletePlaceService(id);

        res.json(place);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Yer silinemedi.",
        });
    }
}