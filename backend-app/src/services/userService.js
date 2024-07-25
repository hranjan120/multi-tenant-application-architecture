import { getTenataDbConnection } from '../utils/db/tenantConnection.js';
import * as userService from '../services/userService.js';

/*
*--------------------
*/
export const insertNewUser = async (tenant, dt) => {
    const dbConn = await getTenataDbConnection(tenant);
    const dbCollecction = await dbConn.model("user_datas");
    const newData = new dbCollecction(dt);
    const insertedData = await newData.save();
    return insertedData;
};

/*------------------*/
export const findSingleUser = async (tenant, filter) => {
    const dbConn = await getTenataDbConnection(tenant);
    const dbCollecction = await dbConn.model("user_datas");
    const data = dbCollecction.findOne(filter);
    return data;
};

/*------------------*/
export const insertNewToDo = async (tenant, dt) => {
    const dbConn = await getTenataDbConnection(tenant);
    const dbCollecction = await dbConn.model("todo_datas");
    const newData = new dbCollecction(dt);
    const insertedData = await newData.save();
    return insertedData;
};

/*------------------*/
export const fetchAllToDo = async (tenant, filter) => {
    const dbConn = await getTenataDbConnection(tenant);
    const dbCollecction = await dbConn.model("todo_datas");
    const data = dbCollecction.find(filter).sort({ createdAt: -1 });
    return data;
};