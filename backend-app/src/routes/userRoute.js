import { Router } from 'express';

import * as userController from '../controllers/userController.js';
import userAuth from '../utils/middleware/userAuth.js';

const router = Router();
/*
*--------------Routes Section-----------------
*/
router.post('/v1/tenant-login', userAuth(), userController.tenantUserLogin);
router.post('/v1/add-new-user', userAuth(), userController.addTenantUser);
router.post('/v1/add-new-todo', userAuth(), userController.addToDos);
router.post('/v1/get-all-todos', userAuth(), userController.getAllToDos);

/*
*-----------------------------
*/
export default router;
