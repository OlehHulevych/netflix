import {Genre} from '../models/models.ts'


class GenreController{
    async create(req, res){
        try{
            const {name} = req.body;
            const newType = await Genre.create({name});
            return res.json(newType)
        }
        catch (e){
            return res.status(500).json(e);
        }

    }

    async getOne(req,res){
        try{
            const {id} = req.params;
            const selectedGenre = await Genre.findOne({where:{id}});
            return res.json(selectedGenre);
        }
        catch (e){
            return res.status(500).json(e)
        }
    }

    async getAll(req,res){
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