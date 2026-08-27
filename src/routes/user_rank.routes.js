import { Router } from "express";
import { getAllUserRanks, createUserRank } from "../controllers/rank_user.controller.js";

export const routerRankUser = Router();

RankUserRouter.get("/user-ranks", getAllUserRanks);
RankUserRouter.post("/user-ranks", createUserRank);