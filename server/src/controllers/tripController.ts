import { Request, Response } from "express";
import { createTripService, getTripsService, getTripByIdService } from "../services/tripService";

export async function createTrip(
    req: Request, 
    res: Response
) {
    try {
        const trip = await createTripService(req.body);

        res.status(201).json(trip);
    }   catch (error) { 
        res.status(400).json({
            message:
              error instanceof Error 
                ? error.message 
                : "Bilinmeyen hata",
        });
    }
}

export async function getTrips(req: Request, res: Response) {
    try {
        const trips = await getTripsService();

        res.json(trips);
    } catch {
        res.status(500).json({
            message: "Seyahatler alınamadı",
        });
    }
}

export async function getTripById(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const trip = await getTripByIdService(id);

        if (!trip) {
            return res.status(404).json({
                message: "Seyahat bulunamadı",
            });
        }

        res.json(trip);
    } catch {
        res.status(500).json({
            message: "Hata oluştu",
        });
    }
} 