import {ListMovies, Movie, MovieListItem} from "../models/models.ts";

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
            include:[{model:MovieListItem, as:'MovieListItems', include:[{model:Movie, as:'Movie'}]}]});
            return res.json(list);
        }
        catch(e){
            return res.status(500).json(e);
        }
    }

    async getOneByUser(req,res){
        try{
            const {id} = req.params;
            const foundList = await ListMovies.findOne({where:{userId:id},
                include:[{model:MovieListItem, as:'MovieListItems', include:[{model:Movie, as:'Movie'}]}]});
            return res.json(foundList)
        }
        catch (e){
            return res.status(500).json(e);
        }


    }


    async createListMovieItem (req,res){
        try{
            const {movieId, listId} = req.body;
            console.log(movieId)
            console.log(listId)
            const listMovies:any = await ListMovies.findOne({where:{id:listId}})

            const listItemCheck:any = await MovieListItem.findOne({where:{movieId:movieId}})

            if(listItemCheck != null && listItemCheck.listMovieId === listMovies.id){
                res.json({message:"already exist"})

            }
            else{
                const result = await MovieListItem.create({movieId:movieId , ListMovieId:listMovies.id });
                return res.json(result);
            }

        }
        catch (e){
            console.error(e)
            return res.status(500).json(e);
        }


    }

    async checkIfExistInList(req,res){
        const {listId,movieId} = req.params;
        const findOne:any = await MovieListItem.findOne({where:{listId:listId},})

        if(findOne.movieId===movieId){
            return res.json({message:"Already exist"})
        }
        else{
            return res.json({message:"ok"});
        }
    }
 }

 export default  new ListMoviesController()