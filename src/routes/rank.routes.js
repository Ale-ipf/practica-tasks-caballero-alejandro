import { Router } from "express";
import { getAllRanks, getRankById, createRank, deleteRankById, updateRankById } from "../controllers/rank.controller.js";
import { createRankValidation, deleteRankByIdValidation, getAllRanksValidation, updateRankByIdValidation } from "../middlewares/validations/rank.validation.js";
import { validate } from "../middlewares/validate.js";

export const routesRank = Router();

RankRouter.post("/ranks", createRankValidation, validate, createRank);
RankRouter.get("/ranks",getAllRanksValidation, validate ,getAllRanks);
RankRouter.get("/ranks/:id", getAllRanksValidation, validate, getRankById); 
RankRouter.put("/ranks/:id", updateRankByIdValidation, validate,updateRankById);
RankRouter.delete("/ranks/:id", deleteRankByIdValidation, validate, deleteRankById);