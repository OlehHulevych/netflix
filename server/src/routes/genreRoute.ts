import Router from 'express';
import GenreController from '../controllers/genreController'

const router = Router();

router.post('/', GenreController.create);
router.get('/', GenreController.getAll);
router.get('/:id', GenreController.getOne);

export default router;