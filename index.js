/*============≠≠==========≠≠=============\\


NÃO PASSE O BOT PARA NINGUÉM, MUITOS VÃO FINGIR SER AMIGO. 

MUITOS DESEJAM COMPRAR PARA REVENDER E DIZER QUE FEZ.. 

EU ALEATORY NÃO FIZ TUDO, ASSUMO ISSO, PRECISEI DE AJUDA

PRA ISSO TENHO AMIGOS, PRA EVOLUIR JUNTO, ENTÃO..

NÃO JOGUE O ESFORÇO QUE TIVE, APESAR DE NÃO SER TANTO A 

VISTA DE QUEM JÁ CONHECE O BASTANTE DA ÁREA.. 


//=======================================*/

const { default: makeWASocket, downloadContentFromMessage, fetchLatestBaileysVersion, useSingleFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay 
} = require('@whiskeysockets/baileys');


//_-_-_-_-_-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-\\ 

const { hx, fs, Boom, axios, chalk, yts, crypto, util, P, encodeUrl, linkfy, request, cheerio, ms, ffmpeg, imgbb, googleImage, googleIt, fetch, imageToBase64, webp2gifFile, webp_mp4, EmojiAPI, qrterminal, emoji, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, insert, response, addLimit, getLimit, mediafireDl, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, isFiltered, addFilter, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanime, quizanimais, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, runtime, getpc, supre, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, wait, getExtension, h2k, generateMessageID, getGroupAdmins, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, cmdadd, addMetadata, chyt, ttthelp, tttme, tttset, esp, kyun, simih } = require('./consts-func.js')

//-_-_-_-_-_-_-_-_-_-_--_-JSON-FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-_\\

const { adeuscara, welcome_group, welcome_group2, bye_group, bye_group2, voting, sotoy, addVote, delVote, countMessage, comandos, welkom2, modobn, nsfw, daily, nescessario, welkom, premium, limitefll, antiflood, samih, samih2, _leveling, _level, bancht, anticall, ban, afk, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, antilink, antifake, antilinkhard, antilinkgp, antiimg, antisticker, antinotas, antictt, anticatalogo, antidoc, antiloc, antipv, antivid, antiaudio, palavra, palavrao, store, state, saveState } = require('./consts-func.js')

//-_-_-_-_-_-_-_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { menu, menudono, adms, menuinfo, menubasico, figurinhas, animes, infodono, menuplay, menulogos, efeitos, menuprem, jogos ,infovotacao, infocontador, infobemvindo, infolistanegra, infopalavrao, infobancarac, gitdobot, configbot, hospedar, cmd_termux, alteradores, destrava, destrava2, tabela, conselhob, palavras } = require('./consts-func.js')

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

const { prefix, NomeDoBot, NickDono, numerodono } = require("./dono/settings.json")

const { linklogos, crtt, cdd, forwarding, imgnazista, verificado, gifmenu, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, fundo1, fundo2, banChats, dono2, dono3, dono4, dono5, tapacmd, matarcmd, beijocmd, chutecmd} = require("./dono/nescessario.json")



//====================≠≠===============\\

logo = logoslink.logo

logo2 = logoslink.logo2

logo3 = logoslink.logo3 

logo4 = logoslink.logo4

logo5 = logoslink.logo5

logo6 = logoslink.logo6

logo6 = logoslink.logo6

logo7 = logoslink.logo7

logo8 = logoslink.logo8

logo9 = logoslink.logo9

logo10 = logoslink.logo10

logo11 = logoslink.logo11

logo12 = logoslink.logo12

logo13 = logoslink.logo13

logo14 = logoslink.logo14

logo15 = logoslink.logo15

logo16 = logoslink.logo16

logo17 = logoslink.logo17

limitefl = limitefll.limitefl

offline = false

numbernye = '0'

blocked = [] 

hitt = []

alekey = 'ale652'

keyale = "key-samuel/paulo-2.0"



const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
+ 'VERSION:3.0\n' 
+ 'FN:Nero\n' // Nome completo
+ 'ORG:Komi-bot;\n' // A organização do contato
+ 'TEL;type=CELL;type=VOICE;waid=${numerodono}:${numerodono}\n' // WhatsApp ID + Número de telefone
+ 'END:VCARD' // Fim do ctt



//=====================================\\


async function startAle() {

// ABAIXO: INÍCIO DE CONEXÃO

const { version, isLatest } = await fetchLatestBaileysVersion()
console.log(`usando WA v${version.join('.')}, é mais recente: ${isLatest}`)
  
console.log(banner3.string)   
console.log(banner2.string)
const conn = makeWASocket({
version,  
logger: P({ level: 'fatal' }),
printQRInTerminal: true,
auth: state
})

store.bind(conn.ev)

conn.ev.on('chats.set', () => {
//pode usar "store.chats" como quiser, mesmo depois que o soquete morre
// "chats" => uma instância keyedDB
console.log('Tem conversas', store.chats.all())
})

conn.ev.on('contacts.set', () => {
console.log('Tem contatos', Object.values(store.contacts))
})

//===============(BEM VINDO)=============\\


conn.ev.on('group-participants.update', async (ale) => {
  
const groupMetadata = await conn.groupMetadata(ale.id) 
  
const mdata = await conn.groupMetadata(ale.id)  


// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(ale)
if(dbackid.indexOf(ale.id) >= 0) {
if (ale.action == 'add'){ 
num = ale.participants[0]
var ind = dbackid.indexOf(ale.id)
if(adeuscara[ind].actived && adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await conn.sendMessage(mdata.id,{text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
conn.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
return
}
}
}

// FIM LISTANEGRA CONST ^

//////////////////VERCAD///////////////////

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}

//////////////////

// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 

if(antifake.includes(ale.id)) {
if (ale.action === 'add' && !ale.participants[0].startsWith(55)){
num = ale.participants[0]
conn.sendMessage(mdata.id, {text: ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️'})
await delay(1000)
conn.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
}
}

if(antifake.includes(ale.id)) {
if (ale.action === 'add' && ale.participants[0].startsWith(55800)){
num = ale.participants[0]
conn.sendMessage(mdata.id, {text: ' ⛹️⛹️Bye Bye Estrangeiro...👋🏌️'})
await delay(1000)
conn.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
}
}

// FIM ANTIFAKE ^

// BEM VINDO COMPLETO 


if(welkom.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {
  
// PEGAR DESCRIÇÃO DO GRUPO. 

const groupDesc = await groupMetadata.desc  
  
try {
ppimg = await conn.profilePictureUrl(ale.participants[0])
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

try {
ppgp = await conn.profilePictureUrl(mdata.id)
} catch {
ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgp}`)

const groupIdWelcomed = []
const groupIdBye = []
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)
for(let obj of bye_group) groupIdBye.push(obj.id)


const isByed = groupIdBye.indexOf(ale.id) >= 0 ? true : false

const isWelcomed = (groupIdWelcomed.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(ale.id)
teks = welcome_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata.subject)
}
let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
await fs.writeFileSync(ran, buff)

fs.unlinkSync(ran)
imgbuff = await getBuffer(`https://aleatoryapi.herokuapp.com/welcome?titulo=BEM%20VINDO(A)&nome=${ale.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeUrl(mdata.subject)}`)
conn.sendMessage(mdata.id, {image: imgbuff, 
mentions: ale.participants, caption: teks})

} else if(ale.action === 'remove') {
mem = ale.participants[0]

try {
ppimg = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}


if(isByed) {
var ind = groupIdBye.indexOf(ale.id)
teks = bye_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)

imgbuff = await getBuffer(`https://aleatoryapi.herokuapp.com/welcome?titulo=Adeus&nome=${ale.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=SAIU DE ${encodeUrl(mdata.subject)}`)
conn.sendMessage(mdata.id, {image: imgbuff, caption: teks, 
mentions: ale.participants})
 fs.unlinkSync(ran)

}
} catch (e) {
console.log(e);
}
}
})
// FIM ^


// BEM VINDO 2 ( SEM FOTO )

conn.ev.on('creds.update', saveState);
conn.ev.on('group-participants.update', async (ale) => {
 

if(welkom2.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {

const groupMetadata = await conn.groupMetadata(ale.id) 
  
const mdata = await conn.groupMetadata(ale.id)  

// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await groupMetadata.desc

const groupIdWelcomed2 = []
const groupIdBye2 = []
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)
for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isByed2 = groupIdBye2.indexOf(ale.id) >= 0 ? true : false

const isWelcomed2 = (groupIdWelcomed2.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(ale.id)
teks = welcome_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata.subject)
}

conn.sendMessage(mdata.id, {text: teks}, {mentions: ale.participants})

} else if(ale.action === 'remove') {
mem = ale.participants[0]

if(isByed2) {
var ind = groupIdBye2.indexOf(ale.id)
teks = bye_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

conn.sendMessage(mdata.id, {text: teks}, {mentions: ale.participants})
 fs.unlinkSync(ran)
}
} catch (e) {
console.log(e);
}
}
})
// FIM BEM VINDO (2)

conn.ev.on('chats.set', item => console.log(`recv ${item.chats.length} Chats (is latest: ${item.isLatest})`))

conn.ev.on('messages.set', item => console.log(`recv ${item.messages.length} Mensagens (is latest: ${item.isLatest})`))

conn.ev.on('contacts.set', item => console.log(`recv ${item.contacts.length} Contatos`))


conn.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages ? messages[0]: messages[1]
if (!info.message) return 
saveState()
if (info.message.protocolMessage) return 
if(info.message > 1000) return
await conn.sendReadReceipt(info.key.remoteJid, info.key.participant, [info.key.id])
if (info.key && info.key.remoteJid == 'status@broadcast') return

const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

global.prefix

global.blocked

const content = JSON.stringify(info.message)
const speed = require('performance-now');
const from = info.key.remoteJid
const isGroup = from.endsWith('@g.us')

//==============(BODY)================\\
var body = (type === 'conversation') ? info.message.conversation : (type === 'imageMessage') ? info.message.imageMessage.caption : (type === 'videoMessage') ? info.message.videoMessage.caption : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

//================(BADY)================\\

bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//=======================================\\


//===============(BUDY)==================\\

budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''


button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedDisplayText : ''
button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
listMessage = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

const listMessageyp = (from, title, desc, list) => { 
po = conn.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Selecione","listType": 1,"sections": list}}, {})
return conn.relayWAMessage(po, {waitForAck: true})
}
listmes = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''




//======================================\\

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

//===========(ID DAS FIGUS)===========\\

const figura = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""

//=====================================\\

const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)

const botNumber = conn.user.id.split(':')[0]+'@s.whatsapp.net'
const argss = body.split(/ +/g)
const testat = body
const ants = body
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(' ')

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

const numerodono = [`${nmrdn}`, `${nescessario.dono1}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./armor/js/infosorteio.js')

//===========(enviar.espere)=============\\

const { mensagens } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\

//=======(ADMS/DONO/ETC..CONST)========\\

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot

const DonoOficial = setting.numerodono.includes(sender) 

const isPremium = premium.includes(sender)

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false 

//============(FUNÇÕES)============\\

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const isVote = isGroup ? voting.includes(from) : false

const isModobn =  isGroup ? modobn.includes(from) : true

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isBanned = ban.includes(sender)

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiLink = isGroup ? antilink.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isnit = nit.includes(sender) 

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const ischyt = chyt.includes(sender)

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrao = isGroup ? palavrao.includes(from) : false	

const isViewOnce = (type == 'viewOnceMessage')

//=======================================\\

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
}
}

//=========(CONSTS-FUNÇÕES)============\\

const isWelkom = isGroup ? welkom.includes(from) : false

const issupre = supre.includes(sender)

const isLevelingOn = isGroup ? _leveling.includes(from) : false

const isBanchat = isGroup ? bancht.includes(from) : false	

//=====================================\\



//==========(VERIFICADO)===============\\

const selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`, 'jpegThumbnail': fs.readFileSync('./logos/logo2.jpg')}}}

//=====================================\\

