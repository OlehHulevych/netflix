import Router from 'express';
import userRoute from './userRoute.ts'
import typeRoute from "./typeRoute.ts";
import genreRoute from "./genreRoute.ts";
import movieRoute from "./movieRoute.ts";
import listMovieRoute from "./ListMovieRoute.ts";

const router = Router();

router.use('/user', userRoute);
router.use('/type', typeRoute);
router.use('/genre', genreRoute);
router.use('/movie', movieRoute);
router.use('/list-movie', listMovieRoute);

export default router;