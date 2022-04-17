# Server WebHook from Ringover to Catsone
If you used Ringover (https://ringover.com/) and you used CATSONE (https://catsone.com/) and you want connected this web application, this project can help you.
Zapier is cost and does not meet all needs.

This project allows you to listen to ringover events and add an activity on CATSONE.
That's only a example, just developed with this case  : 
When Ringover receive a call
&
When this number telephone is existed in cadidate of CATSONE.
Then an activity is add to candidate of CATSONE.

You can modify this project to add other webhook of ringover, and other activities of CATSONE.
* https://developer.ringover.com/#tag/webhook
* https://docs.catsone.com/api/v3/

## Requirement
* Server : By example a VPS
* Account Ringover
* Account Catsone

## Ringover configuration
* Get a api Key
* Add a link in webhook (adresse or ip on your server : port + /ringcall by example ;  http://146.xx.xxx.xx:3000/ringcall

## CATSONE configuration
* Get a api Key

## Server
```
apt install nodejs
apt install npm
git clone https://github.com/Shmuel83/server_webhook_from_ringover_to_catsone.git
cd server_webhook_from_ringover_to_catsone
npm install
```
Modify in ".env" file value of KEY_CATSON and KEY_RINGOVER

You can modify port address and other things in files
To lauch your server with a debian service
```
$ cd /etc/systemd/system
$ vi server_webhook_from_ringover_to_catsone.service
```
```
  -Add this code
[Unit]
Description=Server Web Hook
After=network-online.target

[Service]
Type=simple
ExecStart=npm --prefix /DirectoryOnYourProject/server_webhook_from_ringover_to_catsone/ run start
Restart=always

[Install]
WantedBy=multi-user.target
```
  -Then to run service
```
$ systemctl start server_webhook_from_ringover_to_catsone.service
```
To test without service, in directory on project, write this
```
$ npm run start
```

## Help
Do you have a professional help with this project, develop more features and fast ?
Contact me on https://www.malt.fr/profile/rodolphemoulin