const reply = (teks) => {
conn.sendMessage(from, {text: teks, contextInfo:{"externalAdReply": {"title": `${NomeDoBot}`,"body": `𝐊𝐎𝐌𝐈-𝐌𝐃`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./logos/logo1.jpg`),"sourceUrl": " "}}}, {quoted: info})}

const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.id)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await conn.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  


const isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}	

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }


const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const sendSticker = (from, filename, info) => {
conn.sendMessage(from, {sticker: filename}, {quoted: info})
}

const sendImage = (ytb) => {
conn.sendMessage(from, {image: ytb}, {quoted:info})
}


const sendMess = (hehe, ytb) => {
conn.sendMessage(hehe, {text: ytb})
}


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
conn.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}


const groupIdWelcomed = []	
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)

const groupIdBye = []
for(let obj of bye_group) groupIdBye.push(obj.id)

const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	
	
//=====(FUNÇÃO-CHECAR-LIMIT)====\\
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return conn.sendMessage(from,{text: `[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível...`},{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
conn.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json', JSON.stringify(_limit))
conn.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
}
} 
							
	//funtion limitado
const isLimit = (sender) =>{ 
if (issupre) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
conn.sendMessage(from, {text: jrpl.limitend(pushname)}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json',JSON.stringify(_limit))
return false
}
}
	
const sendFileFromUrl = async (from, url, caption, info, men) => {
let mime = ''; 
let res = await axios.head(url)
mime = res.headers['content-type'] 
if (mime.split("/")[1] === "gif") { 
return conn.sendMessage(from, {video: await getBuffer(url),
caption: caption, gifPlayback: true, 
mentions: men ? men : []}, {quoted: info}) 
}
 
let type = mime.split("/")[0]+"Message" 
if(mime === "application/pdf"){ 
return conn.sendMessage(from, {document: await getBuffer(url), mimetype: 'application/pdf', 
caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 

if(mime.split("/")[0] === "image"){ 
return conn.sendMessage(from, {image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: info}) 
}
if(mime.split("/")[0] === "video"){ 
return conn.sendMessage(from, {video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 
if(mime.split("/")[0] === "audio"){ 
return conn.sendMessage(from, {audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: info}) 
}
}
	
const sendMediaURL = async(to, url, text ="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
conn.sendMessage(to, {type: media, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}}, { quoted: info})
fs.unlinkSync(filename)
});
}   

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

// ENVIAR BOTÃO COM TEXTO
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

// ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

// PRA ENVIAR BOTÃO DE TEMPLATE
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
conn.sendMessage(id, templateMessage, {quoted: vr})
}

const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
conn.sendMessage(from, {sticker: bla}, {quoted: info})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.includes(`@${nmrdnofc1}`)) {
const tabelin = JSON.parse(fs.readFileSync(`./func/afk/afk-@${nmrdnofc1}.json`));  

txt = `- Olá, o ${NickDono} Está ausente.\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensagem de ausência : ${tabelin.Motivo_Da_Ausência}`

conn.sendMessage(from, {text: txt}, {quoted: info})
}
}
 
if(isGroup) {
if(info.message == "inviteLinkGroupType") return reply("oi") 
}
 
 
//========================================\\
//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins && !SoDono){
if (!isGroupAdmins && !SoDono) return
if (budy.toLowerCase().startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
//========================================\\



//==========(FUNÇÃO DE LEVEL)=============\\
//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
bla = fs.readFileSync('./audios/level.mp3')
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
gzx = fs.readFileSync('./logos/logo2.jpg')
rafa = `            ◪ LEVEL UP ◪\n\n├─ ❏ NÚMERO: ${sender.split("@")[0]}.                                                                                       ├─ ❏ *PATENTE*: ${patt}\n├─ ❏ XP: ${getLevelingXp(sender)}\n└─ ❏ LEVEL: ${getLevel} -> ${getLevelingLevel(sender)}`
await conn.sendMessage(from, {image: gzx, caption: rafa})
}
} catch (err) {
console.error(err)
}
}
//=======================================\\
//=======================================\\



const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
conn.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}


//===================================\\

		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./armor/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { conn.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
conn.sendMessage(from, {text:`
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────
`}) 
}, 5000)
}}

//========================================\\


		//JOGO QUIZ
if(isGroup && fs.existsSync(`./armor/quizanim-${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
conn.sendMessage(from,{text: `Parabéns ${pushname} você acertou\n${dataAnagramaa.original}\nProximo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/quizanim-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
if(verificado === true) {
await conn.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
} else {
await conn.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: info})  
}
}, 5000)
}}

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             

///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff)
}
if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff1 = `*「 ❗ 」Flood detectado, espere 5 segundos*`
return reply(ff1)
}

//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')

////FIMMMMMMMMM/////,

if (!isGroup && isCmd) console.log('\033[0;35m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]))

if (!isGroup && !isCmd && !info.key.fromMe) console.log('\033[0;35m~\x1b[1;37m>', '[\033[0;35mMENSAGEM\x1b[1;37m]', 'do ', color(sender.split('@')[0]))

if (isCmd && isGroup) console.log('\033[0;35m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))

if (!isCmd && isGroup && !info.key.fromMe) console.log('\033[0;35m~\x1b[1;37m>', '[\033[0;35mMENSAGEM\x1b[1;37m]',  'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))
//======(JOGO-DA-VELHA)=======(Função)===\\

//////////_FUNÇÕES DO JOGO DA VELHA_//////
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatAccept}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
 conn.sendMessage(from, {text:
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`}, {quoted: info,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)

conn.sendMessage(from, {text: chatWon}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou "${abt}" em xp por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 
} 
}


//=================================\\

async function AntilinkHardF() {
if(isUrl(body) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
linkgpp = await conn.groupInviteCode(from)
if(!isUrl(body)) return 
if(budy.match(`${linkgpp}`)) return 
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
}

if(isUrl(body) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if(!isUrl(body)) return 
reply('*Link detectado, punindo usuário...*')
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
} 
AntilinkHardF()
joguinhodavelha()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy.includes("chat.whatsapp.com/")){
if(!budy.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, punindo usuário...*')
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
}

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\


//============(EVAL-EXECUÇÕES)===========\\

if (budy.startsWith('>')){
try {
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && !issupre && !ischyt) return
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))

return reply(JSON.stringify(eval(budy.slice(2)),null,'\t')) 
} catch (e){
reply(e)
}
}

if (budy.startsWith('=>')){
try {
if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}

reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch (e) {
reply(String(e))  
}
}


if (body.startsWith('$')) {
if(!SoDono && !isnit) return 
if (!q && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && bady.length < 100) return  
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return conn.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
//=======================================\\


//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !SoDono && !isnit && !isPremium){ 
	reply('*Antipv ativado pv e proibido, você será bloqueado!*\n*Contate o criador*\nwa.me/558592492932\nGrupo: https://chat.whatsapp.com/E2Ea6Q8w50GG9ELcAt9BwV')
delay(4000)
conn.updateBlockStatus(sender, 'block')
return
}
//======================================\\


//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && banChats === true) return reply(`Olá, sou uma inteligência artificial, programado(a) para realizar ações, por adms e o dono, se você está enviando mensagem, provavelmente você não sabe disso, eu removo diariamente pessoas por enviar links e muito mais..`)
const atibot = info.isBaileys
if (atibot === true) return 


//======================================\\

// ANTI_LIGAR \\

if(isAnticall) {
conn.ws.on('CB:call', async (B) => {
if (B.content[0].tag == 'offer') {
conn.sendMessage(B.content[0].attrs['call-creator'], { text: "Não pode ligar para o bot, você será bloqueado.." }).then(() => { 
delay(4000)
conn.updateBlockStatus(B.content[0].attrs['call-creator'], "block") })
}
})
}

//==SISTEMA DE VOTAÇÃO: CRÉDITOS: KAUAN==\\
if(isGroup) {
if (budy.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Vote\n*duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
//======================================\\


//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
            
if (isBanned) return
BannedExpired(ban)

if (isCmd && !SoDono && !isnit && !issupre && !ischyt) addFilter(sender)


switch (figura) {
  
case 'PhBL0PtpQ7pESrESQNgLuXpPJfhblay8ykTUfOH3xpRXYw=':
bla = fs.readFileSync('./audios/qviado.mp3')
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
break
}

//INICIO DE COMANDO DE PREFIXO
switch(command) {
 
//=========(-MENUS-DE-CMDS-)========\\

case 'menu': case 'comandos': case 'help':
kael = fs.readFileSync("./audios/aguarde.mp3")
conn.sendMessage(from, {audio: kael, mimetype: 'audio/mp4', ptt:true})
sendBimgT(from, `${logo}`, menu(prefix, NomeDoBot, hora, date, NickDono, numerodono, pushname), "KOMI-SAN_OFC", [{index: 1, urlButton: {displayText: 'KOMI', url: 'https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw'}},
{index: 2, urlButton: {displayText: 'GRUPO', url: 'https://chat.whatsapp.com/E2Ea6Q8w50GG9ELcAt9BwV'}},
{index: 2, quickReplyButton: {displayText: '▧⃟  <DONO>  ▧⃟', id: `${prefix}dono`}},
{index: 2, quickReplyButton: {displayText: '🚨MENU ADM🚨', id: `${prefix}menuadm`}}, 
{index: 3, quickReplyButton: {displayText: '☔LISTA MENU☔', id: `${prefix}lista`}}], selo)
break

case 'logos':
case 'menulogo':
case 'menulogos':  
sendBimg(from, `${logo7}`, menulogos(prefix), "KOMI-SAN_OFC", [
{buttonId: `${prefix}menuadm`, buttonText: {displayText: `🚨ADMS🚨`}, type: 1}, {buttonId: `${prefix}menubasico`, buttonText: {displayText: `🪐BASICO🪐`}, type: 1}], selo)
break 

case 'menubasico':
case 'basico':
sendBimg(from, `${logo9}`, menubasico(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}lista-midia`, buttonText: {displayText: `🐧MIDIA🐧`}, type: 1}, {buttonId: `${prefix}menudono`, buttonText: {displayText: `🍻DONO🍻`}, type: 1}], selo) 
break 

case 'menuinfo':
case 'info':
sendBimg(from, `${logo14}`, menuinfo(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}menuplay`, buttonText: {displayText: `🎧PLAY🎧`}, type: 1}, {buttonId: `${prefix}menulogos`, buttonText: {displayText: `🌸LOGOS🌸`}, type: 1}], selo) 
break 

case 'menuplay':
case 'menuply':
sendBimg(from, `${logo15}`, menuplay(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}figurinhas`, buttonText: {displayText: `⚠️FIGU⚠`}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: `☔MENU☔'`}, type: 1}], selo) 
break 

case 'figu':
case 'figurinhas':
sendBimg(from, `${logo12}`, figurinhas(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}menuinfo`, buttonText: {displayText: `🚸INFO🚸`}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: `☔MENU☔'`}, type: 1}], selo) 
break 

case 'menuadm':
case 'menuadms':
case 'adm':  
sendBimg(from, `${logo2}`, adms(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}efeitosimg`, buttonText: {displayText: `📍EFEITOS📍`}, type: 1}, {buttonId: `${prefix}jogos`, buttonText: {displayText: `🕹️JOGOS🕹`}, type: 1}], selo) 
break 

case 'menuanime':
case 'menuanimes':
case 'animes':  
sendBimg(from, `${logo11}`, animes(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}efeitosimg`, buttonText: {displayText: `📍EFEITOS📍`}, type: 1}, {buttonId: `${prefix}lista-midia`, buttonText: {displayText: `⚠️MIDIA⚠️`}, type: 1}], selo) 
break 


case 'menudono':
case 'donomenu': 
 if(!SoDono) return reply('Só Dono pode utilizar este comando') 
sendBimg(from, `${logo3}`, menudono(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}menuinfo`, buttonText: {displayText: `🚸INFO🚸`}, type: 1}, {buttonId: `${prefix}menuadms`, buttonText: {displayText: `🚨ADMS🚨`}, type: 1}], selo) 
break 

case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'efeitosmarcar':  
sendBimg(from, `${logo5}`, efeitos(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}lista-midia`, buttonText: {displayText: `🐧MIDIA🐧`}, type: 1}, {buttonId: `${prefix}menuinfo`, buttonText: {displayText: `🚸INFO🚸`}, type: 1}], selo)
break 

case 'alteradores': 
sendBimg(from, `${logo8}`, alteradores(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}menujogos`, buttonText: {displayText: `🕹️JOGOS🕹`}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: `☔MENU☔`}, type: 1}], selo) 
break 

case 'menujogos':
case 'jogos':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modo jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`) 
sendBimg(from, `${logo6}`, jogos(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}menubasico`, buttonText: {displayText: `🪐BASICO🪐`}, type: 1}, {buttonId: `${prefix}menu`, buttonText: {displayText: `☔MENU☔`}, type: 1}], selo) 
break 

case 'menupremium':
case 'menuprem':
sendBimg(from, `${logo4}`, menuprem(prefix), `KOMI-SAN_OFC`, [
{buttonId: `${prefix}menu`, buttonText: {displayText: `☔MENU☔`}, type: 1}, {buttonId: `${prefix}menubasico`, buttonText: {displayText: `🪐BASICO🪐`}, type: 1}], selo) 
break 




///////////////LISTA-DE-MENUS-//////////////


case 'lista':
sections = [
    {
	title: "𝚝𝚘𝚍𝚘𝚜 𝚘𝚜 𝚖𝚎𝚗𝚞𝚜",
	rows: [
	    {title: "☔MENU☔", rowId: `${prefix}menuss`, description: "menu principal"},
	    {title: "🚨ADMS🚨", rowId: `${prefix}menuadms`, description: "menu dos adms"},
	    {title: "🕹️JOGOS🕹️", rowId: `${prefix}jogos`, description: "Menu de jogos"},
	    {title: "🍥LOGOS🍥", rowId: `${prefix}menulogos`, description: "menu de logos"},
	    {title: "📍EFEITOS📍", rowId: `${prefix}efeitosimg`, description: "menu pra modificar img"},
	    {title: "〽️FIGU〽️", rowId: `${prefix}figurinhas`, description: "menu de sticker entre outros"},
	    {title: "♻️ALTERA♻️️", rowId: `${prefix}alteradores`, description: "menu de altera img etc..."},
	    {title: "🧊BASICO🧊️", rowId: `${prefix}menubasico`, description: "menu com comandos aleatorios"},
	    {title: "🍻ANIMES🍻", rowId: `${prefix}menuanime`, description: "menu geek dos mas diversos assuntos"},   	    	 	    	    {title: "🪙PREMIUM🪙", rowId: `${prefix}menuprem`, description: "menu pros vips"},
	    {title: "🎧PLAY🎧", rowId: `${prefix}menuply`, description: "menu de baixa música, vídeo etc.."},
	    	    	    {title: "✅DONO✅", rowId: `${prefix}donomenu`, description: "menu pro dono da komi-bot"},
	    	    {title: "⚙️INFO⚙️", rowId: `${prefix}info`, description: "menu de informações"},
	 	]
    },
{
	 title: "LISTRA extra",
	 rows: [
	   	    {title: "⚠️LISTA-MIDIA⚠️", rowId: `${prefix}lista-midia`, description: "lista de vídeos"},
	    	    {title: "🌐LISTA-APPS🌐", rowId: `${prefix}lista-apps`, description: "lista de apps"},
	    {title: "🄽🄴🅁🄾-🅂🄰🄽", rowId: `${prefix}nero`, description: "informaçoes em audio sobre os criadores da komi"},
	    {title: "🅂🄰🄼🅄🄴🄻", rowId: `${prefix}samuel`, description: "canal dos criadores e informaçoes"},
	]
    },
]

bla = fs.readFileSync('./audios/aguarde.mp3')
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
gzx = await getBuffer(`${logo3}`)
horra = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
raf = `۞╦═════════════۞
┌┤ ⎙  Informações Dono/Bot
║╞═════════════۞
╭═ ೋ•✧๑💎๑✧•ೋ •═╮ 
 =====  ツ 𝙺𝙾𝙼𝙸-𝙱𝙾𝚃 ツ=====
╰═ ೋ•✧๑💎๑✧•ೋ •═╯ 
╰╼━═━━≺ ♤ ≻━═━╾─╯
╎☆ۣۜۜ͜͡ 🐼dono:${NickDono}
╎
╎☆ۣۜۜ͜͡🗓️data: ${date}
╎
╎☆ۣۜۜ͜͡⏰hora: ${horra} 
╎
╎☆ۣۜۜ͜͡✅ { wa.me/559185841876
╎
╎☆ۣۜۜ͜͡ ⚠️prefix: { ${prefix}  }
╎
╰╼━═━≺ ♤ ≻━━═━─╯`
await conn.sendMessage(from, {image: gzx, caption: raf})

listMessage2 = {
text: `💯ⓚⓞⓜⓘ-ⓢⓐⓝ💯`,
  footer: `Olá ${pushname}, aqui está minha lista de menu, leia com atenção.`,
  title: "𝚕𝚒𝚜𝚝𝚊-𝚖𝚎𝚗𝚞𝚜",
  buttonText: "CLIQUE AQUI",
  sections
}
sendMsg = await conn.sendMessage(from, listMessage2)
break

case 'lista-midia':
sections = [
    {
	title: "𝚝𝚘𝚍𝚊𝚜 𝚊𝚜 𝚖𝚒𝚍𝚒𝚊𝚜",
	rows: [
	    {title: "⚠️MIDIA⚠️", rowId: `${prefix}video1`, description: "ze latinha e ze da timba"},
	    {title: "⚠️MIDIA2⚠️", rowId: `${prefix}video2`, description: "call out my name"},
	    {title: "⚠️MIDIA3⚠️️", rowId: `${prefix}video3`, description: "billie eilish_happier "},
	    {title: "⚠️MIDIA4⚠️", rowId: `${prefix}video4`, description: "ghostemane_I duckinf"},
	    {title: "⚠️MIDIA5⚠️", rowId: `${prefix}video5`, description: "edit_vai me dar na dz7"},
	    {title: "⚠️MIDIA6⚠️️", rowId: `${prefix}video6`, description: "cover_ópera 2 vitas"},
	    {title: "⚠️MIDIA7⚠️", rowId: `${prefix}video7`, description: "nirvana_smells-like"},
	    {title: "⚠️MIDIA8⚠️️", rowId: `${prefix}video8`, description: "mc noia_tu de 4"},
	    {title: "⚠️MIDIA9⚠️️", rowId: `${prefix}video9`, description: "tavin_isso vale minha vida"},
	    {title: "⚠️MIDIA10⚠️", rowId: `${prefix}video10`, description: "the weeknd_repeat after"},
	    {title: "⚠️MIDIA11⚠️", rowId: `${prefix}video11`, description: "joji_yeah right"},
	    {title: "⚠️MIDIA12⚠️", rowId: `${prefix}video12`, description: "joji_slow dancing"},
	    {title: "⚠️MIDIA13⚠️", rowId: `${prefix}video13`, description: "joji_gimme love"},
	    {title: "⚠️MIDIA14⚠️", rowId: `${prefix}video14`, description: "edit_kira-kamaitachi-psicopata"},
	    {title: "⚠️MIDIA15⚠️", rowId: `${prefix}video15`, description: "luccas_pensando coisas 2"},
	    
	]
    },
]

bla = fs.readFileSync('./audios/aguarde.mp3')
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
gzx = await getBuffer(`${logo17}`)
horra = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
raf = `۞╦═════════════۞
┌┤ 🐼𝙻𝙸𝚂𝚃𝙰/ 𝚖𝚒𝚍𝚒𝚊🐼
║╞═════════════۞
║║  ⚠︎ˡⁱˢᵗᵃ-ᵐⁱᵈⁱᵃ⚠︎
║╰━━━━──  ──━━━━۞
╭───────────────
┝〢 
┝〢ۣۜۜ͜͡ 🐼dono:${NickDono}
┝〢  
┝〢ۣۜۜ͜͡ 🗓️data: ${date}
┝〢 
┝〢 ۣۜۜ͜͡⏰hora: ${horra} 
┝〢 
┝〢 ۣۜۜ͜͡✅ { wa.me/559185841876
┝〢  
┝〢  ۣۜۜ͜͡ ⚠️prefix: { ${prefix}  }
┝〢 
╰─────────────╯`
await conn.sendMessage(from, {image: gzx, caption: raf})

listMessage2 = {
text: `🐼ⓚⓞⓜⓘ-ⓢⓐⓝ🐼`,
  footer: `Olá ${pushname}, aqui está minha lista de midia atualizada.`,
  title: "𝚕𝚒𝚜𝚝𝚊-𝚖𝚒𝚍𝚒𝚊",
  buttonText: "CLIQUE AQUI",
  sections
}
sendMsg = await conn.sendMessage(from, listMessage2)
break



//////////////////FIM///////////////////////


case 'configurar-bot':
await conn.sendMessage(from, {text: configbot(prefix)}, {quoted: selo})
break

case 'comandos-termux':
await conn.sendMessage(from, {text: cmd_termux(prefix)}, {quoted: selo})
break

case 'hospedar-heroku':
await conn.sendMessage(from, {text: hospedar(prefix)}, {quoted: selo})
break

case 'destrava':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
break 

case 'perfil':
try {
ppimg = await conn.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const asLvl = getLevelingLevel(sender)
const ssXp = getLevelingXp(sender)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`
if(verificado === true) { 
daftarimg = await getBuffer(ppimg)
conn.sendMessage(from, {image: daftarimg, caption: dptr}, {quoted: selo})
} else {
daftarimg = await getBuffer(ppimg)
conn.sendMessage(from, {image: daftarimg, caption: dptr}, {quoted: info})  
}
break

case 'frases':
case 'frase':
try {
ppimg = await conn.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

hehe = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
if (hehe.error) return reply(hehe.error)
ccg =
`
  ‣ Author: ${hehe.Author}
 
  ‣ Criador: ${hehe.Criador}
 
  ‣ Frase: 
 
  ${hehe.Frase}\n`
daftarimg = await getBuffer(ppimg)
await conn.sendMessage(from, {image: daftarimg, caption: ccg}, {quoted:info})
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosb} 

> Bot: ${NomeDoBot}
> Grupo: ${groupName}`
await conn.sendMessage(from, {text: jr}, {quoted:info, contextInfo: {"mentionedJid": jr}})
break

case 'tabela':
if(verificado === true) {
await conn.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
} else {
await conn.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: info})  
}
break 

case 'destrava2':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, {text: destrava2 (prefix)}, {quoted: info})
break 

case 'infovotação':
case 'infovotacao':  
if(verificado === true) {  
await conn.sendMessage(from, {text: infovotacao(prefix, pushname)}, {quoted: selo})
} else {
await conn.sendMessage(from, {text: infovotacao(prefix, pushname)}, {quoted: info})  
}
break

case 'infobemvindo':
case 'infobv':  
if(verificado === true) {   
await conn.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
} else {
await conn.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: info})  
}
break

case 'idiomas':
case 'idioma':
txt = `  
IDIOMAS DO GTTS OU DO TRADUTOR

EXEMPLO :

>> ${prefix}gtts pt (texto)

>> ${prefix}traduzir pt/(texto)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'eo': 'Esperanto',
'fi': 'Finnish',
'fr': 'French',
'de': 'German',
'el': 'Greek',
'ht': 'Haitian Creole',
'hi': 'Hindi',
'hu': 'Hungarian',
'is': 'Icelandic',
'id': 'Indonesian',
'it': 'Italian',
'ja': 'Japanese',
'ko': 'Korean',
'la': 'Latin',
'lv': 'Latvian',
'mk': 'Macedonian',
'no': 'Norwegian',
'pl': 'Polish',
'pt': 'Portugues',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'
 
🔥${setting.NomeDoBot}🔥`

if(verificado === true) { 
conn.sendMessage(from, {text: txt}, {quoted: selo})
} else {
conn.sendMessage(from, {text: txt}, {quoted: selo})  
}
break


case 'programador':
case 'vcard':
case 'criador': 
inff = await conn.sendMessage(from,{ 
contacts: { 
displayName:`${NomeDoBot}`, 
contacts: [{ vcard }] 
}})
conn.sendMessage(from, {text:'Aǫᴜɪ ᴇsᴛᴀ́ ᴏ ᴄᴏɴᴛᴀᴛᴏ ᴅᴏ ᴍᴇᴜ ᴘʀᴏɢʀᴀᴍᴀᴅᴏʀ.\nᴄᴀsᴏ ᴠᴏᴄᴇ̂ ᴜsᴇ ɪᴍᴜɴᴇ!!\nhttps://wa.me/+559185841876\nᴄʜᴀᴍᴀ ʟᴀ ᴠɪᴅᴀ ♨️'},{quoted: inff})
break


  case 'dono':
sendBimg(from,`${logo3}`, `𝐀𝐪𝐮𝐢 𝐝𝐞𝐢𝐱𝐨 𝐂𝐓𝐓 𝐝𝐨 𝐦𝐞𝐮 𝐃𝐎𝐍𝐎 𝐒𝐞 𝐪𝐮𝐢𝐬𝐞𝐫 𝐩𝐨𝐝𝐞 𝐚𝐭𝐞́ 𝐬𝐞 𝐢𝐧𝐬𝐜𝐫𝐞𝐯𝐞𝐫 𝐧𝐨 𝐜𝐚𝐧𝐚𝐥 𝐝𝐨 𝐜𝐫𝐢𝐚𝐝𝐨𝐫 𝐩𝐫𝐚 𝐟𝐢𝐜𝐚𝐫 𝐩𝐨𝐫 𝐝𝐞𝐧𝐭𝐫𝐨 𝐝𝐚𝐬 𝐚𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜̧𝐨̃𝐞𝐬:${NickDono}`,`𝐒𝐞 𝐪𝐮𝐢𝐬𝐞𝐫 𝐩𝐨𝐝𝐞 𝐚𝐭𝐞́ 𝐬𝐞 𝐢𝐧𝐬𝐜𝐫𝐞𝐯𝐞𝐫 𝐧𝐨 𝐜𝐚𝐧𝐚𝐥 𝐝𝐨 𝐜𝐫𝐢𝐚𝐝𝐨𝐫 𝐩𝐫𝐚 𝐟𝐢𝐜𝐚𝐫 𝐩𝐨𝐫 𝐝𝐞𝐧𝐭𝐫𝐨 𝐝𝐚𝐬 𝐚𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜̧𝐨̃𝐞𝐬:${NickDono}`,
[{buttonId:`${prefix}yt`, buttonText: {displayText: '𝐂𝐀𝐍𝐀𝐋 𝐃𝐎 𝐂𝐑𝐈𝐀𝐃𝐎𝐑'}, type: 1},
{buttonId:`${prefix}site`, buttonText: {displayText: '𝐒𝐈𝐓𝐄 𝐃𝐎 𝐁𝐎𝐓'}, type: 1},
{buttonId:`${prefix}criador`, buttonText: {displayText: '𝐂𝐓𝐓 𝐃𝐎𝐍𝐎'}, type: 1}], info)
break

case 'site':
reply(`conectando ao site da komi-bot....`)
buttons = [
{buttonId: `site`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/18b0c8a0c99bb1388f6d3.mp4'},
caption: "👉https://linktr.ee/Komibot👈",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'yt':
reply(`conectando ao canal komi-bot...`)
buttons = [
{buttonId: `yt`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b8a112b0ddb3f8b618c08.mp4'},
caption: "👉https://youtu.be/lDaWwoG5LH4👈",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nero':
reply(`conectando ao número do dono...`)
buttons = [
{buttonId: `nero`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4f762f7bf092644f58967.mp4'},
caption: "➪🄽🄴🅁🄾-🅂🄰🄽➪                            🚸http://wa.me//559185841876🚸",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'samuel':
reply(`conectando ao número do dono...`)
buttons = [
{buttonId: `samuel`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3e9f118610b725d7ebe4b.mp4'},
caption: "➪Ⓢ︎Ⓐ︎Ⓜ︎Ⓤ︎Ⓔ︎Ⓛ︎➪                              🚸http://Wa.me//558592492932🚸",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'infocontador':
if(verificado === true) {   
await conn.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
} else {
await conn.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: info})  
}
break

case 'databoton':
if(verificado === true) {  
await conn.sendMessage(from, {text: databoton(prefix)}, {quoted: selo})
} else {
await conn.sendMessage(from, {text: databoton(prefix)}, {quoted: info})  
}
break

case 'infolistanegra':
if(verificado === true) {
await conn.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
} else {
await conn.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: info})  
}
break

case 'infopalavrão':
case 'infopalavrao':
if(verificado === true) {
await conn.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
} else {
await conn.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: info})  
}
break

case 'infobancarac':
if(verificado === true) {
await conn.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
} else {
await conn.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: info})  
}
break

case 'wallpaper': {
                if (args.length < 1) return reply('qual o tema??')
                return reply('espere um pouquinho')
                piing = '${result.image[2] || result.image[1] || result.image[0]}'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(args.length < 1)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `${prefix + command} ${texto}`, buttonText: {displayText: 'Próxima imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Tema : ${result.title}\n Categoria : ${result.type}\n`,
                    footer: 'Caso queira outra imagem aperte o botão abaixo',
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: mek })
            }
            break



case 'gimage':
case 'googleimage':
case 'img':
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[DEV]', 'cyan'), color('[❗] PROCURANDO...', 'magenta'))
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random = gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl({image: random, caption: `${teks}`}, {quoted: info})
}
}
await limitAdd(sender)
break

//========(ANIMES/HENTAi/PORNO)==========\\ 


case 'porno':
if(!isGroup) return reply(enviar.msg.isGroup)
if (isBanned) return 
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
try {
var porno = await fetchJson(`https://mnazria.herokuapp.com/api/porn?search=${encodeURIComponent(q)}`, {method: 'get'})
} catch {
return await conn.sendMessage(from, {text: '*Pesquisa não encontrada!* Teste novamente com outras palavras.'}, {quoted: info})
}
const xvideos = []
for (let x of porno.result) {
let data = {
rowId: `${prefix}xvideo  `+ x.url,
title: x.title,
description: `Duração: ${x.duration}`
}
xvideos.push(data)
}

const listMessageXvideos = {
  text: `*Pesquisado por:* ${q}`,
  footer: '_Selecione uma das opções e aperte em "Enviar"_',
  title: "🔞 *Porno Encontrado* 🔞",
  buttonText: "*LISTA DE PORNO*",
  sections: [
								{
									title: "Vídeos 🔞",
									rows: xvideos
								}
							]
}
sendMsg = await conn.sendMessage(from, listMessageXvideos, {quoted: selo})
break



case 'xvd':			
case 'xvds':
case 'xvideos':
case 'xvideo':
if (!SoDono && !isGroup) return reply(enviar.msg.adm)
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (isBanned) return 
try {
if (args.length < 1) return reply(`Você precisa colocar um link!\n Use: *_xvdss mia khalifa* (por exemplo) e use o link.`)
if (!isUrl(args[0]) && !args[0].includes('https://xvideos.com/')) return reply(ind.error.Iv)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
res = await fetchJson(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(res.mp4)
conn.sendMessage(sender, {video: buffer, mimetype: 'video/mp4'}, {quoted: info})
} catch (e) {
console.log(`Erro:`, color(e,'red'))
reply(`${e}`)
}
break

//========(FUNÇÕES-PREMIUM-AQUI)=======\\

case 'mediafire':
txt = args.join(" ")
if(!txt) return reply('Cade o Link?')
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/mediafire?url=${txt}&&apikey=${keyale}`)
reply(`*Enviando o Arquivo: ${bla.resultado[0].nama}\nPeso: ${bla.resultado[0].size}`)
blabla = await getBuffer(bla.resultado[0].link)
blabla1 = await getBuffer(bla.resultado[0].mime)
blabla2 = await getBuffer(bla.resultado[0].nama)
conn.sendMessage(from, {document:  blabla, mimetype: blabla1, fileName: blabla2}, {quoted: info}).catch(e => {
reply('ERROR')
})
break

case 'ler': 
case 'ocr':   
case 'lerfoto':  
if(!isPremium) return reply(enviar.msg.premium)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane 
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Somente fotos!')
}
break

case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${setting.NomeDoBot}* 」*────`
reply(tkks.trim())
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'id':
case 'figuid':
if (!SoDono && !info.key.fromMe) return 
if (isQuotedSticker) {
var figu = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
reply(figu)
}
break

case 'gerarcpf':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await conn.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
break

case 'cep':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
x = get_result.resultado
k = `CEP : ${x.cep}
LOGRADOURO: ${x.logradouro}
BAIRRO : ${x.bairro}
LOCALIDADE : ${x.localidade}
UF : ${x.uf}
IBGE : ${x.ibge}
GIA : ${x.gia}
DDD : ${x.ddd}
SIAFI : ${x.siafi}`
reply(k)
break 

case 'placa':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`http://api.ifindconsultas.tk/?token=2d6de38e-6c92-485e-bacb-db64139f8a02&placa=${query}`)
x = get_result
k = `CPF : ${x.cpf}
NOME: ${x.nome}
PLACA : ${x.placa}
CHASSI : ${x.chassi}
RENAVAM : ${x.renavam}
CIDADE : ${x.cidade}
UF : ${x.uf}
CATEGORIA : ${x.categoria}
COMBUSTÍVEL : ${x.combustivel}`
reply(k)
break 

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if (args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
conn.sendMessage(from, {text: dddlist}, {quoted: info})	
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/aleatoryconteudos`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
teks = args.join(" ")
if(!body.includes('1') && !body.includes('2') && !body.includes('3') && !body.includes('4') && !body.includes('5') && !body.includes('6') && !body.includes('7') && !body.includes('8') && !body.includes('9') && !body.includes('10')) return reply('KD O NÚMERO?')
if(body.includes("document") || body.includes("audio") || body.includes("pdf") || body.includes("apk") || body.includes("image") || body.includes("video") || body.includes("text") || body.includes("conn") || body.includes("reply") || body.includes("console") || body.includes("'") || body.includes('"')) return reply("KD O CÁLCULO?")
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
return reply(JSON.stringify(eval(`${teks}`),null,'\t'))
break 

case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
statuszada =
`╭╼╼╾❲ S T A T U S ❳╼╼╾╮
│
│➱ Antiaudio: ${isAntiAudio? '✓' : '✕'}
│➱ Antidocumento: ${Antidoc ? '✓' : '✕'}
│➱ Antifake: ${isAntifake ? '✓' : '✕'}
│➱ Antiimg: ${isAntiImg? '✓' : '✕'}
│➱ AntiSticker: ${isAntiSticker ? '✓' : '✕'}
│➱ Antilink: ${isAntiLink ? '✓' : '✕'}
│➱ Antiligação: ${isAnticall ? '✓' : '✕'}
│➱ AntiPv-Block: ${isAntiPv ? '✓' : '✕'}
│➱ AntilinkHard: ${isAntiLinkHard ? '✓' : '✕'}
│➱ LimiteCaracteres: ${isAntiFlood ? '✓' : '✕'}
│➱ AntiCatalogo: ${isAnticatalogo ? '✓' : '✕'}
│➱ AntiPalavrão: ${isPalavrao ? '✓' : '✕'}
│➱ Antivideo: ${isAntiVid ? '✓' : '✕'}
│➱ AntiLocalização: ${Antiloc ? '✓' : '✕'}
│➱ Bemvindo: ${isWelkom ? '✓' : '✕'}
│➱ Simih: ${isSimi ? '✓' : '✕'}
│➱ Modo jogos: ${isModobn ? '✓' : '✕'}
│
╰╼╾❲ ${NomeDoBot} ❳╼╾╯`
if(gifmenu === false) {
wew = await getBuffer(`${logo}`)
conn.sendMessage(from, {image: wew, caption: statuszada, thumbnail: null})
} else {
wew = await getBuffer(`${logo}`)
conn.sendMessage(from, {video: wew, caption: statuszada, gifPlayback: true})  
}
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
conn.groupUpdateSubject(from, `${blat}`)
conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'descgp':
case 'descriçãogp':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
conn.groupUpdateDescription(from, `${blabla}`)
conn.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await conn.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.id)
}
conn.sendMessage(from, {text: teks, contextInfo:{mentionedJid: mem}}, {quoted: info})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'linkgp':
case 'linkgroup':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'revogarlink':
  if (!SoDono && !info.key.fromMe) return reply(`Você não e o meu dono, so ele pode usar esse comando kkkk`)
const code =  conn.groupRevokeInvite(from, "abcd-xyz@g.us")
    console.log("New group code: " + code)
    break

case 'grupo':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
buttons = [
  {buttonId: `${prefix}abrir2`, buttonText: {displayText: 'ABRIR✅'}, type: 1},
  {buttonId: `${prefix}fechar2`, buttonText: {displayText: 'FECHAR💤'}, type: 1}]
buttonMessage = {
    text: "Configurações Do Grupo⚙️",
    footer: 'komi_ofc',
    buttons: buttons,
    headerType: 1
}
sendMsg =  conn.sendMessage(from, buttonMessage, {quoted: selo}) 
break

case 'abrir2':
if(!isGroup) return reply(`SÓ EM GRUPO`)
if(!SoDono && !isGroupAdmins) return reply(`você nem é adm`)
if(!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
reply(`*GRUPO ABERTO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'not_announcement')
break 

case 'fechar2':
  if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!SoDono && !isGroupAdmins) return reply(`Você nao é adm kkkk`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
reply(`*GRUPO FECHADO COM SUCESSO*`)
await conn.groupSettingUpdate(from, 'announcement')
break

 case 'closegp':
if (!SoDono && !isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = info.participant;
let qtt = args.join(' ').split(' ');
let qaa = parseInt(qtt[0]);
let qbb = qtt[1];
if (isNaN(qaa)) return reply (`Precisa ser um número!!!\n\nexemplo:\n${prefix}closegp 30 s`)
if (qbb === 's') {
let calc = parseInt(qaa + '000')
await reply (`O grupo será fechado em ${qaa} segundos`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} segundos!`)
}
if (qbb === 'm') {
calc = parseInt(qaa * 60 + '000')
await reply (`O grupo será fechado em ${qaa} minutos`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} minutos!`)
}
if (qbb === 'h') {
calc = parseInt(qaa * 3600 + '000')
await reply (`O grupo será fechado em ${qaa} horas`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} horas!`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nexemplo:\n${prefix}closetime 5 m`)
}
break

case 'opengp':
if (!SoDono && !isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = info.participant;
let qxx = args.join(' ').split(' ');
let qxt = parseInt(q[0]);
let tqb = qxx[1];
if (isNaN(qxt)) return reply (`Precisa ser um número!!!\n\nexemplo:\n${prefix}opengp 30 s`)
if (tqb === 's') {
let calc = parseInt(qxt + '000')
await reply (`O grupo será aberto em ${qxt} segundos`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} segundos!`)
}
if (tqb === 'm') {
calc = parseInt(qxt * 60 + '000')
await reply (`O grupo será aberto em ${qxt} minutos`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} minutos!`)
}
if (tqb === 'h') {
calc = parseInt(qxt * 3600 + '000')
await reply (`O grupo será aberto em ${qxt} horas`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} horas!`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nexemplo:\n${prefix}opentime 5 m`)
}
break


