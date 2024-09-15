import {ListMovies, MovieListItem} from "../models/models.ts";

 class ListMoviesController{
    async getAll(req,res){
        try{
            const result = await ListMovies.findAll();
            res.json(result);
        }
        catch (e){
            return res.status(500).json(e);
        }
    }

    async getOne(req,res){
        try{
            const {id} = req.params;
            const list = await ListMovies.findOne({where:{id},
            include:[{model:MovieListItem, as:'MovieListItems'}]});
            return res.json(list);
        }
        catch(e){
            return res.status(500).json(e);
        }
    }


    async createListMovieItem (req,res){
        try{
            const {movieId, listId} = req.body;
            const result = await MovieListItem.create({movieId:movieId , ListMovieId:listId });
            return res.json(result);
        }
        catch (e){
            return res.status(500).json(e);
        }


    }
 }

 export default  new ListMoviesController()