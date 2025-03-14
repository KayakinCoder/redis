A simple local dev setup consisting of Redis and a very simple Node express server that can talk to the redis instance.
- This installs the latest version of both redis and express, which may have some added breaking changes since the last time I updated this repo (I'm not including a lockfile specifically so that we get the latest stable versions)
- I use this in a devcontainer (see my repo named "devcontainer"), and redis runs in a docker container
- I'm NOT following best practices here, e.g. the express app is just one single file, not using TS, etc. The goal of the repo is to get a quick backend connection to redis set up for demonstration/testing purposes

1. Install Redis Insight (a Redis IDE) on your local machine
2. Run this command to spin up Redis and the express server: 

`source /workspaces/tools/redis/startup.sh`

3.  Check to make sure the docker container is up and running, then ensure you can connect to it via Redis Insight
  - Redis is password protected, see .env for the password
4. Using Postman or your http request tool of choice, try making an api call to express:
  - See /express/app.mjs for various commands that get and mutate data in the redis db

`POST http://127.0.0.1:3000/createts`

5. Examine the data in Redis Insight, you should see the data you created/mutated!

**Why not use redis cli?**

Redis is fantastic, but unfortunately the cli is not easy to install and use without tying it to an install
of a redis server. Additionally, in your Redis Insight IDE you can run CLI commands.
