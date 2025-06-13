//para añadir rutas al app.js
 
import { Router } from "express";

const router = Router();

router.get('/productos', (req, res) => {
  res.send('Lista de productos');
});


router.get('/productos/:id', (req, res) => {
    res.send('Obteniendo un solo producto');
});


router.post('/productos', (req, res) => {
    res.send('Creando un nuevo producto');
});

router.put('/productos/:id', (req, res) => {
    res.send('Actualizando un producto');   
}
);  

router.delete('/productos/:id', (req, res) => {
    res.send('Eliminando un producto');
});     