case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ppUrl = await conn.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadata = await conn.groupMetadata(from) 
conn.sendMessage(from, {image: buffer, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc}`, thumbnail: null}, {quoted: info})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
conn.sendMessage(from, options)
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {image: buff, mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: info})
} else if(budy){
if(q.length < 1) return reply('Citar oq?')
conn.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'marcar':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch {
reply('ERROR!!')
}
break

case 'marcar2':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('ERROR!!')
}
break

case 'marcarwa':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
conn.sendMessage(from, {text: teks}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'kick':
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
tektp = args.join(" ")
if(tektp.includes(numerodono)) return reply("Não pode remover meu dono 😡")
if(tektp.includes(botNumber)) return reply("Você acha que vou banir eu mesmo??, troxa você em..")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque a')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Pedidos recebidos, emitidos :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
conn.groupParticipantsUpdate(from, mentioned, 'remove')
} else {
mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
conn.groupParticipantsUpdate(from, mentioned, 'remove')
}
break

case 'reviver':
if (!isGroup) return reply('Esse comando so funciona em grupo, sinto muito')
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
add = info.message.extendedTextMessage.contextInfo.participant
sleep(5000)
const response2 = await conn.groupParticipantsUpdate(from, [add], "add" )
reply('Usuario Adicionado de volta ao grupo.')
break

case 'add':
if(!SoDono) return reply('Comando Desativado por questões de segurança, estava ocasionandoo Ban do número do bot.')
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')  
if(q.length < 1) return reply('Quer adicionar uma alma?')  
try {
tdt = args[0]
if(tdt.length < 1) return reply(`Digita o número que deseja add, exemplo: ${prefix}add 558198923680`)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) {
adduser = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')
reply('Irei adicionar ele(a) em 5 segundos...')  
setTimeout(async() => {
responser = await conn.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo!')
if(inv[0].code == 403) return reply('Erro, conta privada do usuário')
if(inv[0].code == 408) return reply('Erro, usuário acabou de sair')
if(inv[0].code == 401) return reply('Erro, porque o bot está bloqueado pelo alvo ')
} else {
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')  
reply('Irei adicionar ele(a) em 5 segundos...')  
adduser = info.message.extendedTextMessage.contextInfo.participant
setTimeout(async() => {
responser =  await conn.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo! ')
if(inv[0].code == 403) return reply('Falhou, porque em privado ')
if(inv[0].code == 408) return reply('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return reply('Falha, porque o bot está bloqueado pelo alvo ')
}
} catch {
reply('Izi, se não for adicionado provavelmente ele privou só para contatos adicionar ele em grupo.')
}
break

case 'ban':
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
num = info.message.extendedTextMessage.contextInfo.participant
if(botNumber.includes(num)) return reply('Não sou beste de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(num)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `Adeus ${num.split('@')[0]}`, mentions: [num]}, {quoted: info})
conn.groupParticipantsUpdate(from, [num], 'remove')
} else { 
reply('Responda a mensagem da pessoa')
}
break

case 'wame':
sendBtext(from, `Aqui está seu link ${pushname} ↓
wa.me//${sender.split("@")[0]}`, `${NomeDoBot} ©`, [{buttonId:`${prefix}okkomi`, buttonText: {displayText: `Obg ${NomeDoBot}`}, type: 1}],selo)
break




//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\



case 'apresentar':
case 'apr':  
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
conn.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply('Qual foi membro comum?')
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
conn.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'criadores':
if(!isGroup) return reply('esta na mão essa pika')
txtz = `
𝗢𝗹𝗮́!!
𝚊 𝚔𝚘𝚖𝚒 𝚋𝚘𝚝 𝚏𝚘𝚒 𝚞𝚖 𝚋𝚘𝚝 𝚙𝚛𝚘𝚓𝚎𝚝𝚊𝚍𝚘 𝚙𝚘𝚛 𝚍𝚞𝚊𝚜 𝚙𝚎𝚜𝚜𝚘𝚊𝚜

✅𝚗𝚎𝚛𝚘✅

http://wa.me//559185841876

✅𝚜𝚊𝚖𝚞𝚎𝚕✅

http://Wa.me//558592492932

𝚝𝚎𝚖 𝚊 𝚟𝚎𝚛𝚜𝚊̃𝚘 𝚏𝚛𝚎𝚎 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚟𝚎𝚕 𝚗𝚘 𝚗𝚘𝚜𝚜𝚘 𝚌𝚊𝚗𝚊𝚕:

https://youtube.com/channel/UCx8b3HdonWrA71fDUCXLxqw

𝚌𝚊𝚜𝚘 𝚟𝚘𝚌𝚎 𝚚𝚞𝚎𝚒𝚛𝚊 𝚊 𝚟𝚎𝚛𝚜𝚊̃𝚘 𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚊 𝚎 𝚍𝚒𝚜𝚙𝚝𝚘𝚐𝚛𝚊𝚏𝚊, 𝚎𝚗𝚝𝚛𝚎 𝚎𝚖 𝚌𝚝𝚝, 𝚋𝚘𝚝 𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘 𝚎 𝚍𝚒𝚜𝚙𝚝𝚘𝚐𝚛𝚊𝚏𝚊𝚍𝚘 70$🐧`
conn.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'autoban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
var ind = dbids.indexOf(from)						
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'listban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break  

case 'listagp': //case by: Bielzinho-Bot
if (!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
tdufg = await store.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `*L I S T A  D E  G R U P O S*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banghost':
case 'banghosts':  
if(!SoDono && !isnit) return reply("COMANDO DESATIVADO POR QUESTÕES DE SEGURANÇA, PODE CAUSAR BANIMENTO NO NÚMERO DO BOT.")
if(!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) { 
var indnum = numbersIds.indexOf(obj.id)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
conn.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
} else {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
conn.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
}
}
break

case 'correio':
txt = body.slice(10)
txtt = args.join(" ")
txt1 = txt.split("/")[0];
txt2 = txtt.split("/")[1];
if(!txt) return reply('Cade o número da pessoa?')
if(!txtt) return reply('Cade a mensagem do correio??')
if(txt.includes("-")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return reply(`Exemplo: ${prefix}correio 558198923680/Oi Amor, sdds`)
bla = 
`╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo. 
┞┧Msg: ${txt2}
┞┧
╰┄━┄━┄━┄━┄━╮`
conn.sendMessage(`${txt1}@s.whatsapp.net`, {text: bla})
break

case 'nome-bot':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
setting.NomeDoBot = args.join(" ") 
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do seu bot foi alterado com sucesso para : ${setting.NomeDoBot}`)
break

case 'nick-dono':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
setting.NickDono = args.join(" ")
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O Nick Do Dono foi configurado para : ${setting.NickDono}`)
break

case 'numero-dono':
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
setting.numerodono = args[0]
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O número dono foi configurado com sucesso para : ${setting.numerodono}`)
break

