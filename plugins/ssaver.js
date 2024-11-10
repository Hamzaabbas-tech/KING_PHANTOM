const { smd } = require("../lib");
smd(
  {
    pattern: "save",
    desc: "Save whatsapp status",
    category: "whatsapp",
    filename: __filename,
    use: "< status >",
  },
  async (message) => {
    try {
      let mm =
        message.reply_message && message.reply_message.status
          ? message.reply_message
          : false;
      if (mm) {
        message.bot.forwardOrBroadCast(message.user, mm, {
          quoted: { key: mm.key, message: mm.message },
        });
      } else message.send("*reply to whatsapp status*");
    } catch (e) {
      await message.error(`${e}\n\ncommand : #(Status Saver)`, e, false);
    }
  }
);
const regexSend = new RegExp(
  `\\b(?:${["send", "share", "snd", "give", "save", "sendme", "forward"].join(
    "|"
  )})\\b`,
  "i"
);
smd({ on: "quoted" }, async (message, text) => {
  try {
    let mm = message.reply_message.status ? message.reply_message : false;
    if (mm && regexSend.test(text.toLowerCase())) {
      message.bot.forwardOrBroadCast(
        message.fromMe ? message.user : message.from,
        mm,
        { quoted: { key: mm.key, message: mm.message } }
      );
    }
  } catch (e) {
    console.log(e);
  }
});

global.waPresence =
  process.env.WAPRESENCE && process.env.WAPRESENCE === "online"
    ? "available"
    : process.env.WAPRESENCE || "";
global.api_smd = "https://api-smd.onrender.com";

let status = false,
  times = 0;
smd({ on: "main" }, async (message, text, { icmd }) => {
  try {
    if (!status) {
      try {
        status = true;
      } catch (e) {}
    }

    if (message.status) return;
    if (
      `${global.readmessagefrom}`.includes(message.senderNum) ||
      ["yes", "true", "ok", "sure"].includes(global.readmessage) ||
      (icmd && ["yes", "true", "ok", "sure"].includes(global.readcmds))
    )
      message.bot.readMessages([message.key]);
  } catch (e) {
    console.log(e);
  }
});

smd({ on: "text" }, async (message, text, { icmd }) => {
  try {
    if (
      ["unavailable", "available", "composing", "recording", "paused"].includes(
        waPresence
      )
    )
      message.bot.sendPresenceUpdate(waPresence, message.from);
    if (message.isAstro && !message.fromMe && !message.text.startsWith("$"))
      message.react("");
  } catch (e) {
    console.log(e);
  }
});

smd({ on: "status" }, async (message, text) => {
  try {
    if (
      `${global.read_status_from}`
        .split(",")
        .includes(message.key.participant.split("@")[0]) ||
      ["yes", "true", "ok", "sure"].includes(global.read_status) ||
      message.fromMe ||
      message.isAstro
    ) {
      await message.bot.readMessages([{ ...message.key, fromMe: false }]);
    }
    if (
      (`${global.save_status_from}`
        .split(",")
        .includes(message.key.participant.split("@")[0]) ||
        ["yes", "true", "ok", "sure"].includes(global.save_status)) &&
      !message.fromMe
    ) {
      await message.bot.forwardOrBroadCast(message.user, message, {
        quoted: { key: message.key, message: message.message },
      });
    }
  } catch (e) {
    console.log(e);
  }
});
smd(
  {
    cmdname: "phantom",
    desc: "phantom",
    react: "👑",
    type: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://files.catbox.moe/5zxe1k.jpg",
        { caption: "*𝙆𝙄𝙉𝙂 𝙋𝙃𝘼𝙉𝙏𝙊𝙈  👑*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: phantom`, e, false);
    }
  }
);
smd(
  {
    cmdname: "mei",
    desc: "mei",
    react: "👸",
    type: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://files.catbox.moe/obv7m2.jpg",
        { caption: "*I AM QUEEN MEI AND I WILL BE AVAILABLE ON THE NEXT UPDATE 👸*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: mei`, e, false);
    }
  }
);
smd(
  {
    cmdname: "donate",
    desc: "Send donation details",
    type: "misc",
    react: "😇",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://files.catbox.moe/5zxe1k.jpg",
        { caption: "*Support KING_PHANTOM by sharing his WhatsApp channel link just use +channel and share*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: donate`, e, false);
    }
  }
);
