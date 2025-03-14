import express from 'express';
import { createClient } from 'redis';
const app = express();
const port = 3000;

// connect to redis. see https://github.com/redis/node-redis/blob/master/docs/client-configuration.md
const client = createClient({
  url: 'redis://default:redispass2@127.0.0.1:6379'
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
  const value = await client.get(key);
  const resp = `You upserted a simple KV pair, key ${key} value ${value}`;
  res.send(resp);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
