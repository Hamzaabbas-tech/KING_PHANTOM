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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU1TMDFmMy82MkJnWURPb2djRzlSV2F6N04ycUorSUVOaG94dHdVdFVYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjh0Ky9mRnpJU0V1LzFCd21mM2ljeCt1OVFrSWM4aXBCMUp0WURUOHhFST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTzZHM0tmMVNVUjZZeTg2Z0I4Tk1vR293RWhQYzhHQTFrd1Q4MlhETDJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5ZjZGTnlFWmMvK3I4SVNkMStwU0ZJQVFBQzFvZXVydm9teE10M3YrQUg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhDc0NNS2xlRStVVmFFV2pJdWhuelI1V2YrN0FGRTVhdnNxYUJzM29vSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhuQUoyQjJiandsUjN4ZVlvM0l0WFNLV1pmd2FyajhVNnpNRkNJSU5peFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0hvTzdqR2lqUm5VYXJ6MU96dlRPVWRieHJuSDV1cUJBWUJTRlByWExFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjlsaWFkQ3EveFVkdGZrMHEvSDBiZmtnZkRIQWJSaEJXMnA3YnVPSjVUbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRteVg1c3JRQ1FkaVVrY0xENEt5RkZqZ1g3YXJTQVNEYmg0cHQ2YzRiL3ltVnFTTy9xTTJYL0FhVWJ3QXlyN1h6bjQyU1pKcHhVa2FJRndBbjdOSWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiJSM3RLNWZtRDhRTXk3aVBtYXRUTnJzUUxJdi9kODZtazBOejF3WmZIYjZFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyZ0xBVGQwQVJPLVp1cmdxRXl4S2h3IiwicGhvbmVJZCI6IjU0YjJlMzc5LWI4MWUtNGU4Yy05NTAwLWJmZTk1YzZlNTVmNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1bmVWS1RQcnEyL1RibHVPeWlGbE9tU3QvRnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT20veXVmM3U4eU1PUjlUVVdYQVdzeS9QeE5vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldWVkJFOExEIiwibWUiOnsiaWQiOiI5MjMxMjY1MDczNDE6NjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6pa06pa06pa06pa0IOqUquqTn+qWtOqToOqTouqTlOqTsOqToyDqlrTqlrTqlrTqlrQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BmOTNia0VFT1c5bjdvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNkZjRDOFpXaVlxa3ZiV3NYZzhSOUVmYk1LRy9Sa2ZnSVFiWGMxZ1RqVlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJjWU1vYjU2a3RUK25jaFBlMW5BWk1ZaXBXNks5MGh4dlFwc0x5MytRWHZhTlRKamRWT1BpbDB6KzRnemVJdGRNYUs4U3N3VGFuQ0d1cmlBa2M0UEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYY2ltUHRTZ0tjUWlnTmhCbVVkUEI1R2R6RXJsUEFaZlVHWWJSU3FtSEdnQ3NMSE9nWTYxMFUwL0NuN3k3UEh6dC9ucUt6Z0x5Z3dtby9DL28xc1JoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEyNjUwNzM0MTo2N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVblgrQXZHVm9tS3BMMjFyRjRQRWZSSDJ6Q2h2MFpINENFRzEzTllFNDFVIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyNzYzMzc3fQ=="
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
