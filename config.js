const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SALEEM-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BKYTZQK3p1RUdCb3k2S1B0ZEc4dFI0dkg3QkJHN05qRW1NVGlsNzJHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWNkSTJDa2lKVUZ3V3JPTkd4VktHQzREeFN5R2NIa2t2OXp6SGkzMkhrOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTzFhZTdQNkV5Ykg1c0szTHlJc3MvM2FrOUZNTXVmZjVsRlluSUFlZ2xFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1S3ViZUxiK0wxTE5oeG1sY1JnTlI4bm9LMkFEblVJMEEyVnFsb0doRVZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCRFQrTGRLYnRmamJRaHRVK01hWk5MZlEyQ2xSeXdEb2NOaXd2YXlmMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjltT0I3dEV3bitLZ0luSHlOOTI4cURLbng4WDd5cERnbXBxdkNtYTh4R0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdGYWwremhzZDhMZkR0SXE5T0ZWZllldEhTbFdjTEYzUm8zOTVsbFcyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVhoRHhBaGJwQ0hxcis4UHFuQ2p1Vkw1cW1JUTF0ZmJXMzAyRktOSnJpOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE4SCt2MUpwZkhkeTdQZWF3S1RKOWttREFmMkxldlBRbldxRjAyT3Nvdkl4WDV5cW0xcjY0cFIrK3B2a3R6NkdZQWdOdnhEUHR0MnRYYkZEZXhmV2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJJcEVHQ2FsbDVQTVJwMmtRM1Z2TCsxQjZubjZZbHZZeSswaU1zNG1lMGNZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTkxMTg5OTM4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzY1MjRDMzYxRDRDNjExMkM0MzcxQUVBQkRGODBFQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3NDMxNDA3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODk5MTE4OTkzODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNEQTMyNTdCQUYxODQ0MjI1QjBEMENCNEE1REFEODYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzQzMTQwN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5OTExODk5Mzg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQ0QyQ0YyNjAyQTVCRUFDMTY1OTA2MTg0OEQxODVEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc0MzE0MDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijk5VEhSOVlEIiwibWUiOnsiaWQiOiI5ODk5MTE4OTkzODk6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjQ1OTY1NDQ0NzA2NTQ0OjFAbGlkIiwibmFtZSI6ImV4cHJpbWVudGFwcCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0QxMUtJRkVPaU1nY1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZmJYNEprbm0wbEFjUFhGMGNlbWdObHc4WEV1cDNJVUFPYmxLYjZBeFIwTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRHlqaGxONlkxU05yeGZIdytJNzkyUytqOFdqU3hkeVhVRHFMb25qK0RrckUzb1d3TEs3bGRONGcvVFJyWnIybW8rWW01d3orem50ZHR1QkFGMDJQQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9HeGE1ak1DVVZYdmsyRkE2VEtXbUZsZW5TYWwrVTlWLzFiSG9rdjhQQm1LcjQxb1NXWDEzZWRubk15bkUySDQyWUFrS2o5cTNiUit3dlE3VFYraGlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTg5OTExODk5Mzg5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDIxK0NaSjV0SlFIRDF4ZEhIcG9EWmNQRnhMcWR5RkFEbTVTbStnTVVkRCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3NDMxNDA1LCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU91aCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SALEEM-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yj7zp0.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SALEEM-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "SALEEM-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923491221845",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "SALEEM-MD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 SALEEM-MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/8CQp6Z15/IMG-20250904-WA0334.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*SALEEM-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923491221845",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
