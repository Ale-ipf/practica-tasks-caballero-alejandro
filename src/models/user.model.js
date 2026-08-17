import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { ProfileModel } from "./profile.model.js";
//import { PersonModel } from "./person.model.js";

export const UserModel = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    // Other model options go here
    // createdAt: "created_at",
    // updatedAt: false,
    timestamps: false,
  },
);

// relaciones
// relacion uno a uno
//UserModel.belongsTo(PersonModel, { foreignKey: "person_id", as: "owner" });
//PersonModel.hasOne(UserModel, { foreignKey: "person_id", as: "user" });
UserModel.hasOne(ProfileModel, { foreignKey: "user_id", as: "owner"});
ProfileModel.belongsTo(UserModel, { foreignKey: "user_id", as: "user", onDelete: 'CASCADE'});