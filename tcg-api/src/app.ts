import express, { Application } from "express";
import cardRoute from './routes/CardRoute';
import setRoute from './routes/SetRoute';
import cors from 'cors';


const app: Application = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173" // Cambia esto si el frontend está en otro dominio
}));
app.use("/api/cards",cardRoute);
app.use("/api/sets",setRoute);

app.listen(PORT,() => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });