import {Movie} from '../models/models.ts'
import * as uuid from 'uuid';
import path from 'path'


class MovieController{
    async create(req, res){
        const {name, year, duration, description} = req.body;
        const {name_image, banner_image} = req.files;
        let name_image_filename = uuid.v4()+".jpg";
        let banner_image_filename = uuid.v4()+".jpg";
        name_image.mv(path.resolve(__dirname, '..','..', 'static', name_image_filename))
        banner_image.mv(path.resolve(__dirname, '..', '..', 'static', banner_image_filename))

        const newMovie = await Movie.create({name, year, description, duration, name_image:name_image_filename, banner_image:banner_image_filename});
        return res.json(newMovie)
    }

    async getAll(req,res){
        const types = await Movie.findAll();
        return res.json(types);
    }
}

export default new MovieController();