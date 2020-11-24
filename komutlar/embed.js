const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
exports.run = (client, message, args) => {
  let dusty = args.slice().join(" ");
  const text = new RichEmbed().setColor("RANDOM").setDescription(dusty);
  message.channel.send(text);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["embed"],
  permLevel: 0
};

exports.help = {
  name: "embed"
};
