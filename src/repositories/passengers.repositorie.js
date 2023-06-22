import connection from "../database/database.js";

export async function getPassengersRepositorie(page) {
    return connection.query(`SELECT "fullName", COUNT("passengerId") as travels
                             FROM passengers JOIN passenger_travels ON id = passenger_travels."passengerId" 
                             GROUP BY "fullName" OFFSET ($1 - 1) * 25 LIMIT 25`, [page]);
}