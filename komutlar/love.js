const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let member = message.guild.member(
    message.mentions.users.array()[0] || message.guild.members.get(args[0])
  );
  let member2 = message.guild.member(
    message.mentions.users.array()[1] || message.guild.members.get(args[1])
  );
  var s = message.author;
  if (member2) {
    var s = member2.user;
  }
  if (!member) {
    message.channel.send(
      `\`Tag your true love.Proper use: [?love/luv] [user]\``
    );
    return;
  }
  var anasonuc = Math.floor(Math.random() * 101);
  var kalp = "";
  var akalp = "";
  if (Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
    var c = 0;
    for (var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
      kalp += "❤️";
      c++;
    }
    for (var x = c; x < 10; x++) {
      akalp += `🖤`;
    }
  } else {
    var kalp = "🖤";
    var akalp = "🖤🖤🖤🖤🖤🖤🖤🖤🖤";
  }
  var yorum = `perfect..`;
  if (anasonuc < 80) {
    var yorum = "awesome!?";
  }
  if (anasonuc < 60) {
    var yorum = "not bad!";
  }
  if (anasonuc < 40) {
    var yorum = "say someting :( ";
  }
  if (anasonuc < 20) {
    var yorum = "ohh noo!! ";
  }
  const embed = new Discord.RichEmbed()

    .setDescription(`% ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
    .setColor("BLACK")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/773668869453643796/776050534657556490/memememme-removebg-preview.png"
    );
  message.channel.send({ embed });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["love", "luv", "luf", "lovers", "lov"],
  permLevel: 0
};

exports.help = {
  name: "love",
  description: "Measures love between two users.",
  usage: "lover [@Kullanıcı] [@Kullanıcı]"
};
