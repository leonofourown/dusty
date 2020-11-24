const Discord = require("discord.js");
exports.run = (client, message, nyan) => {
  if (!message.guild) {
    const dusty = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("horror");
    return message.author.sendEmbed(dusty);
  }
  if (message.channel.type !== "..") {
    const info = new Discord.RichEmbed()
      .setAuthor(" ")
      .setImage(
        `https://media1.tenor.com/images/3ceaf0e1386010e7d0e5997d2dc43099/tenor.gif?itemid=3563358`
      );
    return message.channel.sendEmbed(info);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hr", "horror", "horror-gif"],
  permLevel: 0
};

exports.help = {
  name: "horror-gif",
  description: "Shows a scary gif = h",
  usage: "Shows a scary gif"
};
