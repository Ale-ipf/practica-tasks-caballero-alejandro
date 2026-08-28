export const createRankValidation = [
    body("name").notEmpty(),
    body("description").notEmpty(),
    body("level").notEmpty()
]

export const getAllRanksValidation = [
    body("name").notEmpty(),
    body("description").notEmpty(),
    body("level").notEmpty()
]

export const getRankByIdValidation =[
    body("name").notEmpty(),
    body("description").notEmpty(),
    body("level").notEmpty()
]

export const updateRankByIdValidation = [
    body("name").notEmpty(),
    body("description").notEmpty(),
    body("level").notEmpty()
]

export const deleteRankByIdValidation = [
    body("name").notEmpty(),
    body("description").notEmpty(),
    body("level").notEmpty()
]