const Discord = require("discord.js");
const math = require("math-expression-evaluator");

exports.run = function(client, message, args) {
  var soru = args.join(" ");
  if (!soru)
    return message.reply(
      `\` Specify an action.Proper use: [calculate/ca] [process] [+, -, /, *] \``
    );
  else {
    let cevap;
    try {
      cevap = math.eval(soru);
    } catch (err) {
      message.channel.send("Incorrect operation: **" + err);
    }
    const embed = new Discord.RichEmbed()
      .addField("Process", soru)
      .addField("Response", cevap)
      .setColor("black")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/773668869453643796/776050534657556490/memememme-removebg-preview.png"
      );
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["calculate", "ca"],
  permLevel: 0
};

exports.help = {
  name: "calculator",
  description: "",
  usage: "calculate <process>"
};
