import {Movie, Genre, Type, MovieListItem} from '../models/models.ts'
import * as uuid from 'uuid';
import path from 'path'


class MovieController{
    async create(req, res){
        try{
            const {name, year, duration, description, typeId, genreId, trailer, banner_trailer } = req.body;
            console.log(req.body)
            const {name_image, banner_image} = req.files;

            let name_image_filename = uuid.v4()+".jpg";
            let banner_image_filename = uuid.v4()+".jpg";
            name_image.mv(path.resolve(__dirname, '..','..', 'static','name_images', name_image_filename))
            banner_image.mv(path.resolve(__dirname, '..', '..', 'static', 'banner_images', banner_image_filename))
            console.log(banner_image_filename)

            const newMovie = await Movie.create({name:name, year:year, description:description, duration:duration, name_img:name_image_filename, banner_img:banner_image_filename, typeId:typeId, genreId:genreId, trailer:trailer, banner_trailer:banner_trailer});
            return res.json(newMovie)
        }
        catch (e){
            return res.status(500).json(e);
        }

    }

    async getAll(req,res){
        try{
            const types = await Movie.findAll();
            return res.json(types);
        }
        catch (e){
            return res.status(500).json(e);
        }

    }

    async getOne(req,res){
        try{
            const {id} = req.params;
            const movie = await Movie.findOne({
                where:{id},
                include: [{model: Genre, as: 'genre',},
                    {model:Type, as:'type'}],

            });
            return res.json(movie);
        }
        catch (e){
            return res.status(500).json(e);
        }

    }



}

export default new MovieController();