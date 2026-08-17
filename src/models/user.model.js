import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { ProfileModel } from "./profile.model.js";

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
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "Profile",
        key: "id",
      },
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
UserModel.belongsTo(ProfileModel, { foreignKey: "profile_id", as: "owner"});
ProfileModel.hasOne(UserModel, { foreignKey: "profile_id", as: "user", onDelete: 'CASCADE'});