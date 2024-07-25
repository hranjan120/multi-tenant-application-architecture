import { Router } from 'express';

import masterRoute from './masterRoute.js';
import userRoute from './userRoute.js';

const router = Router();

/*------------------*/
router.use('/master', masterRoute);
router.use('/user', userRoute);

/*
*-------------------
*/
export default router;
