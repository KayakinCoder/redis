import express from 'express';
import { createClient } from 'redis';
const app = express();
const port = 3000;

// connect to redis. see https://github.com/redis/node-redis/blob/master/docs/client-configuration.md
const redisPass = process.env.REDIS_PASSWORD;
const redisPort = process.env.REDIS_PORT;
const client = createClient({
  url: `redis://default:${redisPass}@127.0.0.1:${redisPort}`
});
client.on('error', err => console.log('Redis Client Error', err));
await client.connect();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// create simple KV, data type string
app.post('/createts', async (req, res) => {
  const currentTs = Math.floor(new Date().getTime() / 1000);
  const key = 'currentunixts';
  await client.set(key, currentTs);
  await await client.hSet(
    'mykey',
    {
      'model': 'Deimos',
      'brand': 'Ergonom',
      'type': 'Enduro bikes',
      'price': 4972,
    }
  );
  const value = await client.get(key);
  const resp = `You upserted a simple KV pair, key ${key} value ${value}`;
  res.send(resp);
});

// create an item of type hash
app.post('/createhash', async (req, res) => {
  await await client.hSet(
    'myhashkey',
    {
      'model': 'Deimos',
      'brand': 'Ergonom',
      'type': 'Enduro bikes',
      'price': 4972,
    }
  );
  const resp = `You upserted a Hash data type, key myhashkey`;
  res.send(resp);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
