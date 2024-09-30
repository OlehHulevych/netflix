import Router from 'express';
import userController from '../controllers/userController'
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.post('/login', userController.login);
router.post('/registration', userController.registration);
router.get('/auth', authMiddleware, userController.check);
router.get('/:id',userController.getOne);
router.post('/check-email', userController.checkOne);
router.post('/check-name', userController.checkName);

export default router;