import Router from 'express';
import MovieController from "../controllers/movieController";

const router = Router();

router.post('/', MovieController.create);
router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getOne);
router.get('/hello',(req,res)=>{
  res.json("Hello World")
})


export default router;