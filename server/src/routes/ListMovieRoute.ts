import Router from 'express';
import ListMoviesController from "../controllers/ListMoviesController.ts";

const router = Router();

router.post('/', ListMoviesController.createListMovieItem);
router.get('/', ListMoviesController.getAll);
router.get('/:id', ListMoviesController.getOne)


export default  router;