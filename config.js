const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SALEEM-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09NMXI1dlpDWVNwQndxMkpVZ1IzNDBTdDdvS0lDKzFpWEd3Smk5c3htaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXVPZkovai9oZ0psQmMwa3gzUWNhWDQ2UHZmQ08wMlNtMG9yU1dFMk9ndz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQS84SW5QSk96QW4wKzdxak94ZEJtZmFTUk9GVlhlOVlPKzVyeE85eTIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUR3NnMWJhZ0grRVdtR2xpSUNIVzdodFZvWW5ZNUxwNU50MzJ4blN2MlRzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBISUdORHgyYy9Ob0NkSnlCRkxacGRGczd2VTB0V3o2R1NVZVVZdDF3WG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRUTlBzRW1jbDNkUFZ1T1RKNFNLM3JJNE9nRzh0TnU0S1RKTHJwVWlNVU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUU5a0c0QkszV01UZnArcCtUS21Db2x6L2kvUEFROFRWVlVFRVR3aWprRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlEyUS81bmw5ZUZCa2xmTmxrWWlGSXFaRkhzQmxBbWNVUEZjVTA3d3NqMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFUUVhEUW9uNEM5KzdwaDdmbkFkNzBOQ1hNeVBvaFFYbk1vTFFYd2cxd2JWbEdJUzBtOFBwRmlScnYvS29xUjBtMHBZV0JiSkQvS2c1UlRab2EzOUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IkVtTm1ET0xlSUZSR0xmaEhXM3hibW1RZkVBNk1Vem9DRFE0MFdsdnZQOUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTg0MTYwMjY4MTM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFCRUJBMTRFNjc1NTE1NjMwMkE2MUZCMEE4QUIzRDMxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc0MjUyOTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjU4NDE2MDI2ODEzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3REE3RUM0OTMzQ0EzNDhBOUYxNzA0ODlGODgyNzMxNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3NDI1MjkzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI1ODQxNjAyNjgxMzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDAzM0UxNDBDNjlEQjRFNzFEREE2MjVEQjE0ODNEMUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzQyNTI5NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQVJBR0dTR1IiLCJtZSI6eyJpZCI6IjU4NDE2MDI2ODEzODoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImlmZml5dnhyeSIsImxpZCI6IjIyNjk4MTAzNTY5MjE2NjoyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG5KaGRBRkVJamRnTVlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV1ZWWW8zVU0xUmZ6bnpCMkxlUmJibjRZUTZ3bUZSVEYxTFA3YWZNelFFcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYWdaNDFDWGJzaEo0ZWpzSmNDNDhYN1dTMTZwd0RhRTVLL2xBSkF6d0pKOXFhNzlzd1lNWFhLQ2MrY0FFTHJVVkk1Nm5aWGxPMnNwaTdDVWs5cmdlQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IndNYjBRd0VTbE5lK0tMUm55YmJhRitCNnZkd2h4V0VSek9sUU4rbFVQczgwZ3crVEgwc2ltMVZuU05hSHhaOFNHcGl6OHJkMEE0cGQ0WUxiTU9qdUR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTg0MTYwMjY4MTM4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmxWV0tOMUROVVg4NTh3ZGkza1cyNStHRU9zSmhVVXhkU3orMm56TTBCTCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3NDI1MjkxLCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQlZvIn0=",
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
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
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
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
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
