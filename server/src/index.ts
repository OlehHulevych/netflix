import express, {Request, Response} from 'express';
import dotenv from "dotenv"
import {sequelize} from './db'
const model = require('./models/models')
import path from "path";

import cors from 'cors'
import router from './routes/index'
import fileUpload from 'express-fileupload';
dotenv.config();





const app = express();
app.use(cors({
    origin: 'https://startling-empanada-d42fde.netlify.app',
}));


app.use(express.json());

app.use(express.static(path.join(__dirname, '../static')))

app.use(fileUpload({}));
app.use('/api', router)




app.get("/",(req,res)=>{
    res.json({message:"Hello world"})
})


const start = async ()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(5000, () => console.log(`Server started on port ${5000}`))
    } catch (e) {
        console.log(e)
    }
}

start();
