# for my devcontainer
cd /workspaces/tools/redis

# start docker, which contains our redis db
docker-compose -f docker-compose.yml up -d

# install express and redis node client
npm i express && npm i redis

# start the express server
node --env-file=.env ./express/app.mjs
