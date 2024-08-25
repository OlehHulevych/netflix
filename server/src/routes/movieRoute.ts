import Router from 'express';
import MovieController from "../controllers/movieController.ts";

const router = Router();

router.post('/', MovieController.create);
router.get('/', MovieController.getAll);

export default router;