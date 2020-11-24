const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let kong = args.slice(0).join(" ");
  if (!kong)
    return message.channel.send(
      `\`What do you want to search.Proper use: [search/img] [visual name]\``
    );
  var gis = require("g-i-s");
  gis(kong, logResults);
  function logResults(error, results) {
    if (error) {
      console.log(error);
    } else {
      const embed = new Discord.RichEmbed();
      message.channel.send(" ", { files: [results[1].url] });
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["search", "vs", "visual", "image", "img"],
  permLevel: 0
};

exports.help = {
  name: "visual-search",
  description: "google visual search = vs",
  usage: "vs"
};
