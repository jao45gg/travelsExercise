import { passengersService } from "../services/passengers.service.js";

export async function getPassengers(req, res) {
    
    try {

        const page = req.query.page;

        const results = await passengersService(page);
        
        if (results === null)
            return res.status(400).send("Invalid page value");

        res.send(results);

    } catch (err) {
        res.status(500).send(err.message);
    }

}