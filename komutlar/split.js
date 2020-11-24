const Discord = require("discord.js");
const funnyWords = require("funny-words");

exports.run = (bot, message) => {
  let dusty = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (!dusty)
    return message.channel.send(
      `\`Type the sentence.Proper use: [split/sp] [text]\``
    );
  message.channel.send(funnyWords(dusty));
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sp"],
  permLevel: 0
};

module.exports.help = {
  name: "split",
  description: "split the written text",
  usage: "split"
};
