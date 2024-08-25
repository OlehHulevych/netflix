import Router from 'express';
import GenreController from '../controllers/genreController.ts'

const router = Router();

router.post('/', GenreController.create);
router.get('/', GenreController.getAll);

export default router;