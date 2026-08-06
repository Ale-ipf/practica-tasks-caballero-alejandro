import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("task_users_db","root","", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

export const startDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: true});
        console.log("La conexión a la DB está lista.");
    } catch (error) {
        console.error("No se pudo conectar a la DB", error);
    }
};