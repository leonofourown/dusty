const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment
    .duration(client.uptime)
    .format(" D [gun], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode(
    "asciidoc",
    `statistics 

 users          :   ${client.guilds
   .reduce((a, b) => a + b.memberCount, 0)
   .toLocaleString()}
 servers        :   ${client.guilds.size.toLocaleString()}
 channels       :   ${client.channels.size.toLocaleString()}
 Ping           :   ${client.ping}`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stats", "statistics", "st"],
  permLevel: 0
};

exports.help = {
  name: "statistics",
  description: "Shows the bot statistics = st",
  usage: "stats"
};
