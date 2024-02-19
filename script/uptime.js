const fs = require('fs');
module.exports.config = {
  name: "uptime",
  version: "1.0.0",
  cooldown: 5,
  role: 0,
  hasPrefix: true,
  aliases: ['system'],
  description: "uptime",
  usage: "{pref}[name of cmd]",
  credits: " Ainz"
};
module.exports.run = async function({ api, event, Utils }) {
const user = api.getCurrentUserID();
const time = Utils.account.get(user).time;
   
const ping = Date.now() - Date.now();
    const days = Math.floor(time / 86400);
    const hours = Math.floor(time % 86400 / 3600);
    const minutes = Math.floor(time % 3600 / 60);
    const seconds = Math.floor(time % 60);
api.sendMessage(`╭──❒UPTIME/MS✨\n│─Days: ${days}\n│─Hours: ${hours}\n│─Minutes: ${minutes}\n│─Seconds: ${seconds}\n│─Ping: ${ping}\n╰───────────❍`, event.threadID);
};