import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ApiError from "../../error/ApiError.ts";
import {User, ListMovies} from '../models/models.ts'
import { Request, Response, NextFunction } from 'express';

 class UserController {

    async registration(req:Request,res:Response, next:NextFunction){
        try{
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

            const movieList = await ListMovies.create({userId:user.id})

            const token = jwt.sign({id:user.id, email:user.email, name:user.name}, process.env.JWT_SECRET_KEY, {expiresIn: '168h'} );
            res.json({token:token})
        }
        catch (e){
            console.log(e)
        }


    }

    async login(req:Request,res:Response,next:NextFunction){
       try{
           const {email, password,role} = req.body;
           const user:any = await User.findOne({where:{email}})
           if(!user){
               return res.json({message:"User not found"})
           }
           let comparePassword = bcrypt.compareSync(password, user.password);
           if(!comparePassword){
               return res.json({message:"Wrong Password"})
           }
           const token = jwt.sign({id:user.id, name:user.name, password:user.password, role:role}, process.env.JWT_SECRET_KEY, {expiresIn:'168h'});
           return res.json({token:token});
       }
       catch (e){
           console.log(e);
       }

    }

    async check(req,res:Response){
       try{
           const token = jwt.sign({id:req.user.id, name:req.user.name, password:req.user.password}, process.env.JWT_SECRET_KEY, {expiresIn:'168h'});
           return res.json({token});
       }
       catch(e){
           console.log(e);
       }
    }


    async getOne(req,res){
        try{
            console.log(req.params)
            const id = req.params.id
            const user = await User.findOne({where:{id}})
            return res.json({user:user});
        }
        catch(e){
            console.log(e);
        }
    }


    async checkOne(req,res){
      try{
          const {email} = req.body;
          console.log(email)
          const findUser = await User.findOne({where:{email}});
          if(findUser){
              return res.json({error:"User with this email is already exist"})
          }
          else if(!findUser){
              return res.json({message:"ok"});
          }

      }
      catch (e){
          console.log(e);
      }
    }

    async checkName(req,res){
        try{
            const {name} = req.body;
            const findUser = await User.findOne({where:{name}});
            if(findUser){
                return res.json({error:"This name is used"})
            }
            else{
                return res.json({message:"ok"});
            }
        }
        catch (e){
            console.log(e);
        }
    }

}

export default new UserController

