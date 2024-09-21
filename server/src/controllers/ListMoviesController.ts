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


            const listItemCheck:any = await MovieListItem.findOne({where:{movieId:movieId, ListMovieId:listId}})

            if(listItemCheck!=null){
                res.json({message:"already exist"})

            }
            else{
                const result = await MovieListItem.create({movieId:movieId , ListMovieId:listId });
                return res.json(result);
            }

        }
        catch (e){
            console.error(e)
            return res.status(500).json(e);
        }


    }

    async checkIfExistInList(req,res) {
        try{
        const {listId, movieId} = req.body;

        const findOne: any = await MovieListItem.findOne({where: {ListMovieId: listId, movieId:movieId},})

        if (findOne!=null) {
            return res.json({message: "Already exist"})
        } else {
            return res.json({message: "ok"});
        }
    }
    catch (e){
            return res.status(500).json(e)
    }
    }
 }

 export default  new ListMoviesController()