import './loadEnv.js';
import app from './app.js';
import { initTenantDbConnection } from './src/utils/db/tenantConnection.js';

/* **********************************************
*----------------Db connection--------------
*********************************************** */
(async () => {
    try {
        await initTenantDbConnection();
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
})();

/*
*-------------------------------------------------
*/
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port} log service`);
    console.log(`App is on: ${app.get('env')} Mode`);
});

process.on('uncaughtException', (error, origin) => {
    console.log('----- Uncaught exception -----');
    console.log(error);
    console.log(origin);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('----- Unhandled Rejection at -----');
    console.log(promise);
    console.log(reason.stack);
});
