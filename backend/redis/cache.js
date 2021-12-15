import redis from 'redis';
import { promisify } from 'util';

const { REDIS_PORT } = process.env;
const redisClient = redis.createClient({ url: `redis://redis:${REDIS_PORT}` });

const setAsyncEx = promisify(redisClient.setex).bind(redisClient);
const getAsync = promisify(redisClient.get).bind(redisClient);

redisClient.on('error', (err) => {
  console.log(`'Error ${err}`);
});

async function saveWithTtl(key, value, ttlSeconds = 60) {
  return setAsyncEx(key, ttlSeconds, JSON.stringify(value));
}

async function get(key) {
  const jsonString = await getAsync(key);

  if (jsonString) {
    return JSON.parse(jsonString);
  }
}

export { get, saveWithTtl };
