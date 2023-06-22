import { getPassengersRepositorie } from "../repositories/passengers.repositorie.js";

export async function passengersService(page) {


    if (isNaN(Number(page)) || Number(page) <= 0)
        return null;

    const passengers = await getPassengersRepositorie(page);

    if (passengers.rowCount > 100)
        throw new Error("Too many results");

    return passengers;
}