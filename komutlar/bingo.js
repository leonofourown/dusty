const Discord = require("discord.js");
exports.run = async (client, msg, args) => {
  const Discord = require("discord.js");
  var flip = Math.floor(Math.random() * 2 + 1);
  if (flip === 1) {
    let embed = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * (0xffffff + 1)))
      .setDescription(`**BINGO** lucky you..`)
      .setImage(
        "https://media0.giphy.com/media/9rwJNLBu8FMfixoIxL/giphy.gif?cid=ecf05e47e715655f27794059c1a19f2f520d9687b6a8b043&rid=giphy.gif"
      );
    msg.channel.send(embed);
  } else {
    let embed = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * (0xffffff + 1)))
      .setDescription(`oh noo u lost..`)
      .setImage("https://media.giphy.com/media/3oFzmko6SiknmpR2NO/giphy.gif");
    msg.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bingo", "bn", "bng", "b"],
  permLevel: 0
};

exports.help = {
  name: "bingo",
  description: "",
  usage: "bingo"
};
