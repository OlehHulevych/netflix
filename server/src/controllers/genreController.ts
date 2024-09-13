import {Genre} from '../models/models.ts'


class GenreController{
    async create(req, res){
        const {name} = req.body;
        const newType = await Genre.create({name});
        return res.json(newType)
    }

    async getOne(req,res){
        const {id} = req.params;
        const selectedGenre = await Genre.findOne({where:{id}});
        return res.json(selectedGenre);
    }

    async getAll(req,res){
        const types = await Genre.findAll();
        return res.json(types);
    }
}

export default new GenreController();