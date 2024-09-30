import jwt from 'jsonwebtoken';

export default function(req:any, res:any, next:any){
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(401).json({message:"The user is not authorized"});

        }
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET_KEY|| '');
        req.user = decoded;
        next();
    }
    catch(e){
        res.status(401).json({message:"The user is not authorized"})
    }
}