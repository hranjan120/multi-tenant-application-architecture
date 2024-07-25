import { Router } from 'express';

import * as userController from '../controllers/userController.js';
import userAuth from '../utils/middleware/userAuth.js';

const router = Router();
/*
*--------------Routes Section-----------------
*/
router.post('/v1/add-new-user', userController.addTenantUser);
router.post('/v1/tenant-login', userController.tenantUserLogin);
router.post('/v1/add-new-todo', userAuth(), userController.addToDos);
router.get('/v1/get-all-todos', userAuth(), userController.getAllToDos);

/*
*-----------------------------
*/
export default router;
