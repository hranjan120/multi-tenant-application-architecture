import Redis from 'ioredis';

const redisConfigOption = {
    host: process.env.REDIS_URL,
    port: +process.env.REDIS_PORT,
    password: process.env.REDIS_PWD,
    maxRetriesPerRequest: null,
    tls: {},
    retryStrategy(times) {
        if (times % 4 === 0) {
            console.log('redisRetryError', 'Redis reconnect exhausted after 3 retries.');
            return null;
        }
        return 200;
    },
};
const redisDbInstance = new Redis(process.env.NODE_ENV === 'dev' ? process.env.REDIS_URL : redisConfigOption);
console.log(process.env.NODE_ENV);
redisDbInstance.on('ready', () => {
    console.log('Redis DB Connected Successfully');
});
redisDbInstance.on('error', (error) => {
    console.log('Redis Client Connection Error', error);
});

/*--------------------*/
export const setDataToRedis = async (key, value) => {
    await redisDbInstance.set(key, value);
    // await redisDbInstance.set(key, value, "EX", 10);
    return true;
};

/*--------------------*/
export const getDataFromRedis = async (key, type) => {
    const redisData = await redisDbInstance.get(key);
    return (type === 'OBJ') ? JSON.parse(redisData) : redisData;
};

/*--------------------*/
export const getDataFromRedisByPattern = async (key) => {
    const [newCursor, foundKeys] = await redisDbInstance.scan(0, 'MATCH', `${key}*`, 'COUNT', 50);
    return foundKeys;
    // const redisData = await redisDbInstance.keys(`${key}*`);
    // return redisData;
};

/*--------------------*/
export const removeDataFromRedis = async (key) => {
    await redisDbInstance.del(key);
    return true;
};

