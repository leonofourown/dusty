const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let text = args.slice(0).join(" ");
  if (text.length < 1)
    return message.reply(`\`Type the sentence.Proper use: [say/sy] [text]\``);
  message.delete();
  message.channel.send(text);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sy"],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "[ ]",
  usage: "say"
};
