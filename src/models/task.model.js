import { DataTypes } from "sequelize";
import { Sequelize } from "../config/database.js";

export const TaskModel = sequelize.define('Task', {
    title: {
        type: Datatypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    description: {
        tpye: Datatypes.STRING(100),
        allowNull: false,
    },
    isComplete: {
        type: Datatypes.BOOLEAN,
        defaultValue: false,
    },
});