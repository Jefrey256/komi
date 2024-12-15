const chalk = require("chalk");
const hx = require("hxz-api");
const {
  Boom
} = require("@hapi/boom");
const axios = require("axios");
const fs = require('fs');
const yts = require("yt-search");
const util = require("util");
const P = require('pino');
const encodeUrl = require("encodeurl");
const linkfy = require("linkifyjs");
const request = require("request");
const ms = require('ms');
const ffmpeg = require("fluent-ffmpeg");
const imgbb = require("imgbb-uploader");
const googleImage = require("g-i-s");
const googleIt = require("google-it");
const fetch = require("node-fetch");
const imageToBase64 = require("image-to-base64");
const {
  EmojiAPI
} = require("emoji-api");
const qrterminal = require("qrcode-terminal");
const emoji = new EmojiAPI();
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const moment = require("moment-timezone");
const color = (_0x596682, _0x3d2447) => {
  return !_0x3d2447 ? chalk.green(_0x596682) : chalk.keyword(_0x3d2447)(_0x596682);
};
const time = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
const hora = moment.tz('America/Sao_Paulo').format("HH:mm:ss");
const date = moment.tz("America/Sao_Paulo").format('DD/MM/YY');
const getBuffer = require("./armor/getbuffer");
const {
  convertSticker
} = require('./armor/swm.js');
const {
  fetchJson,
  fetchText,
  getBase64,
  createExif
} = require("./armor/fetcher");
const {
  webp2gifFile
} = require("./armor/js/gif.js");
const webp_mp4 = require("./armor/js/webp_mp4.js");
const {
  insert,
  response
} = require('./armor/simi.js');
const {
  addLimit,
  getLimit
} = require("./armor/js/limit.js");
const {
  mediafireDl
} = require('./armor/js/mediafire.js');
const {
  upload,
  nit
} = require('./armor/tourl');
const {
  addBanned,
  unBanned,
  BannedExpired,
  cekBannedUser
} = require("./armor/js/banned.js");
const {
  isFiltered,
  addFilter
} = require("./armor/js/antispam.js");
const {
  validmove,
  setGame
} = require("./armor/tictactoe");
const {
  addComandosId,
  deleteComandos,
  getComandoBlock,
  getComandos,
  addComandos
} = require("./armor/js/addcmd.js");
const {
  palavrasANA,
  quizanime,
  quizanimais
} = require("./armor/jogo/jogos.js");
const {
  getLevelingXp,
  getLevelingLevel,
  getLevelingId,
  addLevelingXp,
  addLevelingLevel,
  addLevelingId,
  bayarLimit,
  limitAdd,
  addATM,
  addKoinUser,
  checkATMuser,
  getRegisteredRandomId,
  addRegisteredUser,
  createSerial,
  checkRegisteredUser,
  confirmATM,
  runtime,
  getpc,
  supre
} = require("./armor/js/consts.js");
const {
  WinnerX,
  WinnerO,
  Tie,
  IA,
  IAmove1,
  IAalter,
  priorityC
} = require("./datab/ttt/TTTconfig/tttexp.js");
const {
  addTTTId,
  addTTTwin,
  addTTTdefeat,
  addTTTtie,
  addTTTpoints,
  getTTTId,
  getTTTwins,
  getTTTdefeats,
  getTTTties,
  getTTTpoints
} = require('./armor/js/tictactoe.js');
const {
  wait,
  getExtension,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  banner2,
  banner3,
  infopd,
  success,
  start,
  close,
  temporizador,
  cmdadd,
  addMetadata,
  chyt
} = require("./armor/functions.js");
const {
  addVote,
  delVote
} = require("./armor/js/vote");
const {
  ttthelp
} = require("./datab/ttt/TTTconfig/ttthelp");
const {
  tttme
} = require("./datab/ttt/TTTconfig/tttme");
const tttset = require('./datab/ttt/TTTconfig/tttset.json');
const esp = require("./datab/ttt/TTTconfig/tttframe.json");
const adeuscara = JSON.parse(fs.readFileSync('./datab/grupos/adeuscara.json'));
const welcome_group = JSON.parse(fs.readFileSync("./datab/grupos/welcomegp.json"));
const bye_group = JSON.parse(fs.readFileSync("./datab/grupos/byegp.json"));
const welcome_group2 = JSON.parse(fs.readFileSync("./datab/grupos/welcomegp2.json"));
const bye_group2 = JSON.parse(fs.readFileSync("./datab/grupos/byegp2.json"));
const voting = JSON.parse(fs.readFileSync("./armor/voting.json"));
const sotoy = JSON.parse(fs.readFileSync('./armor/sotoy.json'));
const countMessage = JSON.parse(fs.readFileSync("./datab/grupos/countmsg.json"));
const comandos = JSON.parse(fs.readFileSync("./dono/media/comandos.json"));
const welkom2 = JSON.parse(fs.readFileSync("./datab/usuarios/vacilo.json"));
const modobn = JSON.parse(fs.readFileSync("./datab/grupos/brincadeiras.json"));
const nsfw = JSON.parse(fs.readFileSync("./datab/grupos/nsfw.json"));
const daily = JSON.parse(fs.readFileSync("./datab/usuarios/diario.json"));
const nescessario = JSON.parse(fs.readFileSync('./dono/nescessario.json'));
const welkom = JSON.parse(fs.readFileSync("./datab/grupos/welkom.json"));
const premium = JSON.parse(fs.readFileSync("./datab/usuarios/premium.json"));
const limitefll = JSON.parse(fs.readFileSync("./datab/usuarios/flood.json"));
const antiflood = JSON.parse(fs.readFileSync("./datab/usuarios/antiflood.json"));
const samih = JSON.parse(fs.readFileSync("./datab/usuarios/simi.json"));
const samih2 = JSON.parse(fs.readFileSync("./armor/simi.json"));
const _leveling = JSON.parse(fs.readFileSync("./datab/usuarios/leveling.json"));
const _level = JSON.parse(fs.readFileSync("./datab/usuarios/level.json"));
const bancht = JSON.parse(fs.readFileSync("./datab/grupos/banchat.json"));
const anticall = JSON.parse(fs.readFileSync('./datab/usuarios/anticall.json'));
const ban = JSON.parse(fs.readFileSync("./datab/usuarios/banned.json"));
const afk = JSON.parse(fs.readFileSync("./datab/grupos/afk.json"));
const joguinhodavelhajs = JSON.parse(fs.readFileSync("./datab/usuarios/joguinhodavelha.json"));
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync("./datab/usuarios/joguinhodavelha2.json"));
const setting = JSON.parse(fs.readFileSync("./dono/settings.json"));
const logoslink = JSON.parse(fs.readFileSync("./logos/logos.json"));
const antilink = JSON.parse(fs.readFileSync("./datab/ants/antilink.json"));
const antifake = JSON.parse(fs.readFileSync('./datab/ants/antifake.json'));
const antilinkhard = JSON.parse(fs.readFileSync("./datab/ants/antilinkhard.json"));
const antilinkgp = JSON.parse(fs.readFileSync("./datab/ants/antilinkgp.json"));
const antiimg = JSON.parse(fs.readFileSync("./datab/ants/antiimg.json"));
const antisticker = JSON.parse(fs.readFileSync("./datab/ants/antisticker.json"));
const antinotas = JSON.parse(fs.readFileSync("./datab/ants/antinotas.json"));
const antictt = JSON.parse(fs.readFileSync("./datab/ants/antictt.json"));
const anticatalogo = JSON.parse(fs.readFileSync('./datab/ants/anticatalogo.json'));
const antidoc = JSON.parse(fs.readFileSync("./datab/ants/antidoc.json"));
const antiloc = JSON.parse(fs.readFileSync("./datab/ants/antiloc.json"));
const antipv = JSON.parse(fs.readFileSync("./datab/usuarios/antipv.json"));
const antivid = JSON.parse(fs.readFileSync("./datab/ants/antivideo.json"));
const antiaudio = JSON.parse(fs.readFileSync("./datab/ants/antiaudio.json"));
const palavra = JSON.parse(fs.readFileSync("./datab/grupos/palavras.json"));
const palavrao = JSON.parse(fs.readFileSync("./datab/grupos/palavrao.json"));
const {
  menu
} = require("./menus/menu.js");
const {
  menudono
} = require("./menus/dono.js");
const {
  adms
} = require("./menus/adms.js");
const {
  menulogos
} = require('./menus/menulogos.js');
const {
  menuprem
} = require("./menus/menuprem.js");
const {
  jogos
} = require("./menus/jogos.js");
const {
  animes
} = require("./menus/animes.js");
const {
  figurinhas
} = require("./menus/figurinhas.js");
const {
  menuplay
} = require("./menus/menuplay.js");
const {
  menubasico
} = require("./menus/menubasico.js");
const {
  menuinfo
} = require("./menus/menuinfo.js");
const {
  efeitos
} = require('./menus/efeitos.js');
const {
  infodono
} = require("./menus/infodono.js");
const {
  infovotacao
} = require("./armor/js/infovotacao.js");
const {
  infocontador
} = require("./armor/js/infocontador.js");
const {
  infobemvindo
} = require("./armor/js/infobv.js");
const {
  infolistanegra
} = require('./armor/js/infolistanegra.js');
const {
  infopalavrao
} = require("./armor/js/infopalavrao.js");
const {
  infobancarac
} = require("./armor/js/infobancarac.js");
const {
  gitdobot
} = require("./dono/gitdobot.js");
const {
  alteradores
} = require("./menus/alteradores.js");
const {
  configbot
} = require('./menus/configurar.js');
const {
  hospedar
} = require("./menus/hospedar-heroku.js");
const {
  cmd_termux
} = require("./menus/comandos-termux.js");
const {
  destrava,
  destrava2
} = require('./armor/destrava.js');
const {
  tabela
} = require("./armor/js/tabela");
const {
  conselhob
} = require("./armor/js/conselhob.js");
const {
  palavras
} = require("./armor/js/conselhos.js");
function kyun(_0x3d6cf6) {
  var _0x1e1fb0 = Math.floor(_0x3d6cf6 / 3600);
  var _0x48b28e = Math.floor(_0x3d6cf6 % 3600 / 0x3c);
  var _0x3d6cf6 = Math.floor(_0x3d6cf6 % 0x3c);
  return (_0x1e1fb0 < 0xa ? '0' : '') + _0x1e1fb0 + " Horas " + ((_0x48b28e < 0xa ? '0' : '') + _0x48b28e) + " Minutos " + ((_0x3d6cf6 < 0xa ? '0' : '') + _0x3d6cf6) + " Segundos";
}
// const store = makeInMemoryStore({
//   'logger': P().child({
//     'level': "debug",
//     'stream': "store"
//   })
// });
store.readFromFile("./baileys_store_multi.json");
setInterval(() => {
  store.writeToFile("./baileys_store_multi.json");
}, 0x2710);
const {
  state,
  saveState
} = useSingleFileAuthState("./auth_info_multi.json");
const simih = async _0x459464 => {
  try {
    const _0x88b0e8 = await fetch("https://api.simsimi.net/v2/?text=" + _0x459464 + '&lc=pt', {
      'method': "GET"
    });
    const _0x4df167 = await _0x88b0e8.json();
    return _0x4df167.success;
  } catch {
    return;
  }
};
module.exports = {
  'P': P,
  'fs': fs,
  'yts': yts,
  'hx': hx,
  'util': util,
  'Boom': Boom,
  'axios': axios,
  'chalk': chalk,
  'encodeUrl': encodeUrl,
  'linkfy': linkfy,
  'request': request,
  'ms': ms,
  'ffmpeg': ffmpeg,
  'imgbb': imgbb,
  'googleImage': googleImage,
  'googleIt': googleIt,
  'fetch': fetch,
  'imageToBase64': imageToBase64,
  'EmojiAPI': EmojiAPI,
  'qrterminal': qrterminal,
  'emoji': emoji,
  'exec': exec,
  'spawn': spawn,
  'execSync': execSync,
  'moment': moment,
  'color': color,
  'time': time,
  'hora': hora,
  'date': date,
  'ttthelp': ttthelp,
  'tttme': tttme,
  'tttset': tttset,
  'esp': esp,
  'addVote': addVote,
  'delVote': delVote,
  'getBuffer': getBuffer,
  'convertSticker': convertSticker,
  'fetchJson': fetchJson,
  'fetchText': fetchText,
  'getBase64': getBase64,
  'createExif': createExif,
  'insert': insert,
  'response': response,
  'addLimit': addLimit,
  'getLimit': getLimit,
  'mediafireDl': mediafireDl,
  'upload': upload,
  'nit': nit,
  'addBanned': addBanned,
  'unBanned': unBanned,
  'BannedExpired': BannedExpired,
  'cekBannedUser': cekBannedUser,
  'isFiltered': isFiltered,
  'addFilter': addFilter,
  'validmove': validmove,
  'setGame': setGame,
  'addComandosId': addComandosId,
  'deleteComandos': deleteComandos,
  'getComandoBlock': getComandoBlock,
  'getComandos': getComandos,
  'addComandos': addComandos,
  'palavrasANA': palavrasANA,
  'quizanime': quizanime,
  'quizanimais': quizanimais,
  'getLevelingXp': getLevelingXp,
  'getLevelingLevel': getLevelingLevel,
  'getLevelingId': getLevelingId,
  'addLevelingXp': addLevelingXp,
  'addLevelingLevel': addLevelingLevel,
  'addLevelingId': addLevelingId,
  'bayarLimit': bayarLimit,
  'limitAdd': limitAdd,
  'addATM': addATM,
  'addKoinUser': addKoinUser,
  'checkATMuser': checkATMuser,
  'getRegisteredRandomId': getRegisteredRandomId,
  'addRegisteredUser': addRegisteredUser,
  'createSerial': createSerial,
  'checkRegisteredUser': checkRegisteredUser,
  'confirmATM': confirmATM,
  'runtime': runtime,
  'getpc': getpc,
  'supre': supre,
  'WinnerX': WinnerX,
  'WinnerO': WinnerO,
  'Tie': Tie,
  'IA': IA,
  'IAmove1': IAmove1,
  'IAalter': IAalter,
  'priorityC': priorityC,
  'addTTTId': addTTTId,
  'addTTTwin': addTTTwin,
  'addTTTdefeat': addTTTdefeat,
  'addTTTtie': addTTTtie,
  'addTTTpoints': addTTTpoints,
  'getTTTId': getTTTId,
  'getTTTwins': getTTTwins,
  'getTTTdefeats': getTTTdefeats,
  'getTTTties': getTTTties,
  'getTTTpoints': getTTTpoints,
  'wait': wait,
  'getExtension': getExtension,
  'h2k': h2k,
  'generateMessageID': generateMessageID,
  'getGroupAdmins': getGroupAdmins,
  'getRandom': getRandom,
  'banner': banner,
  'banner2': banner2,
  'banner3': banner3,
  'infopd': infopd,
  'success': success,
  'start': start,
  'close': close,
  'temporizador': temporizador,
  'cmdadd': cmdadd,
  'addMetadata': addMetadata,
  'chyt': chyt,
  'webp2gifFile': webp2gifFile,
  'webp_mp4': webp_mp4,
  'simih': simih,
  'voting': voting,
  'sotoy': sotoy,
  'addVote': addVote,
  'delVote': delVote,
  'countMessage': countMessage,
  'comandos': comandos,
  'modobn': modobn,
  'nsfw': nsfw,
  'daily': daily,
  'nescessario': nescessario,
  'premium': premium,
  'limitefll': limitefll,
  'antiflood': antiflood,
  '_leveling': _leveling,
  '_level': _level,
  'bancht': bancht,
  'anticall': anticall,
  'ban': ban,
  'welkom2': welkom2,
  'welkom': welkom,
  'afk': afk,
  'samih': samih,
  'samih2': samih2,
  'joguinhodavelhajs': joguinhodavelhajs,
  'joguinhodavelhajs2': joguinhodavelhajs2,
  'adeuscara': adeuscara,
  'welcome_group': welcome_group,
  'welcome_group2': welcome_group2,
  'bye_group': bye_group,
  'bye_group2': bye_group2,
  'setting': setting,
  'logoslink': logoslink,
  'antilink': antilink,
  'antifake': antifake,
  'antilinkhard': antilinkhard,
  'antilinkgp': antilinkgp,
  'antiimg': antiimg,
  'antisticker': antisticker,
  'antinotas': antinotas,
  'antictt': antictt,
  'anticatalogo': anticatalogo,
  'antidoc': antidoc,
  'antiloc': antiloc,
  'antipv': antipv,
  'antivid': antivid,
  'antiaudio': antiaudio,
  'palavra': palavra,
  'palavrao': palavrao,
  'menu': menu,
  'menudono': menudono,
  'adms': adms,
  'menulogos': menulogos,
  'efeitos': efeitos,
  'menuprem': menuprem,
  'jogos': jogos,
  'animes': animes,
  'menuinfo': menuinfo,
  'menubasico': menubasico,
  'menuplay': menuplay,
  'infodono': infodono,
  'figurinhas': figurinhas,
  'infovotacao': infovotacao,
  'infocontador': infocontador,
  'infobemvindo': infobemvindo,
  'infolistanegra': infolistanegra,
  'infopalavrao': infopalavrao,
  'infobancarac': infobancarac,
  'gitdobot': gitdobot,
  'configbot': configbot,
  'hospedar': hospedar,
  'cmd_termux': cmd_termux,
  'alteradores': alteradores,
  'destrava': destrava,
  'destrava2': destrava2,
  'tabela': tabela,
  'conselhob': conselhob,
  'palavras': palavras,
  'kyun': kyun,
  'store': store,
  'state': state,
  'saveState': saveState
};