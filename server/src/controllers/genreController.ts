import {Genre} from '../models/models'


class GenreController{
    async create(req:any, res:any){
        try{
            const {name} = req.body;
            const newType = await Genre.create({name});
            return res.json(newType)
        }
        catch (e){
            return res.status(500).json(e);
        }

    }

    async getOne(req:any,res:any){
        try{
            const {id} = req.params;
            const selectedGenre = await Genre.findOne({where:{id}});
            return res.json(selectedGenre);
        }
        catch (e){
            return res.status(500).json(e)
        }
    }

    async getAll(req:any,res:any){
        try{
            const types = await Genre.findAll();
            return res.json(types);
        }
        catch (e){
            return res.status(500).json(e);
        }

    }
}

export default new GenreController();