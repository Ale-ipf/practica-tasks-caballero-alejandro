import express from "express";
import { startDB } from "./src/config/database.js";

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req,res) => {
    res.send('El servidor funciona y las rutas están cargadas');
});

app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo http://localhost:${PORT}`);
});