import {ListMovies} from "../models/models.ts";

 class ListMoviesController{
    async getAll(req,res){
        const result = await ListMovies.findAll();
        res.json(result);
    }
 }

 export default  new ListMoviesController()