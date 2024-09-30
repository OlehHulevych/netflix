import {Sequelize} from "sequelize";
import dotenv from "dotenv"
dotenv.config();



// @ts-ignore
export const sequelize = new Sequelize(
    "postgres://default:eyD0tGHm1NEc@ep-shy-hill-a2bkagbz-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require", // Your connection string
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