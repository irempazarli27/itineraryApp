import { Router } from "express";

import { createPlace, getPlaces, deletePlace } from "../controllers/placeController";

const router = Router();

router.post("/", createPlace);
router.get("/:tripId", getPlaces);
router.delete("/:id", deletePlace);

export default router;