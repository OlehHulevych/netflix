import express, {Request, Response} from 'express';
import dotenv from "dotenv"
const models = require('./models/models')
import cors from 'cors'
dotenv.config();

const port = process.env.PORT
import {sequelize} from './db.ts'

const app = express();

app.use(cors())
app.use(express.json);


app.get('/', (req:Request,res:Response)=>{
    res.send("Hello world")
})

console.log(process.env.DB_PASSWORD)



const start = async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port,()=>{
            console.log("Server is listening");
        })
    }
    catch (err){
        console.log(err);
    }
}

start();
