#!/bin/bash

cd /root/gamestock
git pull
source /root/.nvm/nvm.sh

/root/.nvm/versions/node/v24.12.0/bin/npm i

/root/.nvm/versions/node/v24.12.0/bin/npm run build

systemctl restart gamely

