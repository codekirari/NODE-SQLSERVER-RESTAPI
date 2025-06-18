import { Router } from "express";
import {
    createCita,
    deleteCita, 
    getCita,
    getCitas,
    updateCita
} from "../controllers/cita.controllers.js";
// src/routes/cita.routes.js   

const router = Router();

router.get("/citas", getCitas);

router.get("/citas/:id", getCita);      

router.post("/citas", createCita);

router.put("/citas/:id", updateCita);   

router.delete("/citas/:id", deleteCita);

export default router;
