//para añadir rutas al app.js
 
import { Router } from "express";

const router = Router();

// Routes for 'citas' (dates/appointments)
router.get('/citas', (req, res) => {
    res.send('Lista de citas');
});

router.get('/citas/:id', (req, res) => {
    res.send('Obteniendo una sola cita');
});

router.post('/citas', (req, res) => {
    res.send('Creando una nueva cita');
});

router.put('/citas/:id', (req, res) => {
    res.send('Actualizando una cita');
});

router.delete('/citas/:id', (req, res) => {
    res.send('Eliminando una cita');
});


// Queda como getcitas o getproduct op getproducts en el producs.crontrollers.js ?

export const getCitas= (req, res) => {
    res.send('Lista de citas');
}

export const getCitas = (req, res) => {
    res.send('Obteniendo una sola cita');
}

export const createCitas = (req, res) => {
    res.send('Creando una nueva cita');
}

export const updateCitas = (req, res) => {
    res.send('Actualizando una cita');
}

export const deleteCitas = (req, res) => {
    res.send('Eliminando una cita');
}

