
ssh -i 

##### INSTRUCTION TO DEPLOY ON LOCALLY

cd /Users/neil/sideProjects/llm-web-whisperer-improve

git clone ssh://ghnc/neilcouture/llm-web-whisperer-improve.git


npm install

curl -fsSL https://bun.sh/install | bash

bun install

exec /bin/zsh

bun install

bun run dev




##### INSTRUCTION TO DEPLOY ON LIVE SERVER

cd llm-web-whisperer-improve

sudo npm install
sudo npm run build

* to run locally
bun run dev


sudo rm -rf /var/www/html/*

sudo cp -r dist/* /var/www/html/
sudo cp -R blog /var/www/html/
sudo cp icons/favicon.ico /var/www/html/favicon.ico

sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html


sudo emacs /etc/httpd/conf.d/llm-whisperer.conf
``
<VirtualHost *:80>
    ServerName hermes-llm.ai
    DocumentRoot /var/www/html

    <Directory /var/www/html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog /var/log/httpd/llm-whisperer-error.log
    CustomLog /var/log/httpd/llm-whisperer-access.log combined
</VirtualHost>
``

sudo emacs /var/www/html/.htaccess
``
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
``


sudo systemctl restart httpd
sudo systemctl enable httpd