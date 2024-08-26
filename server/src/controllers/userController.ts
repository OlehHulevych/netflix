import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ApiError from "../../error/ApiError.ts";
import {User, ListMovies} from '../models/models.ts'
import { Request, Response, NextFunction } from 'express';

 class UserController {

    async registration(req:Request,res:Response, next:NextFunction){
        const {email, name, password,role} = req.body;
        if(!email || !password){
            return next(ApiError.badRequest("Bad password or email"));
        }
        const candidate = await User.findOne({where:{email}});
        if(candidate){
            return next(ApiError.badRequest("The user with this email has already existed"));
        }
        const cryptedPassword= await bcrypt.hash(password, 5);
        const user:any = await User.create({email, name,role, password:cryptedPassword});

        const movieList = ListMovies.create({userId:user.id})
        const token = jwt.sign({id:user.id, email:user.email, name:user.name}, process.env.JWT_SECRET_KEY, {expiresIn: '168h'} );
        res.json(token)

    }

    async login(req:Request,res:Response,next:NextFunction){
        const {email, password} = req.body;
        const user:any = await User.findOne({where:{email}})
        if(!user){
            return next(ApiError.internal("Wrong password"));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return next(ApiError.internal("Wrong password"));
        }
        const token = jwt.sign({id:user.id, name:user.name, password:user.password}, process.env.JWT_SECRET_KEY, {expiresIn:'168h'});
        return res.json({token});

    }

    async check(req,res:Response){
        const token = jwt.sign({id:req.user.id, name:req.user.name, password:req.user.password}, process.env.JWT_SECRET_KEY, {expiresIn:'168h'});
        return res.json({token});
    }

}

export default new UserController

