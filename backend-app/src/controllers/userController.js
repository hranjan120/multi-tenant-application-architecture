import { successResponse } from '../utils/common/makeResponse.js';

/*
*------------------------------
*/
export const tenantUserLogin = async (req, res, next) => {
    try {
        return res.status(200).json(successResponse('Get log by Filter'));
    } catch (error) {
        return next(error);
    }
};

/*------------------*/
export const addTenantUser = async (req, res, next) => {
    try {
        return res.status(200).json(successResponse('Log Added Successfully'));
    } catch (error) {
        return next(error);
    }
};

/*------------------*/
export const addToDos = async (req, res, next) => {
    try {
        return res.status(200).json(successResponse('Log Added Successfully'));
    } catch (error) {
        return next(error);
    }
};

/*------------------*/
export const getAllToDos = async (req, res, next) => {
    try {
        return res.status(200).json(successResponse('Log Added Successfully'));
    } catch (error) {
        return next(error);
    }
};