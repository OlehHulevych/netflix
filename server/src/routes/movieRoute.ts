import Router from 'express';
import MovieController from "../controllers/movieController.ts";

const router = Router();

router.post('/', MovieController.create);
router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getOne);



export default router;