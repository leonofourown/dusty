const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1)
    return message.reply(
      `\`Type the sentence.Proper use: [spoiler/spo] [text]\``
    );
  message.delete();
  return message.channel.send("||" + `${mesaj}` + "||");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["spo"],
  permLevel: 0
};

exports.help = {
  name: "spoiler",
  description: ".",
  usage: ""
};
