curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 9.8.0
cd /var/www/html
npm i
npm run build
sudo su
nohup node . &
