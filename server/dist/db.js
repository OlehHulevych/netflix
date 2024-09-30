"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// @ts-ignore
exports.sequelize = new sequelize_1.Sequelize("postgres://default:eyD0tGHm1NEc@ep-shy-hill-a2bkagbz-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require", // Your connection string
{
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // This ensures SSL connection
        },
    },
});
