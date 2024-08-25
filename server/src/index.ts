import express, {Request, Response} from 'express';
import dotenv from "dotenv"
const models = require('./models/models')
import cors from 'cors'
import router from './routes/index.ts'
import fileUpload from 'express-fileupload';
dotenv.config();

const port = process.env.PORT
import {sequelize} from './db.ts'
import rouer from './routes/index.ts'

const app = express();

app.use(cors())
app.use(express.json());
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
