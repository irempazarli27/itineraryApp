import { pool } from "../config/db";

interface CreatePlaceData {
    trip_id: number;
    name: string;
    category: string;
    rating: number;
    duration: string;
    latitude: number;
    longitude: number;
}

export async function createPlace(data: CreatePlaceData) {
    const result = await pool.query(
        `
            INSERT INTO places ("trip_id", name, category, rating, duration, latitude, longitude)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
        `,
        [
            data.trip_id,
            data.name,
            data.category,
            data.rating,
            data.duration,
            data.latitude,
            data.longitude,
        ]
    );
    return result.rows[0];
}

export async function getPlacesByTripId(tripId: number) {
    const result = await pool.query(
        `
            SELECT * FROM places WHERE "trip_id" = $1 ORDER BY id
        `,
        [tripId]
    );
    return result.rows;
}

export async function deletePlace(id: number) {
    const result = await pool.query(
        `
            DELETE FROM places WHERE id = $1 RETURNING *
        `,
        [id]
    );
    return result.rows[0];
}