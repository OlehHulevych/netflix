import Router from 'express';
import ListMoviesController from "../controllers/ListMoviesController.ts";

const router = Router();

router.post('/', ListMoviesController.createListMovieItem);
router.get('/', ListMoviesController.getAll);
router.get('/:id', ListMoviesController.getOne)
router.get('/user/:id', ListMoviesController.getOneByUser)
router.post('/check/', ListMoviesController.checkIfExistInList)


export default  router;