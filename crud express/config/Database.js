import { Sequelize } from "Sequelize";

const db = new Sequelize ("db_product", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;