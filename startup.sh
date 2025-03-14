# start docker, which contains our redis db
docker-compose -f /workspaces/tools/redis/docker-compose.yml up -d

# install express and redis node client
cd /workspaces/tools/redis && npm i express && npm i redis

# start the express server
node /workspaces/tools/redis/express/app.mjs
