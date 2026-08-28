import { body, param } from "express-validator";

export const createTaskValidation = [
    body("tittle").notEmpty().withMessage("EL título no puede estar vacío").isLength({max: 100}),
    body("description").notEmpty().withMessage("La descripción no puede estar vacío").isLength({max: 300}),
    body("userId").notEmpty().withMessage()
]

export const getAllTasksValidation = [
    body("tittle").notEmpty(),
    body("description").notEmpty(),
    body("userId").notEmpty()
]

export const getTaskByIdValidation = [
    body("tittle").notEmpty(),
    body("description").notEmpty(),
    body("userId").notEmpty()
]

export const updateTaskByIdValidation = [
    body("tittle").notEmpty(),
    body("description").notEmpty(),
    body("userId").notEmpty()
]

export const deleteTaskByIdValidation = [
    body("tittle").notEmpty(),
    body("description").notEmpty(),
    body("userId").notEmpty()
]