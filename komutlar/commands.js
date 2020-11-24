const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  const dusty = new Discord.RichEmbed()
    .setColor("GOLD")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/773668869453643796/775938969359482910/sourceiii.gif"
    )
    .addField(
      "💀 Dusty Commands",
      "`avatar`|`bingo`|`calculate`|`delete`|`embed`|`fail`|`horror`|`invite`   `infomation`|`kiss`|`love`|`lucky`|`mirror`|`question`|`rip`|`roma`|`say` `search`|`slot`|`snipe`|`speak`|`speed`|`split`|`spoiler`|`vote`|`weather`"
    )
    .setFooter(`?explanations`, client.user.avatarURL);
  message.channel.send(dusty).catch();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["c", "command"],
  permLevel: 0
};
exports.help = {
  name: "commands",

  description: "Shows all Dusty commands"
};
