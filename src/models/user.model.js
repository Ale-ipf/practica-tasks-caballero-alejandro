import { DataTypes } from "sequelize";
import { Sequelize } from "../config/database.js";

export const UserModel = sequelize.define('User', {
    name: {
        type: Datatypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    email: {
        tpye: Datatypes.STRING(100),
        allowNull: false,
    },
    password: {
        type: Datatypes.STRING(100),
        defaultValue: false,
    },
});