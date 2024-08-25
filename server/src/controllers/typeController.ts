import {Type} from '../models/models.ts'


class TypeController{
    async create(req, res){
        const {name} = req.body;
        const newType = await Type.create({name});
        return res.json(newType)
    }

    async getAll(req,res){
        const types = await Type.findAll();
        return res.json(types);
    }
}

export default new TypeController();