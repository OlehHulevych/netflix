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
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    optionsSuccessStatus: 200
}));


app.use(express.json());

app.use(express.static(path.join(__dirname, '../static')))

app.use(fileUpload({}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://startling-empanada-d42fde.netlify.app'); // Set the specific origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true'); // Ensure credentials are allowed
    next();
});

// Handle preflight OPTIONS requests
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://startling-empanada-d42fde.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    return res.sendStatus(200); // Respond OK for preflight requests
});
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
