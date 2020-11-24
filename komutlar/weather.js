const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!args[0]) {
    const embed = new Discord.RichEmbed().setDescription(
      `\`Type a city name.Proper use: [weather/w]  [city]\``
    );
    message.channel.send({ embed });
    return;
  }
  const konum = args.join(" ");
  message.channel.send("", {
    files: [`http://wttr.in/${konum}_0tqp_lang=tr.png`]
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [
    "havadurumu",
    "weatherforecast",
    "w",
    "weather-forecast",
    "weather",
    "forecast"
  ],
  permLevel: 0
};

exports.help = {
  name: "weather-forecast",
  description: "Shows the weather information of the typed location ",
  usage: "weather <location>"
};
