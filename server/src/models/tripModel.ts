import { pool } from "../config/db";

export interface CreateTripData {
    title: string;
    city: string;
    startDate: string;
    endDate: string;
    budget: number;
}

export async function createTrip(data: CreateTripData) {
    const query = `
        INSERT INTO trips 
          (title, city, start_date, end_date, budget)
        VALUES 
          ($1, $2, $3, $4, $5)
        RETURNING *
    `;

    const values = [
        data.title,
        data.city,
        data.startDate,
        data.endDate,
        data.budget,
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
}

export async function getAllTrips() {
    const result = await pool.query(`
        SELECT * 
        FROM trips
        ORDER BY start_date DESC
        `);

    return result.rows;
}

export async function getTripById(id: number) {
    const result = await pool.query(`
        SELECT * 
        FROM trips
        WHERE id = $1
    `, [id]);

    return result.rows[0];
}