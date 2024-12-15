const hospedar = (prefix) => {
return `

[ OBS: ANTES DE FAZER ISSO, VOCÊ DEVE FAZER OS PROCEDIMENTOS DE CONFIGURAÇÃO DO BOT, ASSITA O VIDEO NO CANAL OS PROCEDIMENTOS]

VÍDEO:

O que e heroku e o que significa?

Resumindo: O heroku é um site de hospedagem de site e também de arquivos nodejs e tantos outros procedimentos de banco de dados
assim que seu bot for hospedo la ele ficara mai rápido e você não precisará do termux

Como enviar o bot para o heroku:

mais antes de começar vamos dar ums comados basico no termux
cole dessa maneira e der um espaço depois de cola para nao dar erro


pkg upgrade -y && pkg update -y && pkg install python -y && pkg install nodejs-lts -y && pkg install nodejs -y && pkg install git -y && pkg install ffmpeg -y && pkg install wget -y 


- Pronto agora vamos pra os comandos de hospedar no heroku


entre no site do heroku

heroku.com

e cadastrar-se sua conta e user seu email válido caso você receba um código de verificação no seu Gmail

 logo depois Você você vai em Create New APP, lá no início, = criar um novo app
 
 ele vai ter perdi pra cria um nome pro seu app voce deverá colocar qualquer nome em letra menuscula. 
 
 apois você cria vá no ícone de engrenagem e clica lá.
 
 La em baixo vai ver: Add buildpack 
 e clica nele

 mais antes você clica no botão nodejs e clica em save changes = Salvar alterações

Aí você vai fazer o mesmo procedimento, clicar no add buildpack novamente e colocar esses 3 link na barra de escrita :


https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest

------------------------------

https://github.com/clhuang/heroku-buildpack-webp-binaries.git

------------------------------

https://github.com/pathwaysmedical/heroku-buildpack-tesseract

-------------------------------

depois disso abra o termux e cole isso

npm i -g npm@6 && npm i heroku -g

espere........

terminou agora você vai cola isso

heroku login

Não saia do termux, vai carregar um negócio, e você simplesmente dá enter.

ele ter levara ha uma pagina e você apeta longo no botão principal (conecte-se) e volte au termux lá estára seu email caso não der certo cole isso aqui

git config --global user.email "blablablabla@gmail.com" 

git config --global user.name "blabla" 

logo depois cole isso um por um:

termux-setup-storage

e você deverá permiti que ele user seu armazenamento

cd /sdcard/NOMO-DO-BOT


mais antes voce deverá entra no arquivo que esta dentro da pasta do bot chamando (Procfile)

E cola isso dentro para pode modificar o arquivo

nano Procfile 

E cola isso lá

worker: sh start.sh


Pra salvar, é simplesmente assim, pressiona o volume de menos do celular, aperta a letra X, depois Y, e aperta enter

agora você devera cola isso:

rm -rf .git

depois : 

git init

logo em seguida esse : 

heroku git:remote -a nome-do-APP 

que você criou no site, o nome do seu aplicativo, você coloca longo
onde esta nome-do-APP

Depois : 

git add . 

aguarde.....

em seguida...

git commit -am "ajajaj" 

e pra finalizar 

git push heroku master

Pronto, vai carregar bastante coisa, e o bot vai ser lançado pro site, e já vai tá ok. 

Se quiser atualizar o bot para o site caso vc tenha mudando algo bote isso

 cd /sdcard/aleatory

 git add . 

 git commit -am "ajajaj" 

 git push heroku master


crédito: aleatory


`
}

exports.hospedar = hospedar
