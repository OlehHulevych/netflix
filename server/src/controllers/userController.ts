import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ApiError from "../../error/ApiError.ts";
import {User, Basket} from '../models/models.ts'

class UserController {
    async registratoin(req,res, next){
        const {email, name, password} = req.body;
        if(!email || !password){
            return next(ApiError.badRequest("Bad password or email"));
        }
        const candidate = User.findOne({where:{email}});
        if(candidate){
            return next(ApiError.badRequest("The user with this email has already existed"));
        }
        const cryptedPassword= bcrypt.hash(password, 5);
        const user:any = User.create({email, name, password:cryptedPassword});
        const movieList = Basket.create({userId:user.id})
        const token = jwt.verify(user.id, user.email);

    }
}