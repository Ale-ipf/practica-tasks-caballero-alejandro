import express from "express";
import { startDB } from "./src/config/database.js";
import { userRouter } from "./src/routes/user.routes.js";
import { taskRouter } from "./src/routes/task.routes.js";
import { profileRouter } from "./src/routes/profile.routes.js";
import { routesRank } from "./src/routes/rank.routes.js";
import { routerRankUser } from "./src/routes/user_rank.routes.js";

const app = express();
const PORT = 3001;

app.use(express.json());

//configuracion de las rutas
app.use("/api", userRouter);
app.use("/api", taskRouter);
app.use("/api", profileRouter);
app.use("/api", routesRank);
app.use("/api", routerRankUser);

app.get("/", (req,res) => {
    res.send('El servidor funciona y las rutas están cargadas');
});

app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo http://localhost:${PORT}`);
});