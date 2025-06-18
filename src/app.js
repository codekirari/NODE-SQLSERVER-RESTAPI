import express from 'express';
import citaRoutes from './routes/cita.routes.js';

const app = express()

app.use(citaRoutes)

export default app;
