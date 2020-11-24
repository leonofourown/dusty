const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let kullanıcı;
  if (message.mentions.users.first()) {
    kullanıcı = message.mentions.users.first();
  } else {
    kullanıcı = message.author;
  }
  const dustyavatar = new Discord.RichEmbed().setImage(kullanıcı.avatarURL);
  message.channel.sendEmbed(dustyavatar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pp", "av", "avatar"],
  permLevel: 0
};

exports.help = {
  name: "avatar"
};
