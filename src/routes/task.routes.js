import { Router } from "express";
import { createTask, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from "../controllers/task.controller.js";
import { validate } from "../middlewares/validate.js";
import { createTaskValidation, getAllTasksValidation, getTaskByIdValidation, updateTaskByIdValidation } from "../middlewares/validations/task.validation.js";

export const taskRouter = Router();

taskRouter.post("/tasks", createTaskValidation,validate,createTask);
taskRouter.get("/tasks", getAllTasksValidation, validate,getAllTasks);
taskRouter.get("/tasks/:id", getTaskByIdValidation, validate, getTaskById);
taskRouter.put("/tasks/:id", updateTaskByIdValidation, validate, updateTaskById);
taskRouter.delete("/tasks/:id", updateTaskByIdValidation, validate, deleteTaskById);