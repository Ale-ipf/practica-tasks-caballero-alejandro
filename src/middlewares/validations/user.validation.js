import { body, param } from "express-validator";

export const createUserValidation = [
  body("name").notEmpty().withMessage("El name no debe ser vacio"),
  body("email")
    .notEmpty()
    .withMessage("El email no debe ser vacio")
    .isEmail()
    .withMessage("El email debe ser valido"),
  body("password").notEmpty().withMessage("La password no debe ser vacia"),
  body("person_id").notEmpty().withMessage("El person_id no debe ser vacio"),
];

const getAllUsersValidation = []

const getUserByIdValidation = [
    body("name").opcional().notEmpty().withMessage("El name no debe ser vacio"),
    body("email").opcional().notEmpty().withMessage("El email no debe ser vacio"),
    body("password").opcional().notEmpty().withMessage("El")
]

export const updateUserValidation = [
  param("id").isLength({max: 5}).withMessage("El id no debe ser mayor a 5 caracteres"),
  body("name").optional().notEmpty().withMessage("El name no debe ser vacio"),
  body("email")
    .notEmpty()
    .withMessage("El email no debe ser vacio")
    .isEmail()
    .withMessage("El email debe ser valido"),
  body("password").notEmpty().withMessage("La password no debe ser vacia"),
  body("person_id").notEmpty().withMessage("El person_id no debe ser vacio"),
];

const deleteUserValidation = [
  body()
]