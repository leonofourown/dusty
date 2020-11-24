const Discord = require("discord.js");
const dusty = require("../ayarlar.json");
var prefix = dusty.prefix;
exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()

    .setThumbnail(
      "https://cdn.discordapp.com/attachments/773668869453643796/776050534657556490/memememme-removebg-preview.png"
    )
    .addField("Nobody can help you!", "Not my problem..")
    .setColor("GOLD")
    .setFooter(`?commands`);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "help", "help-commands"],
  permLevel: 0
};

exports.help = {
  name: "help-commands",
  description: "It shows nothing = h ",
  usage: "none"
};
