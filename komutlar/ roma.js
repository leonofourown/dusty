const Discord = require("discord.js");
const numerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

exports.run = (client, message, args) => {
  if (args.length < 1)
    return message.reply(
      `\`Please enter a valid number.Proper use: [roma/r]  [number]\``
    );

  if (args[0] > 999999) {
    const embed = new Discord.RichEmbed()
      .setDescription(`\`Please enter 999999 or a lower number!!\``)
      .setColor("GOLD")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/773668869453643796/776050534657556490/memememme-removebg-preview.png"
      );
    message.channel.send({ embed });
    return;
  }

  if (args[0] === 0) {
    const embed = new Discord.RichEmbed()
      .setDescription("endless..")
      .setColor("GOLD")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/773668869453643796/776050534657556490/memememme-removebg-preview.png"
      );
    message.channel.send({ embed });
    return;
  }

  let result = "";
  for (const [numeral, value] of Object.entries(numerals)) {
    while (args[0] >= value) {
      result += numeral;
      args[0] -= value;
    }
  }
  const embed = new Discord.RichEmbed()
    .addField("Result :", result)
    .setColor("GOLD")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/773668869453643796/776050534657556490/memememme-removebg-preview.png"
    );
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["roman", "r", "roman-converter", "roma"],
  permLevel: 0
};

exports.help = {
  name: "roman-converter",
  description: "Converts to roman numerals = r",
  usage: "roma [number]"
};
