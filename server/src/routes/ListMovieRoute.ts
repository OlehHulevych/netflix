import Router from 'express';
import ListMoviesController from "../controllers/ListMoviesController";

const router = Router();

router.post('/', ListMoviesController.createListMovieItem);
router.get('/', ListMoviesController.getAll);
router.get('/:id', ListMoviesController.getOne)
router.get('/user/:id', ListMoviesController.getOneByUser)
router.post('/check/', ListMoviesController.checkIfExistInList)
router.post('/delete/', ListMoviesController.removeListMovieItem);


export default  router;