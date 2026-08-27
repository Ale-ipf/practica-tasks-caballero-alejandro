import { Router } from "express";
import { getAllRanks, getRankById, createRank, deleteRankById, updateRankById } from "../controllers/rank.controller.js";

export const routesRank = Router();

RankRouter.get("/ranks", getAllRanks);
RankRouter.get("/ranks/:id", getRankById); 
RankRouter.post("/ranks", createRank);
RankRouter.put("/ranks/:id", updateRankById);
RankRouter.delete("/ranks/:id", deleteRankById);