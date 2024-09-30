import Router from 'express';
import userRoute from './userRoute'
import typeRoute from "./typeRoute";
import genreRoute from "./genreRoute";
import movieRoute from "./movieRoute";
import listMovieRoute from "./ListMovieRoute";

const router = Router();

router.use('/user', userRoute);
router.use('/type', typeRoute);
router.use('/genre', genreRoute);
router.use('/movie', movieRoute);
router.use('/list-movie', listMovieRoute);

export default router;