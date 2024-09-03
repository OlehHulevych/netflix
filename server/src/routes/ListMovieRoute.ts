import Router from 'express';
import ListMoviesController from "../controllers/ListMoviesController.ts";

const router = Router();

router.post('/');
router.get('/', ListMoviesController.getAll);

export default  router;