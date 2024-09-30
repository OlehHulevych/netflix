import {Sequelize} from "sequelize";
import dotenv from "dotenv"
dotenv.config();



// @ts-ignore
export const sequelize = new Sequelize(
    process.env.POSTGRES_URL || '', // Your connection string
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // This ensures SSL connection
            },
        },
    }
);