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


const app = express();


app.use(express.json());
app.use(cors({
    origin:'https://netflix-client-gamma.vercel.app',
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,
    optionsSuccessStatus:200

}))
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
        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start();
