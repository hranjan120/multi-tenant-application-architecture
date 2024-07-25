import { Router } from 'express';

import * as masterController from '../controllers/masterController.js';

const router = Router();
/*
*--------------Routes Section-----------------
*/
router.get('/v1/get-all-tenant-key', masterController.getAllTenantKey);
router.post('/v1/add-new-tenant', masterController.addNewTenant);
router.get('/v1/get-tenant-detail/:key', masterController.getTenantDetail);

/*
*-----------------------------
*/
export default router;