case 'prefixo-bot':
if (args.length < 1) return
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
setting.prefix = args[0]
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'setprefix':
if (args.length < 1) return
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
setting.prefix = args[0]
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fotomenu':
case 'fundomenu':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem 2 vez com esse comando..')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
logoslink.logo = logo
logo = res
fs.writeFileSync('./logos/logos.json', JSON.stringify(logoslink, null, '\t'))
reply(`A foto do menu foi alterada com sucesso para: ${logo}`)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefix + command}`)
}
break

case 'setprefixs':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
await conn.groupUpdateSubject(from, `${body.slice(9)}`)
await conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'fotobot':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await conn.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if (!SoDono  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.id === mentioned)
try {
pp = await conn.profilePictureUrl(id)
buffer = await getBuffer(pp)
conn.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
_leveling.splice(from, 1)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'ganharlevel':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
addLevelingLevel(sender, 10)
reply("Olá chefe, foi adicionado 10 Level para você 🙂")
break

case 'ganharxp':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")  
addLevelingXp(sender, 5000)
reply("Foi adicionado 5000 mil de XP para você 🙂")
break

//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
bla = fs.readFileSync('./audios/aguarde.mp3')
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
gzx = fs.readFileSync('./logos/logo2.jpg')
rafa = `            ◪ LEVEL UP ◪\n\n├─ ❏ NÚMERO: ${sender.split("@")[0]}.                                                                                       ├─ ❏ *PATENTE*: ${patt}\n├─ ❏ XP: ${getLevelingXp(sender)}\n└─ ❏ LEVEL: ${getLevel} -> ${getLevelingLevel(sender)}`
await conn.sendMessage(from, {image: gzx, caption: rafa})
}
} catch (err) {
console.error(err)
}
}
//=======================================\\

case 'transmitir':
case 'bcgc':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = info.participant
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (let _ of fgp) {
conn.sendMessage(_.id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.id, `*「 TRANSMISSÃO 」*\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido')
} 
break

case 'bc': case 'broadcast': case 'bcall': {
                
                if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
                                if (!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `) 
                let anu = await store.chats.all().map(v => v.id)
                reply(`*[] TRANSMISSÃO ENVIADA PARA\n[] ${anu.length} Chat\n*[] TEMPO: ${anu.length * 1.5} segundo`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                quickReplyButton: {
                                    displayText: '*[] CHAT DONO []*',
                                    id: `${prefix}dono`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '[*[] CONTRATAR BOT []*',
                                    id: `${prefix}dono`
                                }
                            }]
                      fatihgans = fs.readFileSync('./logos/logo2.jpg')
                      let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
                      conn.send5ButImg(yoi, txt, conn.user.name, fatihgans, btn)
		}
		reply('*[] SUCESSO AO REALIZAR TM []*')
            }
            break

case 'dono1':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono1 = body.slice(8)
nescessario.dono1 = dono1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono1}`)
break

case 'dono2':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono2 = body.slice(8)
nescessario.dono2 = dono2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono3 = body.slice(8)
nescessario.dono3 = dono3
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono4 = body.slice(8)
nescessario.dono4 = dono4
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono5 = body.slice(8)
nescessario.dono5 = dono5
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono6 = body.slice(8)
nescessario.dono6 = dono6
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `[ Lista de donos do bot ${setting.NomeDoBot} ] 

Dono Oficial do bot: ${setting.numerodono}

- [ 1 ] ${nescessario.dono1}\n- [ 2 ] ${nescessario.dono2}\n- [ 3 ] ${nescessario.dono3}\n- [ 4 ] ${nescessario.dono4}\n- [ 5 ] ${nescessario.dono5}\n- [ 6 ] ${nescessario.dono6} `
reply(p)
break

case 'online':   
case 'onlines':  //case by: ᬊ͜͡𝑩𝑰𝑬𝑳𝒁𝑰𝑵𝑯𝑶.𝑬𝑿𝑬ᵒᶠᶜ
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[ido]), conn.user.id]
conn.sendMessage(from, {text: 'Pessoas online do gp:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`}, {quoted: info})
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins || !SoDono) return 
msgz = args.join(" ")

msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Horario: msgtmpol, 
Data: datinhaofc, 
Tabela: msgz
}

if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
fs.unlinkSync("./func/tabela/tabela-" + from + ".json");
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./func/tabela/tabela-${from}.json`)); 

blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`

conn.sendMessage(from, {text: blity}, {quoted: info})
break

case 'ausente': case 'off': case 'afk':
if(!SoDono) return reply("Comando especial para o dono.")
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
msgz = args.join(" ")

var catmsgaus = {
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: msgz
}

if(!fs.existsSync(`./func/afk/afk-@${nmrdnofc}.json`)) {
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
} else {
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
}
}
reply(`Mensagem de ausência criada com sucesso...`)
break

case 'ativo': case 'on': case 'voltei':
if(!SoDono) return reply("Comando especial para o dono.")
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {  
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
break

case 'serpremium':
case 'serprem':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
premium.push(`${setting.numerodono}@s.whatsapp.net`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${setting.numerodono} você foi adicionado na lista premium.`)
break

case 'reagir':
const reactionMessage = {
react: {
text: "💖",
key: info.message.extendedTextMessage.contextInfo
}
}
sendMsg = await conn.sendMessage(from, reactionMessage)
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `👑@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑`}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
conn.sendMessage(from, {text: `👑@${tedtp} foi adicionado à lista de usuários premium com sucesso👑`}, {quoted: info})
}
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` ${bla.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
if(verificado === true) {
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
} else {
conn.sendMessage(from, {text: clear}, {quoted: info, contextInfo : { forwardingScore: 500, isForwarded:true}})  
}
break

case 'clearchat':
case 'limparchat':  
case 'limparmsg':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
await conn.chatModify({ clear: { message: { id: String, fromMe: true } } }, from, [])
reply("Chat limpo")
break

case 'addpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão removido da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'legendabv':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(from)
welcome_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group.push(json)
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas criada com sucesso!*')
}
break

case 'legendasaiu':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group.push(json)
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída criada com sucesso!*')
}
break

case 'legendabv2':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(from)
welcome_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group2.push(json)
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 criada com sucesso!*')
}
break

case 'legendasaiu2':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group2.push(json)
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 criada com sucesso!*')
}
break

case 'deletar':  case 'apagar':  case 'delete':   case 'del':  case 'd':
if (!isGroup)return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender }})
.catch((err) => { 
console.log(err)
reply('A mensagem não foi enviado pelo bot...')
})
break

case 'fundobemvindo':
case 'fundobv':  
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
try {
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify([]))
reply('Desativou com sucesso o recurso de antiligação no bot✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antipvon':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe ) return await reply('Apenas Meu Dono')
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, {text: "*Sucesso alterado para modo antipv, pv não poderá ser utilizado"})
break

case 'antipvoff':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return await reply('Apenas meu dono o owner')
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, {text: "*Sucesso modo antipv desligado, pv liberado."})
break

case 'verificacao':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
buttons = [
  {buttonId:`${prefix}verificadoon`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
  {buttonId: `${prefix}verificadooff`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}]
buttonMessage = {
image: {url: `${logo16}`},
caption: "𝐁𝐘:Ⓚ︎Ⓞ︎Ⓜ︎Ⓘ︎-Ⓢ︎Ⓐ︎Ⓝ",
buttons: buttons,
headerType: 1
}
sendMsg = await conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'verificadoon':
case 'vron':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe ) return await reply('Apenas Meu Dono')
if (verificado === true) return await reply('Ja esta com verificado ativado em tudo.')
verificado = true
nescessario.verificado = verificado
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, {text: "*VERIFICADO ATIVADO EM TODOS MENUS, INCLUINDO ALGUNS COMANDOS.*"})
break

case 'verificadooff':
case 'vroff':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return await reply('Apenas meu dono o owner')
if (verificado === false) return await reply('Ja esta com verificado Desativado em tudo.')
verificado = false
nescessario.verificado = verificado
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, {text: "*VERIFICADO DESATIVADO EM TODOS MENUS, INCLUINDO ALGUNS COMANDOS.*"})
break

case 'seradm':
if (!SoDono) reply (`somente o meu mestre...`)
conn.groupParticipantsUpdate(from, [sender], "promover")
await sleep (2000)
reply (`ok @${setting.numerodono} vc acabou de ser promovido...`)
break


case 'antipv':
if (!SoDono) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('Ja esta ativo')
antipv.push('Ativado')
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(antipv))
reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('Ja esta Desativado')
pesquisar = 'Ativado'
processo = antipv.indexOf(pesquisar)
while(processo >= 0){
antipv.splice(processo, 1)
processo = antipv.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'block':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unblock':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'blocklist':
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
conn.sendMessage(from, jrc.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": ban}})
break

case 'acess':
if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return conn.sendMessage(from, {text: `root@ALEATORY-BOT:~ ${err}`}, {quoted: info})
if (stdout) {
conn.sendMessage(from, {text: stdout})
}
})
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case 'unbangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'limitec':
if(!SoDono  && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if (args.length < 1) return
if (!setTimeout && !info.key.fromMe) return reply(enviar.msg.donosmt)
limitefl = args.join(" ")
limitefll.limitefl = limitefl
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(limitefll, null, '\t'))
reply(`${limitefl} foi adicionado como limite de antiflood `)
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
}catch (e) {
reply(`${e}`)
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'speed':
case 'ping':
if (!SoDono && !isGroupAdmins) return reply('somente adms e dono pode usar')
const varping = speed();
const ping = speed() - varping
uptime = process.uptime()
buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1}]
buttonMessage = {
    image: {url: `https://rafinha043-api.herokuapp.com/api/maker/texto?ping=${ping.toFixed(4)}&apikey=key-ale666`},
    caption: ` ᳀Tempo Ativo: ${kyun(uptime)}\n\n᳀Grupo: ${groupName}\n\n᳀Admins :${groupAdmins.length}\n\n᳀Membros :${groupMembers.length}\n\n᳀Solicitado por : *${pushname}*\n\n᳀Numero : ${sender.split("@")[0]}`,
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 4
}
sendMsg = await conn.sendMessage(from, buttonMessage)
break

