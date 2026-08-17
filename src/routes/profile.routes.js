import { Router } from "express";
import { createProfile, deleteProfileById, getAllProfiles, getProfileById, updateProfileById } from "../controllers/profile.controller.js";

export const profileRouter = Router();

profileRouter.post("/tasks", createProfile);
profileRouter.get("/tasks", getAllProfiles);
profileRouter.get("/tasks/:id", getProfileById);
profileRouter.put("/tasks/:id", updateProfileById);
profileRouter.delete("/tasks/:id", deleteProfileById);