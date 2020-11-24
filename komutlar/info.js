const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
exports.run = function(client, message, args) {
  var aylar = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "November"
  };
  var duration = moment
    .duration(client.uptime)
    .format(" D [day] H [hour] m [minute] s [second]");
  let gold = db.fetch(`goldüye.${message.author.id}`);
  var Durum = message.author.presence.status;
  var Durm =
    Durum == "online"
      ? 0x000000
      : Durum == "offline"
      ? 0x000000
      : Durum == "idle"
      ? 0x0000000
      : Durum == "dnd"
      ? 0x000000
      : 0x000000;
  var durm =
    Durum == "online"
      ? " online"
      : Durum == "offline"
      ? "invisible"
      : Durum == "idle"
      ? "idle"
      : Durum == "dnd"
      ? "do not disturb"
      : "cannot find";
  var üye = message.mentions.users.first();
  if (üye) {
    const embed = new Discord.RichEmbed()
      .setAuthor(üye.username, üye.displayAvatarURL)
      .setColor("BLACK")
      .setThumbnail(üye.displayAvatarURL)
      .addField(
        "Profile",
        `**user** : ${üye.username + "#" + üye.discriminator}
**ID** : ${üye.id}\n**last message** : ${üye.lastMessage}
**last message ID** : ${üye.lastMessageID}
**status** : ${durm}
**created date** : ${`${moment(üye.createdAt).format("DD")} ${
          aylar[moment(üye.createdAt).format("MM")]
        } ${moment(üye.createdAt).format("YYYY HH:mm:ss")}`}
**roles** : ${message.guild.members
          .get(üye.id)
          .roles.filter(r => r.name !== "@everyone")
          .map(r => r)
          .join(" **|** ")}`
      );

    message.channel.send(embed);
  } else {
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("BLACK")
      .setThumbnail(message.author.avatarURL)
      .addField(
        "Profile",
        `**user** : ${message.author.username +
          "#" +
          message.author.discriminator}
 **ID** : ${message.author.id}
**last message** : ${message.author.lastMessage}
**last message ID** : ${message.author.lastMessageID}
**status** : ${durm}
**created date** : ${`${moment(message.author.createdAt).format("DD")} ${
          aylar[moment(message.author.createdAt).format("MM")]
        } ${moment(message.author.createdAt).format("YYYY HH:mm:ss")}`}
**roles** : ${message.guild.members
          .get(message.author.id)
          .roles.filter(r => r.name !== "@everyone")
          .map(r => r)
          .join(" **|** ")}`
      );
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["information", "u", "info", "user", "user-information"],
  permLevel: 0
};

exports.help = {
  name: "user-information",
  description: "Shows user information = u",
  usage: "info"
};
