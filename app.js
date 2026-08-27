import express from "express";
import { startDB } from "./src/config/database.js";
import { userRouter } from "./src/routes/user.routes.js";
import { taskRouter } from "./src/routes/task.routes.js";
import { profileRouter } from "./src/routes/profile.routes.js";
import { RankRouter } from "./src/routes/rank.routes.js";
import { RankUserRouter } from "./src/routes/user_rank.routes.js";

const app = express();
const PORT = 3001;

//Para que entienda el formato json
app.use(express.json());

//configuracion de las rutas
app.use("/api", userRouter);
app.use("/api", taskRouter);
app.use("/api", profileRouter);
app.use("/api", RankRouter);
app.use("/api", RankUserRouter);

app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo http://localhost:${PORT}`);
});