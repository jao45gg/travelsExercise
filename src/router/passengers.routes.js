import { Router } from "express";
import { getPassengers } from "../controllers/passengers.controller.js";

const passengersRouter = Router();
passengersRouter.get("/passengers/travels", getPassengers);

export default passengersRouter;