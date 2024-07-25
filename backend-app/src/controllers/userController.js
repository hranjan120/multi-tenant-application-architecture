import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { successResponse, badResponse } from '../utils/common/makeResponse.js';
import * as userService from '../services/userService.js';

/*
*---------------------
*/
export const addTenantUser = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const newPwd = bcrypt.hashSync(req.body.pwd, salt);
        const formData = { ...req.body };
        formData.userPwd = newPwd;

        await userService.insertNewUser('tenant-three-db', formData);

        return res.status(200).json(successResponse('New User Added Successfully'));
    } catch (error) {
        return next(error);
    }
};

/*------------------*/
export const tenantUserLogin = async (req, res, next) => {
    try {
        const userData = await userService.findSingleUser('tenant-three-db', { userEmail: req.body.email });
        if (!userData) return res.status(400).json(badResponse('User not Found'));

        const chkPwd = bcrypt.compareSync(req.body.pwd, userData.userPwd);
        if (!chkPwd) return res.status(400).json(badResponse('User Password not Matched'));

        const userToken = jwt.sign({ tenant: 'tenant-three-db', id: userData._id, isRoot: userData.isRootUser }, process.env.JWT_SECRET, { expiresIn: '30d' });

        return res.status(200).json(successResponse('User Loggin Success', { userToken }));
    } catch (error) {
        return next(error);
    }
};

/*------------------*/
export const addToDos = async (req, res, next) => {
    try {
        const formData = { ...req.body };
        formData.userId = req.decoded.id;

        await userService.insertNewToDo(req.decoded.tenant, formData);

        return res.status(200).json(successResponse('To Do Added Successfully'));
    } catch (error) {
        return next(error);
    }
};

/*------------------*/
export const getAllToDos = async (req, res, next) => {
    try {
        const toDoList = await userService.fetchAllToDo(req.decoded.tenant, { userId: req.decoded.id });

        return res.status(200).json(successResponse('To Do List', { toDoList }));
    } catch (error) {
        return next(error);
    }
};