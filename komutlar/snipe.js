const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  const data = await db.fetch(`snipe.id.${message.guild.id}`);
  if (!data) {
    const snipe2 = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setDescription(`no deleted message.`)
      .setColor(`0x000000`)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/773668869453643796/776661009644388352/anananannanan.png"
      );
    message.channel.send({ embed: snipe2 });
  } else {
    let dusty = client.users.get(data);
    const data2 = await db.fetch(`snipe.mesaj.${message.guild.id}`);
    const snipe = new Discord.RichEmbed()
      .setAuthor(dusty.username, dusty.avatarURL)
      .setDescription(`` + data2)
      .setColor(`0x000000`)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/773668869453643796/776661009644388352/anananannanan.png"
      );
    message.channel.send(snipe);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["snipe", "snp", "sn"],
  permLevel: 0
};

exports.help = {
  name: "snipe-messages",
  description: "Shows you the last deleted message = sp ",
  usage: "snipe",
  kategori: "fun",
  permLvl: "family size"
};
