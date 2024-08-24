import {Movie} from '../models/models.ts'
import uuid from 'uuid'
import path from 'path'


class MovieController{
    async create(req, res){
        const {name, year, duration, description} = req.body;
        const {name_image, banner_image} = req.files;
        let name_image_filename =uuid.v4()+".jpg";
        let banner_image_filename = uuid.v4()+".jpg";
        name_image.mv(path.resolve(__dirname, '....', 'static', name_image_filename))
        banner_image.mv(path.resolve(__dirname, '....', 'static', banner_image_filename))

        const newType = await Movie.create({name, year});
        return res.json(newType)
    }

    async getAll(req,res){
        const types = await Movie.findAll();
        return res.json(types);
    }
}

module.exports = new MovieController();