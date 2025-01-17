#!/usr/bin/bash
pkg install figlet 
pkg install hiptext
CYAN="\033[1;36m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

if [ -e "$HOME/../usr/bin/ruby" ]; then
	echo $GREEN"ruby detectado prosseguindo..."
	sleep 1
	if [ -e "/data/data/com.termux/files/usr/bin/lolcat" ]; then
		echo $GREEN"lolcat detectado prosseguindo..."
		sleep 1
	else
		echo $RED"lolcat n茫o detectado, instalando..."
		gem install lolcat
	fi
	else
	echo $RED"Voc锚 n茫o instalou o ruby, instalando..."
	sleep 1
	pkg  install ruby
	if [ -e "/data/data/com.termux/files/usr/bin/lolcat" ]; then
		echo $GREEN"lolcat detectado prosseguindo..."
		sleep 1
	else
		echo $RED"lolcat n茫o detectado, instalando..."
		gem install lolcat
	fi
fi

clear
figlet -c -f slant -t 'KOMI-MD' | lolcat 

echo  "DANO COMANDOS BASICOS" | lolcat -a -d 50 
echo  "ESPERO QUE GOSTE DO BOT馃檪" | lolcat -a -d 50 

pkg upgrade -y && pkg update -y && apt upgrade -y && apt update -y 
echo  "QUASE TERMINANDO....... AGUARDE" | lolcat -a -d 50 

pkg install nodejs -y && pkg install nodejs-lts -y && pkg install ffmpeg -y && pkg install tesseract -y && pkg install git -y 

wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo  "TUDO PRONTO AGORA SO USAR O NPM START " | lolcat -a -d 50 

echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
