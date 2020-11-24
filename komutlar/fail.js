const Discord = require("discord.js");
exports.run = (client, message, nyan) => {
  if (!message.guild) {
    const dusty = new Discord.RichEmbed()
      .setColor(0x000000)
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Cannot Be Used in Private Messages!");
    return message.author.sendEmbed(dusty);
  }
  if (message.channel.type !== "dm") {
    const info = new Discord.RichEmbed()
      .setAuthor(" ")
      .setColor(0x000000)
      .setDescription("")
      .setImage(
        `https://gif-free.com/uploads/posts/2017-04/1491036552_unsuccessful-jump.gif`
      );
    return message.channel.sendEmbed(info);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["f", "fail", "jump", "fail-jump"],
  permLevel: 0
};
exports.help = {
  name: "fail-jump",
  description: "Shows a failed jumping gif = f",
  usage: "fail"
};
