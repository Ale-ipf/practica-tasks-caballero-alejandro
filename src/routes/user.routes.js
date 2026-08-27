import { Router } from "express";
import { createUserValidation, updateUserValidation } from "../middlewares/validations/user.validation.js";
import { createUser,deleteUser,getAllUsers,
  getUserById,updateUser } from "../controllers/user.controller.js";
import { body } from "express-validator";
import { validate } from "../middlewares/validate.js";

export const userRouter = Router();

userRouter.post("/users", createUserValidation, validate, createUser);//post /api/users
userRouter.get("/users", getAllUsers);//get  /api/users
userRouter.get("/users/:id", getUserById);//get  /api/users/:id
userRouter.put("/users/:id", updateUserValidation, validate ,updateUser);//put  /api/users/:id
userRouter.delete("/users/:id", deleteUser);//delete /api/users/:id