case 'gtts':
if (args.length < 1) return conn.sendMessage(from,{text: `Cade o texto?, caso não sabia digite cmd ${prefix}idiomas, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: info})
const gtts = require('./armor/gtts')(args[0])
if (args.length < 2) return conn.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: info})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {audio: buffer, ptt:true}, {quoted: info})
fs.unlinkSync(rano)
})
})
break

case 'tagme':
members_id = []  
const tagme = `@${sender.split("@")[0]} ✔️`
members_id.push(sender.split("@s.whatsapp.net"))
await mentions(tagme, members_id, true)
break

case 'blockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
await conn.sendMessage(from, tkks.trim(), extendedText, {quoted: info})
break

case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return conn.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
var options = {
text: tdptls,
contextInfo: {
mentionedJid: [sender]
},
}
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: options}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
text: teks1,
contextInfo: {
mentionedJid: [sender]
},
}
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: options}, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: sug}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'pinterest': 
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
blap = await getBuffer(`http://aleatoryapi.herokuapp.com/api/pinterest?text=${q}&apikey=${keyale}`)
await conn.sendMessage(from, {image: blap, thumbnail: null}, {quoted: info}).catch(e => {
reply('ERROR!!')
})
break


case 'pinvideo':
qd = args.join(" ")
if(qd.length < 7) return reply('Você deve pegar o link do Pinterest')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
kenisawa = await fetchJson(`https://api.kizakixd.xyz/api/pindl?url=${qd}&apikey=XdA9Nx6egaoJNY3K79WLo6kBp`)
dev = await getBuffer(kenisawa.result.result)
conn.sendMessage(from, {video: dev, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR')
})
break

///////


case 'metadinha': {
                sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(from, { image: { url: random.male }, caption: `homem` }, { quoted: selo })
                conn.sendMessage(from, { image: { url: random.female }, caption: `mulher` }, { quoted: selo })
            }
	    break

case 'komi-san': case 'komi': {
            let buttons = [
                    {buttonId: `${prefix}komi`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=komisan&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'nagatoro': case 'naga': {
            let buttons = [
                    {buttonId: `${prefix}naga`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=nagatoro&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'luffy': case 'lufy': {
            let buttons = [
                    {buttonId: `${prefix}lufy`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=luffy&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break


case 'kaguya': case 'kagu': {
            let buttons = [
                    {buttonId: `${prefix}kagu`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=kaguya-sama&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'zero-two': case 'zerotwo': {
            let buttons = [
                    {buttonId: `${prefix}zerotwo`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=zero-two&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'nekos': case 'nekos': {
            let buttons = [
                    {buttonId: `${prefix}nekos`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=nekos&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'itsuki': {
            let buttons = [
                    {buttonId: `${prefix}itsuki`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=itsuki&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'chizuru': {
            let buttons = [
                    {buttonId: `${prefix}chizuru`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=chizuru&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'hinata': {
            let buttons = [
                    {buttonId: `${prefix}hinata`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=hinata&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'sakura': {
            let buttons = [
                    {buttonId: `${prefix}sakura`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=sakura&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break


case 'zoro': {
            let buttons = [
                    {buttonId: `${prefix}zoro`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=zoro&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'asuna':  {
            let buttons = [
                    {buttonId: `${prefix}asuna`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=asuna&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break


case 'akame': case 'kame': {
            let buttons = [
                    {buttonId: `${prefix}akame`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=akame&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break

case 'megumin': {
            let buttons = [
                    {buttonId: `${prefix}megumin`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=megumin&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break


case 'naruto': case 'naru': {
            let buttons = [
                    {buttonId: `${prefix}naruto`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=naruto-uzumaki&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break


case 'nezuko': case 'nezu': {
            let buttons = [
                    {buttonId: `${prefix}nezuko`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://aleatoryapi.herokuapp.com/api/pinterest?text=nezuko&apikey=key-samuel/paulo-2.0' },
                    caption: `✅`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
            break
            
case 'hentai': {
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
            let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/nsfw/hentai?apikey=key24557' },
                    caption: `*AQUI ESTÁ*♨️`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
break

case 'lolis': {

            let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/loli?apikey=key24557' },
                    caption: `*AQUI ESTÁ*♨️`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
break


  case 'loli': {
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)    
            let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/nsfwloli?apikey=key24557' },
                    caption: `*AQUI ESTÁ*♨️`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
break
            
  /////////
  
  case 'saycat': {
            let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/say?apikey=key24557' },
                    caption: `*AQUI ESTÁ*♨️`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
break


case 'shota': {
            let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/shota?apikey=key24557' },
                    caption: `*AQUI ESTÁ*♨️`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
break

case 'waifu': {
            let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/waifu?apikey=key24557' },
                    caption: `*AQUI ESTÁ*♨️`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
break


case 'neko': {
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
            let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/neko?apikey=key24557' },
                    caption: `*AQUI ESTÁ*♨️`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
break

case 'trap': {
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
            let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/trap?apikey=key24557' },
                    caption: `*AQUI ESTÁ*♨️`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
break

case 'onlyfans': {
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
            let buttons = [
                    {buttonId: `${prefix + command}`, buttonText: {displayText: '🍻𝕊𝔼𝔾𝕌𝕀ℕ𝕋𝔼🍻'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/onlyfans?apikey=key24557' },
                    caption: `*AQUI ESTÁ*♨️`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo })
            }
break
  
////////////////FIM////////////////


case 'gerarlink':  
case 'imgpralink':    
try {
if (isQuotedImage) {
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande uma imagem com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'videourl':
case 'videopralink':
try {
if ((isQuotedVideo) && args.length == 0) {
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande vídeo com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é 30 segundos.')
}
break

case 'printsite':
case 'print':
txt = args.join(" ")
if(txt.length < 8) return reply(`Digite qual site você deseja tirar o print, por Exemplo: ${prefix}printsite Google.com`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
printp = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ssweb?url=${txt}&apikey=${keyale}`)
printimg = await getBuffer(printp.link)
conn.sendMessage(from, {image: printimg}, {quoted: info}).catch(e => {
reply('ERROR')
})
break

case 'ytsearch':
try {
psq = args.join(' ')
if(psq.length < 2) return reply(`O que você deseja encontrar?, diga o nome do vídeo ou da música, e irei informar os links que correspondem.`)
blar = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${psq}&apikey=${keyale}`)
pla = '==============\n\n'
for (let x of blar.resultado) {
pla += `Titulo: ${x.title}\n`
pla += `Link: ${x.url}`
pla += '\n\n=============\n\n'
}
reply(pla.trim())
} catch {
reply('Error!!')
}
break

case 'igdl':
case 'instadw': 
try {  
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video/foto do instagram.')
post = await fetchJson(`https://aleatoryapi.herokuapp.com/api/instagram?url=${link}&apikey=${keyale}`)
s_video = await getBuffer(post.resultado[0].downloadUrl)
conn.sendMessage(from, {video: s_video}, {quoted: info})
} catch {
reply('O vídeo deve ser privado, ou é imagem, só pode video.')
}
break

case 'twitter':
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video do twitter')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
post = await fetchJson(`https://aleatoryapi.herokuapp.com/api/twitter?link=${link}&apikey=${keyale}`)
descc = post.resultado.desc
video_hd = await getBuffer(post.resultado.HD)
conn.sendMessage(from, {video: video_hd, caption: descc}, {quoted: info}).catch(e => {
reply('Error!!')
})
break

case 'facebook':
case 'facemp4':  
case 'fb':
teks = args[0]
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
res = await fbDown(teks).catch(e => {
reply(`${e}`)
})
a = res[0]
result = `「 *Facebook Downloader* 」
• *Título:* ${a.judul}
• *Fonte :* ${a.source}
• *Tamanho :* ${a.size}
• *Qualidade :* ${a.quality}
• *Modelo :* ${a.type}
• *Nome do arquivo :* ${a.judul}.${a.type}`
sendFileFromUrl({image: a.thumb, caption: result}, {quoted: info})
sendFileFromUrl({video: a.link, mimetype: 'video/mp4'}, {quoted: info})
await limitAdd(sender)
break

case 'ytmp4':
qd = args.join(" ")
if(qd.length < 7) return reply('Você deve pegar o link do YouTube gerado pelo ytsearch ou do próprio YouTube mesmo, e usar com esse comando, e ele enviará seu video / música de video')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
res = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${qd}&apikey=${keyale}`)

blaimg = await getBuffer(res.resultado[0].image)

bla = `Titulo: ${res.resultado[0].title}\nVisualizações: ${res.resultado[0].views}\nTempo: ${res.resultado[0].duration.timestamp}\nCanal: ${res.resultado[0].author.name}\n`

conn.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp4-2?q=${q}&apikey=${keyale}`)
blabla = await getBuffer(bla[0].link)
conn.sendMessage(from, {video: blabla, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR')
})
break

case 'ytmp3':
qd = args.join(" ")
if(qd.length < 7) return reply('Você deve pegar o link do YouTube gerado pelo ytsearch ou do próprio YouTube mesmo, e usar com esse comando, e ele enviará seu áudio / música')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
res = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${qd}&apikey=${keyale}`)

blaimg = await getBuffer(res.resultado[0].image)

bla = `Titulo: ${res.resultado[0].title}\nVisualizações: ${res.resultado[0].views}\nTempo: ${res.resultado[0].duration.timestamp}\nCanal: ${res.resultado[0].author.name}\n`

conn.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp3-2?q=${q}&apikey=${keyale}`)
audbla = await getBuffer(bla[0].link)
conn.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!!')
})
break
case 'testando1':
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/youtubedl?url=https://youtu.be/ffaYsbjmaMs&apikey=key-expr`)
blabla = await getBuffer(bla.medias[0].url) 
conn.sendMessage(from, {audio: blabla, mimetype: 'audio/mp4'}).catch(e => {
reply('ERROR!!')
})
break

case 'tiktok2':
link = args.join(" ")
if (!link) return reply('Ops, insira o link de um video do tiktok.')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
blap = await fetchJson(`http://aleatoryapi.herokuapp.com/api/tiktok?url=${link}&apikey=${keyale}`)
blavideo = await getBuffer(blap.resultado.nowm)
conn.sendMessage(from, {video: blavideo, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!!')
})
break

case 'tiktok':
qp = args.join(" ")
if (!qp) return reply('Ops, insira o link.')
sendBtext(from, "✔️ Download De Vídeo / Audio [ TIKTOK ]\nEscolha uma opção que deseja.", `☂️`, [
{buttonId: `${prefix}tiktokvideo ${qp}`, buttonText: {displayText: `🎥 Video`}, type: 1},
{buttonId: `${prefix}tiktokaudio ${qp}`, buttonText: {displayText: `🎵 Audio`}, type: 1}], selo)
break 

case 'tiktokvideo': 
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/tiktok-2?url=${q}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.server1.video)
conn.sendMessage(from, {video: blabla, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!!')
})
break

case 'tiktokaudio': 
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/tiktok-2?url=${q}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.server1.music)
conn.sendMessage(from, {audio: blabla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => { 
reply('ERROR')
})
break

case 'playstore':
if(!q) return reply('Digite um nome de um app que deseja pesquisar.')
let play = await hx.playstore(q);
let stor = "❉─────────────────────❉\n"
for (let i of play) {
stor += `\n*「 _PLAY STORE_ 」*\n
- 📄 *Nome* : ${i.name}
- 🌀 *Link* : ${i.link}\n
- 🤵🏻 *desenvolvedor* : ${i.developer}
- 📤 *Desenvolvedor link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(stor)
break

case 'igstalk':
if(args.length < 1) return reply('Cadê o nome?')
usur = args.join(" ")
teste = await fetchJson(`https://pencarikode.xyz/stalk/instagram?username=${usur}&apikey=pais`)
teste = teste.result.user
corno = `Nome : ${teste.username}\n`
corno += `PK : ${teste.pk}\n`
testebf = await getBuffer(`${teste.profile_pic_url}`)
await conn.sendMessage(from, {image: testebf, caption: `${corno}`}, {quoted:info})
break

case 'celular':
if (!q) return reply(`Qual celular você está procurando?`)
teks = args.join(' ')
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
📝 Titulo: ${anu.judul}
❗Última atualização: ${anu.rilis}
📱 Tamanho do celular: ${anu.ukuran}
⚡ Tipo: ${anu.type}
🗃️ Armazenamento: ${anu.storage}
📴 Tela: ${anu.display}
📳 Polegada: ${anu.inchi}
🔰 Resolução da câmera: ${anu.pixel}
📲 Resolução do video: ${anu.videoPixel}
💭 Ram do celular: ${anu.ram}
👤 Hardware do celular: ${anu.chipset}
⚠️ Bateria: ${anu.batrai}
🔋 Tipo da bateria: ${anu.merek_batre}`
 wew = fs.readFileSync('./logos/logo2.jpg')
await conn.sendMessage(from, {image: wew, thumbnail:null, caption: `${busca_celular}`}, {quoted: info})
break

case 'play':
  const srchh = (q)
               try {
               var aramas = await yts(srchh);
               } catch {
               return await conn.sendMessage(from, {text: '*Pesquisa não encontrada!* Teste novamente com outras palavras.'}, {quoted: info})
               }
					const objs = []
					for (let x of aramas.all) {
						let data = {
							rowId: `${prefix}play5 `+ x.title,
							title: x.title,
							description: x.description
						}
						objs.push(data)
					}

const listMessage = {
  text: `*Pesquisado por:* ${q}`,
  footer: '_Selecione uma das opções e aperte em "Enviar"_',
  title: "✅ *Pesquisa Encontrada* ✅",
  buttonText: "*LISTA DA PESQUISA*",
  sections: [
								{
									title: "Músicas relacionadas",
									rows: objs
								}
							]
}
sendMsg = await conn.sendMessage(from, listMessage, {quoted: selo})
break

case 'play5': {
                if (!q) throw `Exemplo : ${prefix + command} stay whit me`
                let yts = require("yt-search")
                let search = await yts(q)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                                    Kenisawa = `
╭╼╾╼╾『 ℙ𝕝𝕒𝕪 𝕐𝕠𝕦𝕥𝕦𝕓𝕖 』╼╾╼╾╮
│
┃⚠️ Titulo : ${anu.title}
│⏰ Duração : ${anu.timestamp}
┃👥 visu : ${anu.views}
│🗓️ data : ${anu.ago}
┃👤 canal : ${anu.author.name}
╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾★᭄ꦿ᭄ꦿ`,
                sendBimgT(from, `${anu.thumbnail}`, Kenisawa, "𝄇☫𝄆⏤͟͟͞͞𝙺𝙾𝙼𝙸-𝙱𝙾𝚃", [{index: 1, urlButton: {displayText: 'suporte 『👤』', url: 'https://wa.me/55859249293'}},
 {index: 2, urlButton: {displayText: 'Link 『🔗』', url: `${anu.url}`}},
{index: 2, quickReplyButton: {displayText: 'Video 『🎬』', id: `${prefix}videoplay ${anu.url}`}},
{index: 3, quickReplyButton: {displayText: 'Audio『🎵』', id: `${prefix}audioplay ${anu.url}`}}], selo)
            }
            break


case 'play4':
qp = args.join(" ")
res = await yts(qp)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
blaimg = await getBuffer(res.all[0].image)

bla = `☂️ Titulo: ${res.all[0].title}\n📉 Visualizações: ${res.all[0].views}\n⏰ Tempo: ${res.all[0].timestamp}\n🔎 Canal: ${res.all[0].author.name}\n ⚙️ Se você não conseguir visualizar os botões, execute o play2 como segunda opção.`

sendBimg(from, `${res.all[0].image}`, bla, NomeDoBot, [
{buttonId: `${prefix}audioplay ${qp}`, buttonText: {displayText: `🎵 Audio`}, type: 1}, {buttonId: `${prefix}videoplay ${qp}`, buttonText: {displayText: `🎥 Video`}, type: 1}], info)
break 

case 'videoplay':
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])  
reply('Enviando, vai demorar um pouco, ok? 😁')  
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playmp4?q=${q}&apikey=${keyale}`) 
audbla = await getBuffer(bla.resultado.url)
conn.sendMessage(from, {video: audbla, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply(`desculpe mas não achei o que você quer / Ou / A api caiu, em breve volta.`)
})
break

case 'audioplay':
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playmp4?q=${q}&apikey=${keyale}`) 
audbla = await getBuffer(bla.resultado.url)
conn.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info}).catch(async (e) => { 
bli = yts(q)
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp3_2?url=${bli.all[0].url}&apikey=${keyale}`)
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4'})
}).catch(async (e) => {
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playv1?q=${q}&apikey=${keyale}`) 
audbla = await getBuffer(bla.resultado)
conn.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info})
}).catch(e => {
reply("Error, não consigo baixar essa música, não sei pq 😔")  
})
break


case 'play2':
playzin = args.join(" ") 
if(!playzin) return reply('Cade o nome da música?')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playmp4?q=${q}&apikey=${keyale}`) 
bla = bla.resultado
pla = `Titulo: ${bla.titulo}\n`
pla += `Visualizações: ${bla.visu}\n`
pla += `Publicado : ${bla.publicado}\n\n`
pla += `Enviando o áudio, vai demorar pra caramba, OK?`
img = await getBuffer(bla.thumb)
conn.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: info})
audbla = await getBuffer(bla.url)
conn.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply(`desculpe mas não achei o que você quer.`)
})
break

case 'play3':
qp = args.join(" ")
if(!qp) return reply(`Cade o nome da música?`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
res = await yts(qp)

blaimg = await getBuffer(res.all[0].image)

bla = `Titulo: ${res.all[0].title}\nVisualizações: ${res.all[0].views}\nTempo: ${res.all[0].duration.timestamp}\nCanal: ${res.all[0].author.name}\n`

conn.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp3-2?q=${res.all[0].url}&apikey=${keyale}`)
blabla = await getBuffer(bla[0].link)
conn.sendMessage(from, {audio: blabla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply('Error')
})
break


case 'playmp4':
qp = args.join(" ")
if(!qp) return reply(`Cade o nome da música?/Video?`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
res = await yts(qp)

blaimg = await getBuffer(res.all[0].image)

bla = `Titulo: ${res.all[0].title}\nVisualizações: ${res.all[0].views}\nTempo: ${res.all[0].duration.timestamp}\nCanal: ${res.all[0].author.name}\n`

conn.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playmp4?q=${q}&apikey=${keyale}`) 
audbla = await getBuffer(bla.resultado.url)
conn.sendMessage(from, {video: audbla, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!')
})
break

case 'documeto': case 'docu': {
                let { yta } = require('./youtube/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return reply('Este arquivo so pode abaixo de 100 MB '+util.format(media))
                conn.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: info })
            }
            break

//============(CASE-BEM-VINDO/E ETC..)=========\\

case 'welcome':
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o bem-vindo no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}welcom 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}welcom 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break
case 'welcom':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo')
welkom.push(from)
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

//=====================================\\

//=================(ANTS)=================\\

case 'antictt':
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-ctt? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antict 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antict 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break


case 'antict':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-catalogo? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}anticatalg 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}anticatalg 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'anticatalg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-fake? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antifa 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antifa 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antifa':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply('Ja esta Desativado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilocalização':
case 'antilocalizaçao':
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-localização? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antiloc 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antiloc 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antiloc':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumento':
  if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-documento? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antidocu 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antidocu 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antidocu':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antiimg':
  if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-imagem? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antiim 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}amtiim 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antiim':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifigu':
  if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-figurinhas? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antisticker 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antisticker 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antisticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'antifigu':
  if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o auto-figurinhas? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antosticker 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}autosticker 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

 case 'autosticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAutofigu) return reply('Ja esta ativo')
autofigu.push(from)
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply('Ja esta Desativado')
pesquisar = from
processo = autofigu.indexOf(pesquisar)
while(processo >= 0){
autofigu.splice(processo, 1)
processo = autofigu.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'antinotas':
  if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-anotaçoes? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}amtinot 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antinot 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antinot':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo')
antinotas.push(from)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado.')
antinotas.splice(from, 1)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
  if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-video? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antivd 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antivd 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antivd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
  if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-audio? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antiaud 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antiaud 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antiaud':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('Ja esta ativo')
antiaudio.push(from)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifood':
  if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-food? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antimessage 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antimessage 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break


case 'antimesssage':  
if(!isGroup) return reply(enviar.msg.adm)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar. info.Badmin)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝`)
} else if (Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if(antiflood[i] === from) {
position = i
}
})
if(position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'resetarttt':
case 'rvttt':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
daily.splice([])
fs.writeFileSync('./datab/usuarios/diario.json', JSON.stringify(daily))
reply('‼️O jogo da velha TTT foi resetado com sucesso..✔️')
reply(`${prefix}reiniciar`)
break

case 'reiniciar':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
buttons = [
  {buttonId:`${prefix} reiniciar1`, buttonText: {displayText: '[♨️]𝑹𝑬𝑰𝑵𝑰𝑪𝑰𝑨𝑹 𝑩𝑶𝑻?[♨️]'}, type: 1}]
buttonMessage = {
image: {url: `${logo17}`},
caption: "𝐁𝐘:Ⓚ︎Ⓞ︎Ⓜ︎Ⓘ︎-Ⓢ︎Ⓐ︎",
buttons: buttons,
headerType: 1
}
sendMsg = await conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'reiniciar1':
if(!SoDono) return
rp = (Date.now() / 1000) - info.messageTimestamp
blar = process.uptime()
startAle()
reply(`Reiniciei em ${String(rp.toFixed(3))}m\n\nTempo Ativo : ${kyun(blar)}`)
break

case 'javolto':
if (!SoDono) reply (`somente o meu mestre...`)
conn.groupParticipantsUpdate(from, [sender], 'remove') 
reply (`calmar ai o @${setting.numerodono} voltar em aproximadamente 10 segundos`)
await sleep (10000)
conn.groupParticipantsUpdate(from, [sender], "add")
reply (`pronto ${NickDono}...Bem vindo de volta ao grupo`)
break
 
case 'antilink':
  if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-link? no grupo: ${groupName}`,`nero e um baitola,`,
[{buttonId:`${prefix}antili 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antili 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break
 
case 'antili':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLink) return reply('Ja esta ativo')
antilink.push(from)
fs.writeFileSync('./datab/ants/antilink.json', JSON.stringify(antilink))
reply('🌀 Ativou com sucesso o recurso de antilink neste grupo 📝')
} else if (Number(args[0]) === 0) {
if(!isAntiLink) return reply('Ja esta Desativado')
pesquisar = from
processo = antilink.indexOf(pesquisar)
while(processo >= 0){
antilink.splice(processo, 1)
processo = antilink.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilink.json', JSON.stringify(antilink))
reply('‼️ Desativou com sucesso o recurso de antilink neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antipalavrao':
 case 'antipalavrão':
if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-palavrão? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antipalavras 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antipalavras 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antipalavras':  
if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] O PRECISA SER ADMIN`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if(args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('*Já esta ativado...*')
palavrao.push(from)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply(`[❗] anti palavrão ativado`)
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('*Já esta Desativado...*')  
palavrao.splice(from, 1)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply(`[❗] anti palavrão desativado...`)
} else {
reply(`[❗] 1 / 0, Exemplo ${prefix + command} 0`)
}
await limitAdd(sender)
break

case 'antilinkhard':
  if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-linkhard? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antihard 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antihard 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antihard':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'antilink':
  if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o anti-linkgp? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}antigp 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}antigp 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'antigp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('Ja esta ativo')
antilinkgp.push(from)
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
} else if (Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('Ja esta Desativado')
pesquisar = from
processo = antilinkgp.indexOf(pesquisar)
while(processo >= 0){
antilinkgp.splice(processo, 1)
processo = antilinkgp.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':
  if(!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if(!isGroupAdmins) return reply(`[❗] VC NÃO E ADM!`)
if(!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
sendBimg(from,`${logo16}`, `ᬊ͜͡ Olá ${pushname} você deseja ativa o bemvindo2? no grupo: ${groupName}`,`nero e gay`,
[{buttonId:`${prefix}welcome2 1`, buttonText: {displayText: 'ᬊ͜͡ ᎪͲᏆᏙᎪᎡ 🟢'}, type: 1},
{buttonId:`${prefix}welcome2 0`, buttonText: {displayText: 'ᬊ͜͡ ᎠᎬՏᎪͲᏆᏙᎪᎡ 🔴'}, type: 1}], info)
break

case 'welcome2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
reply(`Devo Lembrar que você deve determinar a legenda desse grupo, após ativar essa função, a legenda funciona por grupo, se deseja saber mais informações sobre, digite ${prefix}infobemvindo`)  
if(isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
welkom2.push(from)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if(!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(welkom2).forEach((i) => {
if (welkom2[i] === from) {
position = i
}
})
if(position !== false) {
welkom2.splice(position, 1)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
}
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
if(!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){
idemot = 0
}
else if(jemot == 'google'){
idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
idemot = 3
}
else if(jemot == 'whatsapp'){
idemot = 4
}
else if(jemot == 'twitter'){
idemot = 5
}
else if(jemot == 'facebook'){
idemot = 6
}
else if(jemot == 'joypixels'){
idemot = 7
}
else if(jemot == 'openmoji'){
idemot = 8
}
else if(jemot == 'emojidex'){
idemot = 9
}
else if(jemot == 'lg'){
idemot = 10
}
else if(jemot == 'htc'){
idemot = 11
}
else if(!jemot){
idemot = 4
}
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(emoji.images[idemot]);
sendStickerFromUrl(from, emoji.images[idemot].url, info)
}).catch(e => {
reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI..")
})
break

case 'autofigu': case 'autosticker':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAutofigu) return reply('Ja esta ativo')
autofigu.push(from)
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply('Ja esta Desativado')
pesquisar = from
processo = autofigu.indexOf(pesquisar)
while(processo >= 0){
autofigu.splice(processo, 1)
processo = autofigu.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'sc':
case 'c':  
case 'csticker':  
case 'cstiker':  
case 'stcirculo':
case 'circlesticker':  
if ((isMedia && info.message.imageMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane
getpunt = getRandom('.png')
inpunt = getRandom('.webp')
exec(`convert ${media} -resize 512x512^ -gravity center -extent 512x512 ${getpunt} && magick ${getpunt} -quality 50 -define webp:lossless=true ${inpunt}`, async (error) => {
fs.unlinkSync(getpunt)
fs.unlinkSync(media)
if (error) return reply("Error!")
await conn.sendMessage(from, {sticker: fs.readFileSync(inpunt)}, {quoted: info})
fs.unlinkSync(inpunt)
})
} else {
reply("Apenas image!")
}
break

case 'fstiker': 
case 'fsticker':
case 'f':
await limitAdd(sender)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}]) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
break 

case 'emoji-mix':
case 'emojimix':
try {
textoo = args.join(' ')
textoo1 = textoo.split('+')[0]
textoo2 = textoo.split('+')[1]
bau = require('./armor/emoji.js')
sitee = bau.Semoji(textoo1, textoo2)
bala = await getBuffer(sitee)
fs.writeFileSync('./imagem.webp', bala)
site = fs.readFileSync('./imagem.webp')
bass64 = `data:image/jpeg;base64,${site.toString('base64')}`
mantap = await convertSticker(bass64, `KOMI - MD`, `Aleatory`)
imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: imageBuffer}, {quoted: info})
fs.unlinkSync('./imagem.webp')
} catch {
reply('*Ops não foi possivel fazer esse mix de emoji...*')
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if(!isQuotedImage) return reply(`Marque uma imagem`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Criado por↓        ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti}, {quoted: info})
} else {
return reply(`So imagem mn -_-`)
}
break

case 'st':
case 'st':
case 'sticker':
case 's':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'toimg':
if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
conn.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
reply('ERROR!!')
})
break

//=============(LOGOS)=============\\



//==========(PLAQUINHAS-LOGOS)===========\\

case 'plaq': //by zanga 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])//mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
if(verificado === true) {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
} else {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: info})  
}
break

case 'plaq2': //by zanga 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])//mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${teks}`)
if(verificado === true) {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
} else {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: info}) 
}
break

case 'plaq3': //by zanga
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])//mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${teks}&text.0.outline.blur=63`)
if(verificado === true) {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
} else {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: info}) 
}
break

case 'plaq4':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`) 
if (args.length < 1) return reply(`${prefix}plaq7 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])//mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
if(verificado === true) {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
} else {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: info}) 
}
break

case 'plaq5':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq10 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])//mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
if(verificado === true) {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
} else {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: info}) 
}
break
case 'plaq4off': //by zanga
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}nsfw 1`)
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])//mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(2).jpeg?profile=Zanga%204.0&text.0.text=${teks}`)
if(verificado === true) {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: selo})
} else {
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' *Plaquinha feita ✓* '}, {quoted: info}) 
}
break

case 'placaloli':
if (!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
await limitAdd(sender)
break 

//=======================================\\


// LOGOS 

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'narutologo':
case 'fire':
case 'romantic':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
textin = args.join(" ")
if(!textin) return reply("Cade o texto?")
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/${command}?texto=${textin}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.imageUrl)
conn.sendMessage(from, {image: blabla}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
break  

case 'gameplay':
case 'ffbanner':
case 'mascoteavatar':  
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.imageUrl)
conn.sendMessage(from, {image: blabla}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
break

case 'googlesg':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.imageUrl)
conn.sendMessage(from, {image: blabla}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
break  

case 'marvel': 
case 'glitch':   
case 'stone':   
case 'space':
case 'pornhub':
case 'america':   
case 'steel':  
case 'grafity':  
case 'glitch3':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/${command}?texto=${texto1}&texto2=${texto2}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado)
conn.sendMessage(from, {image: blabla}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'lava':
case 'toxic':  
case 'thunder': 
case 'thunderv2':  
case 'neongreen':	
case 'neon':  
case 'neon1':  
case 'neon3d':  
case 'demongreen':   
case 'metalfire':  
case 'rainbow':	  
case 'gelo':
case 'halloween':  
case 'lapis':  
case 'glitch':  
case 'glitch2':   
case '3dgold': 
case 'neon3d':   
case 'transformer':  
case '3dstone':
case 'fiction':
case 'cattxt':
case 'neondevil':
case 'demonfire':
case 'colaq':
case 'luxury':
case 'berry':
case 'matrix':
case 'horror':
case 'nuvem':
case 'neon3':
case 'neve':
case 'areia':
case 'vidro':
case 'style':
case 'blood':
case 'pink':
case 'carbon':
case 'metalblue': 
case 'jeans':  
case 'jokerlogo':   
case 'natal': 
case 'ossos':  
case 'asfalto':	
case 'break':  
try {
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
texto = args.join(" ") || 'Indefinido'
if(!texto) return reply('Cade o texto?')
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/${command}?texto=${texto}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado)
conn.sendMessage(from, {image: blabla}, {quoted: info})
} catch {
reply('ERROR')
}
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'delvote':
case 'delvoto':  
if(!info.key.remoteJid) return
delVote(from)
reply('votação deletada com sucesso')
break

case 'votar':
case 'votacao': 
case 'votação': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!budy.includes("/")) return reply(`Cade a /, exemplo ${prefix}votação @marca/Ele é total gay/ 1`)
if(!q) return reply('*Votação*\n\n'+ prefix+ 'votar @tag marcar / pergunta  / 1 (1 = 1 Minuto)')
if (info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || info.message.extendedTextMessage.contextInfo == null) {
let id = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('/')
if(!Number(split[2])) return reply('cade os minutos eim?\n\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' para' +'\n\n' + `voto = ✅\ndevoto = ❌\n\npergunta: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break

case 'infosorteio':
case 'helpsorteio':  
if(verificado === true) {
await conn.sendMessage(from, {text:  infosorteio(prefix, pushname)}, {quoted: selo})
} else {
await conn.sendMessage(from, {text:  infosorteio(prefix, pushname)}, {quoted: info})  
}
break

case 'promover': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
teks = body.slice(11)
if(teks.length > 15) return reply('Só pode promover uma pessoa por vez..')
await sleep(2000)
reply(`@${teks} Foi promovido(a) para adm com sucesso.`)
conn.groupParticipantsUpdate(from, [`${teks}@s.whatsapp.net`], "promote")
break

case 'rebaixar': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
teks = body.slice(11)
if(teks.length > 15) return reply('Só pode rebaixar uma pessoa por vez..')
await sleep(2000)
reply(`@${teks} Foi Rebaixado(a) para membro comum com sucesso...`)
conn.groupParticipantsUpdate(from, [`${teks}@s.whatsapp.net`], "demote")
break

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')  
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
//======================================\\



//==========(TTPS/ATTP/TTM)============\\

case 'attp':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Sad`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await conn.sendMessage(from, {sticker: buffer}, {quoted: info}).catch(e => {
reply('ERROR, ALGUM PROBLEMA NA API, EU ACHO.. ')  
})
break

case 'ttp':
try {
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
string = args.join(' ') || 'Texto indefinido'
post = `http://aleatoryapi.herokuapp.com/api/ttp?texto=${string}&apikey=${keyale}`
sendStickerFromUrl(from, post, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
try {
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
url = await getBuffer(`http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${encodeURI(q)}`)
await conn.sendMessage(from, {sticker: url}, {quoted: info})
} catch {
reply('ERROR')
}
break	


//======================================\\




//===(ZOUEIRASJOGOS/HUMOR)===\\

case 'modonsfw':
case 'nsfw':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'modojogo':
case 'modojogos':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isModobn) return reply('o modojogos já está ativo')
modobn.push(from)
fs.writeFileSync('./datab/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓Ativado com sucesso o modojogos no grupo\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isModobn) return reply('o modojogos já está Desativado')  
modobn.splice(from, 1)
fs.writeFileSync('./datab/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`✓Modojogos desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'nick':
case 'gerarnick':
case 'fazernick':
nick = args.join(' ')
if(!nick) return reply('Escreva o Nick ou nome que você quer personalizar.')
axios.get(`https://aleatoryapi.herokuapp.com/api/fazernick?nome=${nick}&apikey=${keyale}`)
.then(dados => {
const emoji = `🔮`
nicks = dados.data
txt = '💈Nicks Gerados Com Sucesso!💈\n\n'
for (let i = 0; i < nicks.length; i++) {
txt += `${emoji} ${nicks[i]}\n`
}
txt += `\n\n
➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Não pode incluir letras modificadas nem emojis, ou pode ser que a api caiu, mas volta logo logo...')  
})
break

//////////////////////APPS////////////////

case 'lista-apps':
sections = [
    {
	title: "𝚝𝚘𝚍𝚘𝚜 𝚘𝚜 𝚊𝚙𝚙𝚜",
	rows: [
	    {title: "🐼TERMUX🐼", rowId: `${prefix}termux`, description: "komi domina bb"},
	    {title: "🌸KOMI🌸", rowId: `${prefix}komii`, description: "komi domina bb"},
	    {title: "✅YOU-CUT✅", rowId: `${prefix}you`, description: "komi domina bb"},
	    {title: "🚸SNAP-TUBER🚸", rowId: `${prefix}snap`, description: "komi domina bb"},
	    
	]
    },
]
 

listMessage2 = {
  text: `⚠️ⓚⓞⓜⓘ-ⓢⓐⓝ⚠️`,
  footer: `Olá ${pushname}, aqui está minha lista de apps atualizada`,
  title: "𝚕𝚒𝚜𝚝𝚊-𝚊𝚙𝚙𝚜",
  buttonText: "🚸CLIQUE AQUI🚸",
  sections
}
sendMsg = await conn.sendMessage(from, listMessage2, {quoted: selo})
break



case 'termux':
sendBimg(from, `${logo13}`, "Onde Voce Quer Receber o termux?", NomeDoBot, [
{buttonId:`${prefix}termuxpv`, buttonText: {displayText: `🚫PRIVER🚫`}, type: 1}, {buttonId:`${prefix}termuxgp`, buttonText: {displayText: `✅GRUPO✅`}, type: 1}],selo)
break

case 'termuxgp':
reply(`conectando ao termux 0.118.0 ....`)
buttons = [
{buttonId: `nero`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/2f4b0fe03c25fa2acd2ac.mp4'},
caption: "➪🅃🄴🅁🄼🅄🅇➪                                https://www.mediafire.com/file/4jv2xdstg5ieunl/Termux0.118.0.apk/file",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'termuxpv':
reply(`verifique seu pv por favor🐼...`)
buttons = [
{buttonId: `nero`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/2f4b0fe03c25fa2acd2ac.mp4'},
caption: "➪🅃🄴🅁🄼🅄🅇➪                                https://www.mediafire.com/file/4jv2xdstg5ieunl/Termux0.118.0.apk/file",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(sender, buttonMessage, {quoted: selo})
break


case 'komii':
sendBimg(from, `${logo13}`, "Onde Voce Quer Receber a komi?", NomeDoBot, [
{buttonId:`${prefix}komipv`, buttonText: {displayText: `🚫PRIVER🚫`}, type: 1}, {buttonId:`${prefix}komigp`, buttonText: {displayText: `✅GRUPO✅`}, type: 1}],selo)
break

case 'komigp':
reply(`arquivos da komi-bot....`)
buttons = [
{buttonId: `nero`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/89d2dcdfdcf3aa0b1524e.mp4'},
caption: "➪🄺🄾🄼🄸-🄱🄾🅃➪                                https://www.mediafire.com/file/pc17ot0um53rm81/KOMI-MDV2.zip/file",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'komipv':
reply(`verifique seu privado🐼....`)
buttons = [
{buttonId: `nero`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/89d2dcdfdcf3aa0b1524e.mp4'},
caption: "➪🄺🄾🄼🄸-🄱🄾🅃➪                                https://www.mediafire.com/file/pc17ot0um53rm81/KOMI-MDV2.zip/file",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(sender, buttonMessage, {quoted: selo})
break


case 'you':
sendBimg(from, `${logo13}`, "Onde Voce Quer Receber o you-cut?", NomeDoBot, [
{buttonId:`${prefix}youpv`, buttonText: {displayText: `🚫PRIVER🚫`}, type: 1}, {buttonId:`${prefix}yougp`, buttonText: {displayText: `✅GRUPO✅`}, type: 1}],selo)
break

case 'yougp':
reply(`you-cut pro app....`)
buttons = [
{buttonId: `nero`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/89d2dcdfdcf3aa0b1524e.mp4'},
caption: "➪🅈🄾🅄-🄲🅄🅃➪                                https://www.mediafire.com/file/5y6rp0t6ffgvnpm/YouCut-Pro-1.452.1119-SK_BR_CANAL.apk/file",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'youpv':
reply(`verifique seu privado🐼....`)
buttons = [
{buttonId: `nero`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1baa88cf5771898829c38.mp4'},
caption: "➪🅈🄾🅄-🄲🅄🅃➪                                https://www.mediafire.com/file/5y6rp0t6ffgvnpm/YouCut-Pro-1.452.1119-SK_BR_CANAL.apk/file",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(sender, buttonMessage, {quoted: selo})
break


case 'snap':
sendBimg(from, `${logo13}`, "Onde Voce Quer Receber o snaptube?", NomeDoBot, [
{buttonId:`${prefix}snappv`, buttonText: {displayText: `🚫PRIVER🚫`}, type: 1}, {buttonId:`${prefix}snapgp`, buttonText: {displayText: `✅GRUPO✅`}, type: 1}],selo)
break

case 'snapgp':
reply(`conectando ao snap-tube pro ....`)
buttons = [
{buttonId: `nero`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1a09aa3b77b954e0aab55.mp4'},
caption: "➪🅂🄽🄰🄿-🅃🅄🄱🄴🅁➪                                http://www.mediafire.com/file/lfdc3ptkhear0w0/Snaptube_Premium_BY_FlashStudio.apk/file",
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'snappv':
reply(`verifique seu pv por favor🐼...`)
buttons = [
{buttonId: `nero`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1a09aa3b77b954e0aab55.mp4'},
caption: "➪🅂🄽🄰🄿-🅃🅄🄱🄴🅁➪                                https://www.mediafire.com/file/4jv2xdstg5ieunl/Termux0.118.0.apk/file",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(sender, buttonMessage, {quoted: selo})
break


////////

case 'chance':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojpgos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojogos 1`)  
var avb = body.slice(7)
if (args.length < 1) return conn.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: info})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
await conn.sendMessage(from, {text: hasil, contextInfo: {mentionedJid: [sender]}}, {quoted: info})
break

case 'gay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojogos 1`)
rate = body.slice(5)
reply(' ❰ Pesquisando a sua ficha de gay : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggay}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 2 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 4 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
await conn.sendMessage(from, {image: wew, caption: '  O quanto você é gay? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ gay 🏳️‍🌈\n\n '+bo+' ', thumbnail:null}, {quoted: info})
}, 7000)
break

case 'feio':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojogos 1`)
rate = body.slice(6)
reply(' ❰ Pesquisando a sua ficha de feio : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgfeio}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {bo = 'É não é feio'} else if (feio == 21 ) {bo = '+/- feio'} else if (feio == 23 ) {bo = '+/- feio'} else if (feio == 24 ) {bo = '+/- feio'} else if (feio == 25 ) {bo = '+/- feio'} else if (feio == 26 ) {bo = '+/- feio'} else if (feio == 27 ) {bo = '+/- feio'} else if (feio == 2 ) {bo = '+/- feio'} else if (feio == 29 ) {bo = '+/- feio'} else if (feio == 30 ) {bo = '+/- feio'} else if (feio == 31 ) {bo = 'Ainda tá na média'} else if (feio == 32 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {bo = 'tenho '} else if (feio == 39 ) {bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {bo = 'Feiooo'} else if (feio == 50 ) {bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {bo = 'você é Feio demais 🙈'} 

await conn.sendMessage(from, {image: wew, caption: '  O quanto você é feio? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱ feio\n\n '+bo+' '}, {quoted: info})
 }, 7000)
break 

case 'matar':
case 'mata':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojogps 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
jrpp = await getBuffer(`${matarcmd}`)
await conn.sendMessage(from, {video: jrpp, gifPlayback: true, caption: susp}, {quoted: info})
break 

case 'corno':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}mdodojogos 1`)
rate = body.slice(7)
reply(' ❰ Pesquisando a ficha de corno : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgcorno}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: '  O quanto você é corno? \n\n 「 '+rate+' 」Você é: ❰ '+random+'% ❱  corno 🐃'}, { quoted: info})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojogos 1`)
rate = body.slice(7)
reply(' ❰ Pesquisando a ficha de vesgo : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgvesgo}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: 'O quanto você é vesgo? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  Vesgo 🙄😆'}, {quoted: info})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojogos 1`)
rate = body.slice(7)
reply(' ❰ Pesquisando a ficha de bebado : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgbebado}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: 'O quanto você é bebado? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱ Bêbado 🤢🥵🥴'}, {quoted: info})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojgos 1`)
rate = body.slice(6)
reply(' ❰ Pesquisando a ficha de gado : '+rate+', aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggado}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: 'O quanto você é gado? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gado 🐂'}, {quoted: info})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojogos 1`)
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de gostoso : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggostoso}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: '  O quanto você é gostoso? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱ gostoso 😝', gifPlayback: true}, {quoted: info})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojogos 1`)
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de gostosa : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imggostosa}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: 'O quanto você é gostosa? 😏\n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  gostosa 😳'}, {quoted: info})
}, 7000)
break

case 'beijo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojogos 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = await getBuffer(`${beijocmd}`)
await conn.sendMessage(from, {video: wew, gifPlayback: true, caption: susp}, {quoted: info})
break

case 'tapa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for, apenas digite ${prefix}modojogos 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um tapa na raba da😏 @${mentioned[0].split('@')[0]} 🔥` 
jrq = await getBuffer(`${tapacmd}`)
await conn.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp}, {quoted: info})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você Acabou de da um chute em @${mentioned[0].split('@')[0]} 🤡` 
jry = await getBuffer(`${chutecmd}`)
await conn.sendMessage(from, {video: jry, gifPlayback: true, caption: susp}, {quoted: info})
break 

case 'dogolpe':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
if (args.length < 1) return await conn.sendMessage(from, {text: 'coloca um nome'}, {quoted: info})
pkt = body.slice(9)
random = `${Math.floor(Math.random() * 100)}`
jpr = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *${args[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
reply(jpr)
break

case 'shipo':
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1 = @${teupai111.id.split('@')[0]}\n && 2 = ${teks} com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break

case 'nazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
rate = body.slice(9)
reply(' ❰ Pesquisando a sua ficha de nazista : '+rate+' aguarde... ❱')
 setTimeout(async() => {
wew = await getBuffer(`${imgnazista}`)
zxzz = 
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: 'O quanto você é nazista? \n\n「 '+rate+' 」Você é: ❰ '+random+'% ❱  nazista 卐'}, {quoted: info})
}, 7000)
break 

case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 4) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`			
				
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await conn.sendMessage(from, {text: `É necessário 5 jogadores para se construir um ranking`}, {quoted: info})
}
break

case 'checkativo':
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break

case 'ranklevel':
case 'rl':
case 'rank':
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
nom++
leaderboardlvl += `
┏ ✘🌖 ${setting.NomeDoBot} 🌘✘┓
┃•────•───────•───•
┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].id.replace('@s.whatsapp.net', '')}
┣❲🏆❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
if(verificado === true) {
conn.sendMessage(from, {text: leaderboardlvl, sendEphemeral: true}, {quoted: selo})
} else {
conn.sendMessage(from, {text: leaderboardlvl, sendEphemeral: true}, {quoted: info})
}
} catch (err) {
console.error(err)
await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
}
break

case 'rankgay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgado':
case 'rankgados':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
try{
d = []
ret = '🐂🐂 Rank dos mais gados do grupo \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐂❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankcorno':
case 'rankcornos':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.id.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.id.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.id.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.id.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.id.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ytb, membr, true)
break

case 'rankgostosos':
case 'rankgostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojpgos 1`)
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o02.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o04.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.id.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'rankgostosas':
case 'rankgostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'ranknazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
try{
if(!isGroup) return reply(enviar.msg.grupo)
d = []
teks = '💂‍♂️Rank dos mais nazistas do gp\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankotakus':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.id.split('@')[0]}\n@${otakus2.id.split('@')[0]}\n@${otakus3.id.split('@')[0]}\n@${otakus4.id.split('@')[0]}\n@${otakus5.id.split('@')[0]}\n@${otakus6.id.split('@')[0]}\n@${otakus7.id.split('@')[0]}\n@${otakus.id.split('@')[0]}\n@${otakus9.id.split('@')[0]}\n@${otakus10.id.split('@')[0]}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(otakus1.id)
membr.push(otakus2.id)
membr.push(otakus3.id)
membr.push(otakus4.id)
membr.push(otakus5.id)
membr.push(otakus6.id)
membr.push(otakus7.id)
membr.push(otakus.id)
membr.push(otakus9.id)
membr.push(otakus10.id)
mentions(ytb, membr, true)
break

case 'rankpau':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modojogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}modojogos 1`)
membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.id.split('@')[0]}\n${pc1}\n@${paus2.id.split('@')[0]}\n${pc2}\n@${paus3.id.split('@')[0]}\n${pc3}\n@${paus4.id.split('@')[0]}\n${pc4}\n@${paus5.id.split('@')[0]}\n${pc5}\n\n ${setting.NomeDoBot}`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mentions(pdr, membr, true)
break 

case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
joguinhodavelhajs.push(sender)
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
conn.sendMessage(from, {text: strChat}, {quoted: info,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if (!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota") {
var tes = "A vitória é do BOT"
}
if (vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'cassino':
  //CASSINO
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
} 

sendBtext(from, `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`, `Nome: ${pushname}\nClique No Botão Abaixo, Para Continuar, Boa Sorte!`, [
  {buttonId:`${prefix + command}`, buttonText: {displayText: '=͟͟͞͞𝑷𝑹𝑶𝑿𝑰𝑴𝑶'}, type: 1}], info)
if (Vitória == "Você ganhou!!!") {
reply('Parabéns')
}
await limitAdd(sender)
break

case 'quizanimais':
if(!isGroup) return reply('Comando apenas para grupos')
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(!isGroupAdmins) return reply('Comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo \npara desativar use quizanimais 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/quizanim-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await conn.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
} else {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto =`                             「❓Quiz❓」`
wew = await getBuffer(`${dataAnagrama2.foto}`)  
if(verificado === true) {
await conn.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
} else {
await conn.sendMessage(from, {wew: image, caption: imagemtexto, thumbnail: wew}, {quoted: info})
}
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/quizanim-${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./armor/quizanim-${from}.json`)
reply("Desativado com sucesso")
}
await limitAdd(sender)
break

case 'anagrama':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
conn.sendMessage(from, {text: `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./armor/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break

case 'revelaranime':
case 'revelaanime':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/quizanime-${from}.json`))
reply (`${dataAnagrama.original}`)
break

case 'revelaranimal':
case 'revelaanimal':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
reply (`${dataAnagramaa.original}`)
break

//=======(FIM--JOGOS)========\\



//=(CASE-SIMIH-INTELIGÊNCIA-ARTIFICIAL)=\\

case 'simi':
if(isSimi) return reply('Desativado')
sduy = args.join(" ")
data = await fetchJson(`https://api.simsimi.net/v2/?text=${sduy}&lc=pt`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break

case 'simih':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'simih2':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./armor/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
samih2.splice(from, 1)
fs.writeFileSync('./armor/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

//========================================\\

case 'video1':
reply(`ta ta baka, aguarde.....`)
buttons = [
{buttonId: `video1`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/159584dd3a5bd02f18bdb.mp4'},
caption: "ze latinha e ze da timba",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video2':
reply(`aguarde......`)
buttons = [
{buttonId: `video2`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/085d8bbd771dcb68d3789.mp4'},
caption: "call out my name",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video3':
reply(`ta ta baka, aguarde.....`)
buttons = [
{buttonId: `video3`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/647e5333bc6b831ea9b7c.mp4'},
caption: "billie eilish_happier",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video4':
reply(`aguarde......`)
buttons = [
{buttonId: `video4`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3e37067bf2f121ee9e62d.mp4'},
caption: "ghostemane_I duckinf",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video5':
reply(`ta ta baka, aguarde.....`)
buttons = [
{buttonId: `video5`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f9fca52a8173887eea140.mp4'},
caption: "edit_vai me da na dz7",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video6':
reply(`aguarde cria de vitas...`)
buttons = [
{buttonId: `video6`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7703b554eb8686d82cf8c.mp4'},
caption: "cover_ópera 2 vitas",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video7':
reply(`sou do roock....`)
buttons = [
{buttonId: `video7`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9a3c9d1819e9ddd4596ea.mp4'},
caption: "nirvana_smells-like",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video8':
reply(`aguarde cria de vesgo.....`)
buttons = [
{buttonId: `video8`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4f010031a73b645719092.mp4'},
caption: "mc noia_tu de 4",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video9':
reply(`ok aguarde ai beta....`)
buttons = [
{buttonId: `video9`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ec21e2891e7aa1a1e81a6.mp4'},
caption: "tavin_isso vale minha vida",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video10':
reply(`aguarde cria de aborto.....`)
buttons = [
{buttonId: `video10`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/87978b5bda3b26d1dc8ee.mp4'},
caption: "the weeknd_repeat",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video11':
reply(`ok aguarde.....`)
buttons = [
{buttonId: `video11`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7e1bbca3adf61d5a1cbea.mp4'},
caption: "joji_yeah right",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video12':
reply(`ta ta baka, aguarde.....`)
buttons = [
{buttonId: `video12`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7e64eca049e5deb64245a.mp4'},
caption: "joji_slow dancing",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video13':
reply(`aguarde a net desse pobre....`)
buttons = [
{buttonId: `video13`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/23569422fdc7a76ea1e76.mp4'},
caption: "joji_gimme love",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video14':
reply(`opa, aguarde um momento...`)
buttons = [
{buttonId: `video14`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f25fcc0f38099988a7a74.mp4'},
caption: "kamaitachi_psicopata",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'video15':
reply(`aguarde um momento....`)
buttons = [
{buttonId: `video15`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/59de2803776f05c26d047.mp4'},
caption: "pensando coisas 2",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'gostosas':
reply(`as 3 putas mais lindas🥰`)
buttons = [
{buttonId: `gostosas`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c50588f4c51c19f463438.mp4'},
caption: "as 3 putas mais lindas🥰",
footerText: 'aguarde a net desse pobre❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'okkomi':
reply(`que bom que vc gosto🥰`)
buttons = [
{buttonId: `okkomi`, buttonText: {displayText: `Ok ${NomeDoBot}`}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/00c6f1b74afacc6e9ce21.mp4'},
caption: "que bom que vc gosto🥰",
footerText: 'de nada minha coisa linda❤️',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

//////////////KOMI-ANIMATION////////////////

case 'komi-jojo':
anu = await getBuffer('https://telegra.ph/file/b14f243aa9fb5ae24f901.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case 'komi-jojo2':
anu = await getBuffer('https://telegra.ph/file/f2a1132eddb2d01f89ff8.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case 'komi&aharen':
anu = await getBuffer('https://telegra.ph/file/753449a1af353cc7e7f77.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case 'komi-nora':
anu = await getBuffer('https://telegra.ph/file/02f743cf975cbff51708c.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case 'komi-ordering':
anu = await getBuffer('https://telegra.ph/file/52f81beca7e1aba046dcb.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case 'komi-nikki':
anu = await getBuffer('https://telegra.ph/file/f60a5344a7d770345312f.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case 'komi-suba':
anu = await getBuffer('https://telegra.ph/file/4d911df29d338fdd474cb.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case 'komi-demon':
anu = await getBuffer('https://telegra.ph/file/86c4230faae97e9cbf023.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case 'komi&kaguya':
anu = await getBuffer('https://telegra.ph/file/471293f62bf4652504fe7.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case 'komi-violet':
anu = await getBuffer('https://telegra.ph/file/0a9bffc3e621a9596609d.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break


///////////////////fim/////////////////////
//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
const soundft = fs.readFileSync('audios/qviado.mp3')
await conn.sendMessage(from, {audio: soundft, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break

case 'infobot':
const cmdoo = fs.readFileSync('audios/infobot.mp3')
await conn.sendMessage(from, {audio: cmdoo, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio1':
const cmdo = fs.readFileSync('audios/audio1.mp3')
await conn.sendMessage(from, {audio: cmdo, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio2':
const cmd = fs.readFileSync('audios/audio2.mp3')
await conn.sendMessage(from, {audio: cmd, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio3':
const cmd1 = fs.readFileSync('audios/audio3.mp3')
await conn.sendMessage(from, {audio: cmd1, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio4':
const cmd2 = fs.readFileSync('audios/audio4.mp3')
await conn.sendMessage(from, {audio: cmd2, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio5':
const cmd3 = fs.readFileSync('audios/audio5.mp3')
await conn.sendMessage(from, {audio: cmd3, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio6':
const cmd4 = fs.readFileSync('audios/audio6.mp3')
await conn.sendMessage(from, {audio: cmd4, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio7':
const cmd5 = fs.readFileSync('audios/audio7.mp3')
await conn.sendMessage(from, {audio: cmd5, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio8':
const cmd6 = fs.readFileSync('audios/audio8.mp3')
await conn.sendMessage(from, {audio: cmd6, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio9':
const cmd7 = fs.readFileSync('audios/audio9.mp3')
await conn.sendMessage(from, {audio: cmd7, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio10':
const cmd8 = fs.readFileSync('audios/audio10.mp3')
await conn.sendMessage(from, {audio: cmd8, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio11':
const cmd9 = fs.readFileSync('audios/audio11.mp3')
await conn.sendMessage(from, {audio: cmd9, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio12':
const cmd10 = fs.readFileSync('audios/audio12.mp3')
await conn.sendMessage(from, {audio: cmd10, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio13':
const cmd11 = fs.readFileSync('audios/audio13.mp3')
await conn.sendMessage(from, {audio: cmd11, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio14':
const cmd12 = fs.readFileSync('audios/audio14.mp3')
await conn.sendMessage(from, {audio: cmd12, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'audio15':
const cmd13 = fs.readFileSync('audios/audio15.mp3')
await conn.sendMessage(from, {audio: cmd13, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'lofi1':
const cmd14 = fs.readFileSync('audios/lofi1.mp3')
await conn.sendMessage(from, {audio: cmd14, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'lofi2':
const cmd15 = fs.readFileSync('audios/lofi2.mp3')
await conn.sendMessage(from, {audio: cmd15, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'lofi3':
const cmd16 = fs.readFileSync('audios/lofi3.mp3')
await conn.sendMessage(from, {audio: cmd16, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'lofi4':
const cmd17 = fs.readFileSync('audios/lofi4.mp3')
await conn.sendMessage(from, {audio: cmd17, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'lofi5':
const cmd18 = fs.readFileSync('audios/lofi5.mp3')
await conn.sendMessage(from, {audio: cmd18, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'lofi6':
const cmd19 = fs.readFileSync('audios/lofi6.mp3')
await conn.sendMessage(from, {audio: cmd19, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'lofi7':
const cmd20 = fs.readFileSync('audios/lofi7.mp3')
await conn.sendMessage(from, {audio: cmd20, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'lofi8':
const cmd21 = fs.readFileSync('audios/lofi8.mp3')
await conn.sendMessage(from, {audio: cmd21, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'lofi9':
const cmd22 = fs.readFileSync('audios/lofi9.mp3')
await conn.sendMessage(from, {audio: cmd22, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

case 'lofi10':
const cmd23 = fs.readFileSync('audios/lofi10.mp3')
await conn.sendMessage(from, {audio: cmd23, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if (!isQuotedVideo) return reply('Marque um vídeo')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
break 

case 'videolento':
case 'slowvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})
break

case 'videorapido':
case 'fastvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})		
break

case 'grave2':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'tupai':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.5,asetrate=65100"' ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'reverse':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'fat':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'deep':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=44500*2/3" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'earrape':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "volume=12'" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'blown':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "acrusher=.1:1:64:0:log" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'robot':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'nightcore':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'grave':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'adolesc':
case 'vozmenino':  
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break  

case 'tomp3':
if (!isQuotedVideo) return reply('Marque o video pfv')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass3':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'estourar': 
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'fast':
case 'audiorapido':  
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'esquilo':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'tupai':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.5,asetrate=65100"' ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'audiolento': 
case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

//=========(FIM-ALTERAR-AUDIO)===========\\


//=======(JOGO-DA-VELHA-COM-MAQUINA)=======\\

case 'tttme':
if (!isGroup) return reply('SÓ EM GRUPO')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
conn.sendMessage(from, {text: tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender))}, {quoted: info})
break

case 'tttrank':
if (!isGroup) return reply(enviar.msg.grupo)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '*🔥Ranking dos melhores players🔥*\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`

} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
  
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
  
}
mentioned_jid.push(tictactoe[i].id)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await conn.sendMessage(from, {text: `*É necessário 3 jogadores para se construir um ranking*`}, {quoted: info})
}
break

case 'jogar':
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`*O jogo não foi iniciado*\n*Digite ${prefix}ttt <dificukdade> para iniciar*`)
} else if (tttset.player != tttset.playertest) {
reply(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
  
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)

} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' && coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`*Diga a cordenada*\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
  
switch (args[0]) {
  
case 'a1':
if (esp.a1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a2':
if (esp.a2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a3':
if (esp.a3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b1':
if (esp.b1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b2':
if (esp.b2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b3':
if (esp.b3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c1':
if (esp.c1 != "🔲") {
 reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c2':
if (esp.c2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c3':
if (esp.c3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
            
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
              
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break

case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break

case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
                
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
conn.sendMessage(from, {text: `*VOCÊ VENCEU, PARABENS*\n\n *VOCÊ GANHOU ${randomTTTXP}XP*`})
} else {
conn.sendMessage(from,{text: `*VOCÊ VENCEU, PARABENS*`},)
}

const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
				  
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break

}	
conn.sendMessage(from, {text: `*Você perdeu*\n\n AGORA VC PAGARÁ: ${randomTTTXP}XP`})
	
} else {
conn.sendMessage(from, {text: `*Você perdeu*`})
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
				
} else if (Tie()) {
if (isCmd) {
conn.sendMessage(from, {text: `*JOGO EMPATADO, NÃO HOUVE PERDAR*`})
} else {
conn.sendMessage(from, {text: `*JOGO, EMPATADO, TENHA UM BOM DIA*`})
}

const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
				
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)

} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = info
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
blat =  `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`
conn.sendMessage(from, {text: `${blat}\n\nCaso não saiba como jogar digite: ${prefix}ttthelp`})
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 12000) //2 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
conn.sendMessage(from, {text: ttthelp(prefix)})
break
//==========(EFEITOS-MARCAR)==========\\

case 'triggered':
try {
if(!isQuotedImage) return reply("Marque uma imagem")
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
post = await fetchJson(`https://aleatoryapi.herokuapp.com/canvas/trigger?url=${res}&apikey=${keyale}`)
sendStickerFromUrl(from, {sticker: post}, {quoted:info})
} else {
reply('error')
}
} catch {
reply('ERROR')
}
break

case 'togif':
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp_mp4(buff)
mp4 = await getBuffer(a)
conn.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: info})
fs.unlinkSync(buff)
}
break

case 'rename':
case 'roubar':  
if (!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) return reply('*E o autor e o nome do pacote?*')
if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: info})
.catch((err) => {
reply(`❎ Error, tenta mais tarde`); 
})
break

case 'rip':  
case 'morto':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/rip?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR')
}
break

case 'lgbt':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/lgbt?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR')
}
break

case 'trash':
case 'lixo':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/trash?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR')
}
break

case 'comporn':
try {
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
buffer = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/phub?nome=${jrr}&msg=${jrr1}&foto=https://telegra.ph/file/954832554bf2b2e40f932.jpg&apikey=${keyale}`)
await conn.sendMessage(from, {image: buffer}, {quoted: info})
} catch {
reply('ERROR')
}
break 

case 'preso':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/jail?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR')
}
break

case 'legenda':
try {
gh = args.join(" ")        
txt1 = gh.split('/')[0] || ''
txt2 = gh.split('/')[1] || ''
if(!gh.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedSticker)) {
base64 = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/api/legenda?url=${link}&texto1=${encodeUrl(txt1)}&texto2=${encodeUrl(txt2)}&apikey=${keyale}`) 
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('Error!!')
}
break

case 'zombie':
case 'zumbi':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
jrd = await fetchJson(`https://jonaz-api-v2.herokuapp.com/zombie?url=${link}`)
zumb = await getBuffer(jrd.result)
conn.sendMessage(from, {image: zumb}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR, DESCULPE.')
}
break

case 'borrar':
case 'figuborrada':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/blur?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR')
}
break

case 'hitler':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/hitler?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR')
}
break

case 'deletef':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/delete?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR')
}
break

case 'wanted':
case 'procurado':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/procurado?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info}).catch(e => {
reply("Error!!")  
})
} else {
reply('Selecione uma imagem...!')
}
break

case 'calunia':
k = `${body.slice(10)}`
txt1 = k.split("/")[0];
txt2 = k.split("/")[1];
txt3 = k.split("/")[2];
if(!k.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} @marca-a-pessoa/Fala algo como fosse ele/Reação : nossaa..`)
 conn.sendMessage(from, {text: `${txt3}`},{quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}}).catch(e => {
reply("Error!!")  
})
 break

//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : ALEATORY CONTEÚDOS)==\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if (budy.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(SoDono) return
if(isGroupAdmins) return
if(isPremium) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}

/////////////MIDIA-LOFI-AUDIO///////////////



/////////////FIM//////////////

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}


if (budy.includes("video do pl") || budy.includes("Video do pl") || budy.includes("Video do PL") || budy.includes("VIDEO DO PL") || budy.includes("PL video") || budy.includes("PL vídeo") || budy.includes("vídeo do pl") || budy.includes("Vídeo do PL") || budy.includes("Vídeo do Pl")){
anu = await getBuffer('https://telegra.ph/file/0855427ea91c9c74eb290.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
}

if (budy.includes("bot corno") || (budy.includes("Bot corno"))){
reply("Corno é você, seu animal")
}

if (budy.includes("adivinha meu celular") || (budy.includes("Adivinha meu celular") || (budy.includes("Adivinha Meu celular") || (budy.includes("Adivinha Meu Celular") || (budy.includes("bot qual meu celular")))) )){
adivinha = info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅';
await conn.sendMessage(from, {text: adivinha}, {quoted: info})
}

if(messagesC.includes('exec')) {
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

if (messagesC == "corno"){
tujuh = fs.readFileSync('./audios/corno.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

//==============(ANTILINK)===============\\

switch(ants){
} 

 //=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrao) { //CREDITOS TIAGO
 if (palavra.includes(budy)) {
 if (!isGroupAdmins) {
 conn.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : info})       
setTimeout( () => {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
conn.sendMessage(from, {text: `*「 🗣️ANTI PALAVRÃO🗣️ 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`}, {quoted : info}).catch(e => {
conn.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted : info})
})       							
}, 0)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}
//=======================================\\

if(isAntiLink) { 
if(!isUrl(bady)) return 
if(type === 'stickerMessage') return 
if(type === 'audioMessage') return 
if(type === 'imageMessage') return   
if(budy.includes("https://") || (budy.includes(".net") || (budy.includes(".com" ) || (budy.includes("//s.kwai.app/") || (budy.includes("//vm.tiktok") || (budy.includes("www.") || (budy.includes("chat.whatsapp") || (budy.includes(".xml") || (budy.includes("youtube.com") || (budy.includes("//t.me/") || (budy.includes(".css")))))))))))) {
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
if (!isGroup) return
if (isGroupAdmins) return reply(`*Vc é admin do gp,fica tranquilo que não irei te banir.*`)
setTimeout( () => {
}, 1100)
setTimeout( () => {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}
//========================================\\


//================(SIMIH-2)=================\\

if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)

if (sami) conn.sendMessage(from, {text: sami, thumbnail: fs.readFileSync('./logos/logo2.jpg', 'base64')}, {quoted: info});
}
}


 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
}


//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if (isCmd) {
uptime = process.uptime()  
sendBtext(from, `
╭─────────
│
│|• Data: ${date} 
│|• Hora: ${hora2}
│|• Comando Não Registrado
│|• Use: ${prefix}menu
│
╰─────────`, `Tempo ativo : ${kyun(uptime)}`,[{buttonId: `${prefix}menu`, buttonText: {displayText: `⚠️CLIQUE AQUI⚠️`}, type: 1}], selo)  
}

//========================================\\

}
} catch (erro) {
console.log(erro)
}
})

conn.ev.on('connection.update', (update) => {
const { connection, lastDisconnect, qr} = update

if(qr) {
console.log(color("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

if(connection === 'close') {
var shouldReconnect = ((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut)

console.log('Conexão fechada devido a ', lastDisconnect.error, ', Reconectar ', shouldReconnect)

console.log(color("Boa sorte, caso de bugs, apenas desligue e ligue novamente, pressionando volume de menos do celular e apertando letra C"))

if(String(lastDisconnect.error).includes("Connection Failure")) {
exec("rm baileys_store_multi.json")  
exec("rm auth_info_multi.json")
console.log(color("QRCODE ESTÁ MORTO, NÃO ESCANEOU CORRETAMENTE, IREI APAGAR ELE E GERAR UM NOVO QRCODE, BOA SORTE..", "red"))
process.exit()
}

if(String(lastDisconnect.error)) {
startAle()
}

}

if(connection === 'connecting') {
 start('2', 'CONECTANDO A KOMI-MD 2.0..')    
}

if(connection === 'open') {
success('2', 'KOMI MD 2.0 CONECTADO COM SUCESSO..')
}

if(update.isNewLogin) {
 startAle()
}

})

}

startAle()