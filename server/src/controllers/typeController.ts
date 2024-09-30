import {Type} from '../models/models'


class TypeController{
    async create(req:any, res:any){
        try{
            const {name} = req.body;
            const newType = await Type.create({name});
            return res.json(newType)
        }
        catch (e){
            return res.json(e);
        }

    }

    async getAll(req:any,res:any){
        try{
            const types = await Type.findAll();
            return res.json(types);
        }
        catch (e){
            return res.status(500).json(e);
        }

    }
}

export default new TypeController();