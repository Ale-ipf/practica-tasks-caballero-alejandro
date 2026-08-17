import { Router } from "express";
import { getAllUserRanks, createUserRank } from "../controllers/rank_user.controller.js";

export const routerRankUser = Router();

routerRankUser.get("/user-ranks", getAllUserRanks);
routerRankUser.post("/user-ranks", createUserRank);