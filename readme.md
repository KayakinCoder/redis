My local dev Redis setup. Note that I use this in a devcontainer (see my repo named "devcontainer")

1. Install Redis Insight (a Redis IDE) on your local machine
2. Run this command to spin up Redis and a Koa server: `source /workspaces/tools/redis/startup.sh`
3.  Check to make sure the docker container is up and running, then ensure you can connect to it via Redis Insight
  - Redis is password protected, see docker-compose.yml for the password
4. 

**Why not use redis cli?**

Redis is fantastic, but unfortunately the cli is not easy to install and use without tying it to an install
of a redis server. Additionally, in your Redis Insight IDE you can run CLI commands.
