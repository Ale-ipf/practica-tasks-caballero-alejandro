import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./user.model.js";
import { Rank } from "./rank.model.js";

export const RankUser = sequelize.define(
    "UserRank", {
    userId: { 
        type: DataTypes.INTEGER,
        primaryKey: true ,
        allowNull: false },
    rankId: { 
        type: DataTypes.INTEGER,
        primaryKey: true ,
        allowNull: false },
},
{
    timestamps: false
}
);

Rank.belongsToMany(UserModel, { through: RankUser, foreignKey: 'rankId', as: 'users' });
UserModel.belongsToMany(Rank, { through: RankUser, foreignKey: 'userId', as: 'ranks' });