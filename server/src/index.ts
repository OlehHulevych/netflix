import express, {Request, Response} from 'express';
import dotenv from "dotenv"
const model = require('./models/models.ts')
import path from "path";

import cors from 'cors'
import router from './routes/index.ts'
import fileUpload from 'express-fileupload';
dotenv.config();

const port = process.env.PORT
import {sequelize} from './db.ts'
import rouer from './routes/index.ts'

const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, '../static')))

app.use(fileUpload({}));
app.use('/api', router)


const start = async ()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start();
