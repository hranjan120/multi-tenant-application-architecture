import mongoose from 'mongoose';
import { getDataFromRedisByPattern } from '../common/redisMethods.js';

import UserModel from '../../models/UserModel.js';
import TodoModel from '../../models/TodoModel.js';
/*
*-----------
*/
const escsTenantDbConnection = {};

export const initTenantDbConnection = async () => {
    const tenantData = await getDataFromRedisByPattern('tenant');

    if (tenantData.length > 0) {
        tenantData.forEach((tenant) => {
            console.log(`Tenant ${tenant} - Connection established`);
            escsTenantDbConnection[tenant] = mongoose.createConnection(`${process.env.DB_BASE_URL}/${tenant.split(':')[1]}?retryWrites=true&w=majority`);

            /* ------Include all Schema Here------*/
            escsTenantDbConnection[tenant].model('user_datas', UserModel);
            escsTenantDbConnection[tenant].model('todo_datas', TodoModel);
        });
        console.log('Connect All Tenant DB Foreach Called');
    } else {
        console.log('No tenant data found for DB connection');
    }
};

/*---------------------------*/
export const getTenataDbConnection = async (tenantId) => {
    if (escsTenantDbConnection) {
        return escsTenantDbConnection[tenantId] || null;
    }
    return null;
};
