//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "bayashikatakuri@gmail.com";
global.location = "Pretoria, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Pretoria";
global.github = process.env.GITHUB || "https://github.com/Phantom-kin/King_Phantom";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VarUpFs2ZjCmM38C463O";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VarUpFs2ZjCmM38C463O";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "923126507341";
global.sudo = process.env.SUDO || "923091619697, 923126507341";
global.owner = process.env.OWNER_NUMBER || "923126507341";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://king-phantom.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUY2MEZ4Q0JneXZzYkNsVlBhRnpCNWRrTTVlYW1WOTJ5NUkweW9YZDFuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWhuakQ3dDJDdEdWYlpzTFhLd0twcldmVU90cDhSZHdsOGZ2dVZOODRSUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRVFkbzZHYi9MWDRGYUJhRWYrQldjOHRTVmNiQlVJMjBtSG5LdDZtYmxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTDM4ZExMS0hJVUFtZnFZYkdhL2lSLzZEWS9vNzI1T3FuZEZKUlhyVDNNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPS3AyTkVXQlhDbGJFemhqeWxieFBnVGpJR3Q0WEVBTStNdWlZTzlBMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUyelZUYnI4UzBTNlI1SStyUWxvRXZqV2ZSaGhGaW9sdU1meTlEQWVGakU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEhrYXJwQlJEckZ4aG43SURKOWtzRGtpdG81K2tHVk9POWkxT3hvN25Ybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDFWcGJ1dWgxUGJnWmtnckVTZmkva0p6MHVwdWtWYlJwaXZzbFJtSGRXUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNiaTNJanRpcG1PdUpzOEJoNjYwbEpOeXVXNUY0cm1jd3dxOTRDUDJ6aXhIUXJZWllkNEsxQVQ5TVc1NThEMVM5bFYrR2w5d29jM0tTSWEzWDE4cERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6IjdQdnNRcjJjcHlhcWZZWnJRSTNPb3JQbWxNZ2h6Q3lOVDVDUWhFTWY0UUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJEUE9WV2hsVHpLNndJMldWeHJDWVEiLCJwaG9uZUlkIjoiZGQwMmM1ZDAtNzk1MS00NDIxLThmZWUtZmI3YWU5ZDliODM4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNnaUFRN3BCMy9PWmRnZElDbXpqb0liZTNJUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHS1RyNWNNd3hya25BU3hIdVhJRkNWeHFNREk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU1lWUDlHVE0iLCJtZSI6eyJpZCI6IjkyMzEyNjUwNzM0MTo2NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqlrTqlrTqlrTqlrQg6pSq6pOf6pa06pOg6pOi6pOU6pOw6pOjIOqWtOqWtOqWtOqWtCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFg5M2JrRUVObXFtcm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU2RmNEM4WldpWXFrdmJXc1hnOFI5RWZiTUtHL1JrZmdJUWJYYzFnVGpWUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMG5EQm53RS93YytzdnZvdjJ4RXRlZTZjd0QvNjJLTnRTWTVNZUhnTllkRU9PNk9aZTJiakF4YzJXWUxucU5PTnV4S2FFU1o2WWxmblZmLytiNGdqQmc9PSIsImRldmljZVNpZ25hdHVyZSI6ImhSTlFheXQzUktNQzUzWjQwVklyUTZyMCtDdnI3VWE1Y3pvemxZcy9BWHdyNDdadVg3NlVmN0hveXRRc2FzS3BVM1JBcDdkcDV6dE16QmN2NXpUL0R3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTI2NTA3MzQxOjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVuWCtBdkdWb21LcEwyMXJGNFBFZlJIMnpDaHYwWkg0Q0VHMTNOWUU0MVUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI2NzkwMTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR2t6In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝙋𝙃𝘼𝙉𝙏𝙊𝙈™`",
  author: process.env.PACK_AUTHER || "𝙋𝙃𝘼𝙉𝙏𝙊𝙈",
  packname: process.env.PACK_NAME || "𝙋 𝙃 𝘼 𝙉 𝙏 𝙊 𝙈",
  botname: process.env.BOT_NAME || "𝙆𝙄𝙉𝙂 𝙋𝙃𝘼𝙉𝙏𝙊𝙈 ",
  ownername: process.env.OWNER_NAME || "𝙋𝙃𝘼𝙉𝙏𝙊𝙈",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝙋 𝙃 𝘼 𝙉 𝙏 𝙊 𝙈").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
