import { successResponse } from '../utils/common/makeResponse.js';
import { setDataToRedis, getDataFromRedisByPattern, getDataFromRedis } from '../utils/common/redisMethods.js';

/*
*------------------------------
*/
export const addNewTenant = async (req, res, next) => {
    try {
        const str = 'four';
        const data = {
            tenantName: `Tenant four`,
            tenantDomain: `tenant${str}`,
            tenantDb: `tenant-${str}-db`,
        }
        await setDataToRedis(`tenant${str}:tenant-${str}-db`, JSON.stringify(data));
        return res.status(200).json(successResponse('New Tenant Data Added Successfully'));
    } catch (error) {
        return next(error);
    }
};

/*------------------*/
export const getAllTenantKey = async (req, res, next) => {
    try {
        const tenantList = await getDataFromRedisByPattern('tenant');
        return res.status(200).json(successResponse('All Tenant Key', { tenantList }));
    } catch (error) {
        return next(error);
    }
};

/*------------------*/
export const getTenantDetail = async (req, res, next) => {
    try {
        const tenantData = await getDataFromRedis(req.params.key, 'OBJ');
        return res.status(200).json(successResponse('Tenant Detail', { tenantData }));
    } catch (error) {
        return next(error);
    }
};
