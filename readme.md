<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>
<p align="center">Laravel 5.7 학습하기</p>

## 학습을 위한 사전 작업들

테스트 서버는 Oracle VM VirtualBox에 Ubuntu 18.10을 설치 하였으면, 따라서 모든 설정는 Ubuntu 18.10을 기준으로 작성 되었습니다.
Windows 및 기타 OS에서는 각자 맞는 설치 방법 및 설정 맞게 하시기 바랍니다. VirtualBox 및 Ubuntu 설치 방법은 생략합니다. 
본 소스는 혼자  [생활코딩](https://opentutorials.org/course/1) 및 유튜브 등을 보면서 공부한 내용을 정리하는 것이 목적이다.

### MySQL Server 
설치: `sudo apt install mysql-server`<br/>
보안 스크립트 : `sudo mysql_secure_installation`
```
MySQL 설치의 보안 옵션을 약간 변경하는 일련의 프롬프트가 나타납니다. 
첫 번째 프롬프트는 MySQL 암호의 강도를 테스트하는 데 사용할 수있는 Validate Password Plugin을 설정할지 여부를 묻습니다.
선택에 상관없이 다음 프롬프트는 MySQL root 사용자의 암호를 설정합니다. 원하는 암호를 입력하고 확인하십시오.
다음 질문 부터는 기본값을 그대로 사용합니다. 이렇게하면 일부 익명 사용자 및 테스트 데이터베이스가 제거되고 원격 루트 로그인이 비활성화되며 변경 사항을 즉시 적용 됩니다.
```
#### 사용자 인증 및 권한 조정 (선택 사항)
`sudo mysql`<br/>
`SELECT user,authentication_string,plugin,host FROM mysql.user;`
```
Output
+------------------+-------------------------------------------+-----------------------+-----------+
| user             | authentication_string                     | plugin                | host      |
+------------------+-------------------------------------------+-----------------------+-----------+
| root             |                                           | auth_socket           | localhost |
| mysql.session    | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| mysql.sys        | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| debian-sys-maint | *CC744277A401A7D25BE1CA89AFF17BF607F876FF | mysql_native_password | localhost |
+------------------+-------------------------------------------+-----------------------+-----------+
4 rows in set (0.00 sec)

이 예에서는 루트 사용자가 실제로 auth_socket플러그인을 사용하여 인증한다는 것을 알 수 있습니다.
```
#### root 패스워드로 로그인하기
`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';` <br/>
`FLUSH PRIVILEGES;` <br/>
`SELECT user,authentication_string,plugin,host FROM mysql.user;`
```
Output
+------------------+-------------------------------------------+-----------------------+-----------+
| user             | authentication_string                     | plugin                | host      |
+------------------+-------------------------------------------+-----------------------+-----------+
| root             | *3636DACC8616D997782ADD0839F92C1571D6D78F | mysql_native_password | localhost |
| mysql.session    | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| mysql.sys        | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| debian-sys-maint | *CC744277A401A7D25BE1CA89AFF17BF607F876FF | mysql_native_password | localhost |
+------------------+-------------------------------------------+-----------------------+-----------+
```
#### Database/user  생성 및 권한 부여

Database 생성 : `CREATE SCHEMA 'databaseName' DEFAULT CHARACTER SET utf8;` <br/>
user 생성 : `create user 'userID'@'%' identified by 'userpassword';` <br/>
user 권한 : `grant all privileges on databaseName.* to 'userID'@'%';` <br/>

### Nginx Server 
설치 : `sudo apt install nginx`<br/>
방어벽 설정 : `sudo ufw app list`
```
Output
Available applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH
```
Nginx에는 세 가지 프로파일이 있다.
```
• Nginx Full  : 이 프로필은 포트 80 (암호화되지 않은 일반 웹 트래픽)과 포트 443 (TLS / SSL 암호화 트래픽) 모두를 엽니다.
• Nginx HTTP  : 이 프로필은 포트 80 (일반, 암호화되지 않은 웹 트래픽)
• Nginx HTTPS : 이 프로필은 포트 443 (TLS / SSL 암호화 트래픽)
```
`sudo ufw allow 'Nginx HTTP'`<br/>
`sudo ufw status`
```
Output
Status: active
To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere                  
Nginx HTTP                 ALLOW       Anywhere                  
OpenSSH (v6)               ALLOW       Anywhere (v6)             
Nginx HTTP (v6)            ALLOW       Anywhere (v6)
```
#### WebServer 확인
`systemctl status nginx`
```
Output
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2018-04-20 16:08:19 UTC; 3 days ago
     Docs: man:nginx(8)
 Main PID: 2369 (nginx)
    Tasks: 2 (limit: 1153)
   CGroup: /system.slice/nginx.service
           ├─2369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           └─2380 nginx: worker process
```
#### Nginx 프로세스 관리
중지          : `sudo systemctl stop nginx`<br/>
시작          : `sudo systemctl start nginx`<br/>
재시작        : `sudo systemctl restart nginx`<br/>
설정변경      : `sudo systemctl reload nginx`<br/>
자동실행      : `sudo systemctl enable nginx`<br/>
자동실행 중지 : `sudo systemctl disable nginx`<br/>
#### Nginx 블럭 설정(권장)
`cd /var/www`<br/>
`sudo mkdir -p /var/www/example.com/html`<br/>
`sudo chown -R $USER:$USER /var/www/example.com/html`<br/>
`sudo chmod -R 755 /var/www/example.com`<br/>
`nano /var/www/example.com/html/index.html`<br/>
```
<html>
    <head>
        <title>Welcome to Example.com!</title>
    </head>
    <body>
        <h1>Success!  The example.com server block is working!</h1>
    </body>
</html>
```
`sudo nano /etc/nginx/sites-available/example.com`<br/>
```
server {
  listen 80;
  listen [::]:80;
  root /var/www/example.com/html;
  index index.html index.htm index.nginx-debian.html;
  server_name example.com www.example.com;
  location / {
    try_files $uri $uri/ =404;
  }
}
```
`sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/`<br/>
`sudo nano /etc/nginx/nginx.conf`<br/>
```
...
http {
    ...
    server_names_hash_bucket_size 64;
    ...
}
...
```
`sudo nginx -t`<br/>
`sudo systemctl restart nginx`<br/>
#### Server 구성
```
• /etc/nginx: 
  Nginx 설정 디렉토리. Nginx 설정 파일은 모두 여기에 있습니다.
• /etc/nginx/nginx.conf: 
  기본 Nginx 설정 파일. 이것은 Nginx 글로벌 구성을 변경하기 위해 수정할 수 있습니다.
• /etc/nginx/sites-available/: 
  사이트 별 서버 블록을 저장할 수있는 디렉토리입니다. 
  Nginx는 디렉토리에 링크되어 있지 않으면이 디렉토리에있는 구성 파일을 사용하지 않습니다 
  sites-enabled. 
  일반적으로 모든 서버 블록 구성은이 디렉토리에서 완료된 다음 다른 디렉토리에 링크하여 활성화됩니다.
• /etc/nginx/sites-enabled/: 
  사이트 별 서버 블록이 활성화 된 디렉토리입니다. 
  일반적으로이 파일은 sites-available디렉토리 에있는 구성 파일에 링크하여 만들어집니다 .
• /etc/nginx/snippets:
  이 디렉토리에는 Nginx 구성의 다른 곳에 포함될 수있는 구성 부분이 있습니다. 
  잠재적으로 반복 할 수있는 구성 세그먼트는 스 니펫으로 리팩터링하는 데 적합한 후보입니다.
```
#### Server 로그
```
• /var/log/nginx/access.log: 
  Nginx가 다른 작업을 수행하도록 구성되어 있지 않으면 웹 서버에 대한 모든 요청이이 로그 파일에 기록됩니다.
• /var/log/nginx/error.log: 
  모든 Nginx 오류가이 로그에 기록됩니다.
```
### Certbot

저장소 추가 : `sudo add-apt-repository ppa:certbot/certbot` <br/>
설치 : `sudo apt install python-certbot-nginx`<br/>

#### 방어벽에서 HTTPS 허용하기
`sudo ufw status`
```
Output
Status: active
To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere                  
Nginx HTTP                 ALLOW       Anywhere                  
OpenSSH (v6)               ALLOW       Anywhere (v6)             
Nginx HTTP (v6)            ALLOW       Anywhere (v6)
```
<code>
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'
sudo ufw status
</code>


```
Output
Status: active
To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
Nginx Full                 ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
Nginx Full (v6)            ALLOW       Anywhere (v6)
```
#### SSL 인증서 받기

`sudo certbot --nginx -d example.com  -d www.example.com`
```
Output
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
-------------------------------------------------------------------------------
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
-------------------------------------------------------------------------------
Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
```
원하는 것을 선택한 다음 ENTER를 누르면 구성이 업데이트되고, certbot 프로세스가 성공적이었으며 인증서가 저장된 위치를 알려주는 메시지와 함께 마무리됩니다.
```
Output
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/example.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/example.com/privkey.pem
   Your cert will expire on 2018-07-23. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:
Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```
#### Certbot 자동 갱신 확인
`sudo certbot renew --dry-run`

### PHP 설치 
`sudo apt -y install unzip zip php7.2 php7.2-mysql php7.2-fpm php7.2-mbstring php7.2-xml php7.2-curl`

### PHP-FPM 설정및 HTTPS 변경하기
`sudo nano /etc/nginx/sites-available/example.com`
```
server {
        listen 80;
        server_name example.com www.example.com;

        return 301 https://$host$request_uri;
}

server {
        listen 443 ssl; # managed by Certbot

        root /var/www/example.com/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com www.example.com;

        ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem; # managed by Certbot
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }
}
```
`sudo nginx -t`
```
Output
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
`sudo systemctl restart nginx`<br/>
### Postfix
`sudo DEBIAN_PRIORITY=low apt install postfix`
```
• 메일 구성의 일반적인 유형은 무엇입니까? : 인터넷 사이트
• 시스템 메일 이름 : example.com (mail.example.com 아님)
• 루트 및 포스트 마스터 메일 수신자 : sammy
• $ myhostname, example.com, mail.example.com, localhost.example.com, localhost에 대한 메일을 수락 할 다른 대상
• 메일 큐에서 동기 업데이트를 강제 하시겠습니까? : 아니
• 로컬 네트워크 : 127.0.0.0/8 [::ffff:127.0.0.0]/104 [:: 1] / 128
• 사서함 크기 제한 : 0
• 지역 주소 확장 문자 : +
• 사용할 인터넷 프로토콜 : 모두
```
설정을 다시 할려면 : `sudo dpkg-reconfigure postfix`

### NodeJS
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
### NPM
```
sudo apt install npm
```

### yarn
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get install yarn
```
### composer
```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '93b54496392c062774670ac18b134c3b3a95e5a5e5c8f1a9f115f203b75bf9a129d5daa8ba6a13e2cc8a1da0806388a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```


### Laraval 5.7
```
cd /var/www/example.com/
sudo rm -R html
composer create-project --prefer-dist laravel/laravel html
cd /var/www/example.com/html
sudo chmod -R 775 storage bootstrap/cache
sudo chown -R www-data:www-data storage bootstrap/cache
```
#### Nginx Server에 Laravel 적용
`sudo nano /etc/nginx/sites-available/example.com`
```
server {
        listen 80;
        server_name example.com www.example.com;

        return 301 https://$host$request_uri;
}

server {
        listen 443 ssl; # managed by Certbot

        root /var/www/example.com/html/public;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com www.example.com;

        ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem; # managed by Certbot
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

        location / {
                try_files $uri $uri/ /index.php?$query_string;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
`sudo nginx -t`
```
Output
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
`sudo systemctl restart nginx`<br/>

### PhpMyAdmin
`sudo apt-get install phpmyadmin php-gettext` <br/>
처음질문은 아무것도 선택하지 않고 <OK>클릭하고, 다음 <아니오> 선택하고 나온다.


`cd /var/www/example.com/html/public` <br/>
`sudo ln -s /usr/share/phpmyadmin /var/www/example.com/html/public`

