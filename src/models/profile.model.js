import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const ProfileModel = sequelize.define(
  'Profile',
  {
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
    biografia: {
      type: DataTypes.TEXT
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