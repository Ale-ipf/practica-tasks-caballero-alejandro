import { where } from "sequelize";
import { TaskModel } from "../models/task.model.js";
import { UserModel } from "../models/user.model.js";
import { matchedData } from "express-validator";

export const createUser = async (req, res) => {
  try {
    const validatedData = matchedData(req);
    const user = await UserModel.create(validatedData);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};


export const getAllUsers = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: {
        model: User,
        as: "author",
        attributes: { exclude: ["password"] }
      }
    });

    return res.json({
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al obtener las tareas" });
  }
};


export const getUserById = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id) || Number(id) <= 0) {
    return res.status(400).json({ msg: "El id debe ser un número positivo" });
  }

  try {
    const task = await Task.findByPk(id, {
      include: {
        model: User,
        as: "author",
        attributes: { exclude: ["password"] }
      }
    });

    if (!task) {
      return res.status(404).json({ msg: "No se encontró la tarea" });
    }

    return res.status(200).json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error al obtener la tarea" });
  }
};
export const updateUser = async (req, res) => {
  try {
    const validatedDataBody = matchedData(req, {locations:["body"]});
    const validatedDataParams = matchedData(req, {locations: ["params"]})

    const userExist = await UserModel.findByPk(id)
    
    if(!userExist){
      return res.status(404).json({message: "Usuario no encontrado"})
    }
    

    const user = await UserModel.create(validatedData);
    console.log(validatedData);
    return res.status(201).json({message: "Usuario editado correctamente"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const task = await UserModel.findByPk(id);
        if(!user){
            return res.status(404).json({message:"No se encontro la tarea"})
        }
        await UserModel.destroy({where:{id}});
        return res.status(200).json({
            msg:"Usuario eliminado correctamente"})
    } catch (error) {
        console.log(error);S
        return res.status(500).json({
            msg:"No se pudo eliminar la tarea"
        })
    }



}
