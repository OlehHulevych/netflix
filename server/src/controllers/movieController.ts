import {Movie} from '../models/models.ts'
import * as uuid from 'uuid';
import path from 'path'


class MovieController{
    async create(req, res){
        const {name, year, duration, description, typeId, genreId } = req.body;
        const {name_image, banner_image} = req.files;
        let name_image_filename = uuid.v4()+".jpg";
        let banner_image_filename = uuid.v4()+".jpg";
        name_image.mv(path.resolve(__dirname, '..','..', 'static', name_image_filename))
        banner_image.mv(path.resolve(__dirname, '..', '..', 'static', banner_image_filename))
        console.log(banner_image_filename)

        const newMovie = await Movie.create({name:name, year:year, description:description, duration:duration, name_img:name_image_filename, banner_img:banner_image_filename, typeId:typeId, genreId:genreId});
        return res.json(newMovie)
    }

    async getAll(req,res){
        const types = await Movie.findAll();
        return res.json(types);
    }
}

export default new MovieController();