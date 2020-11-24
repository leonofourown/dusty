const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
  let idler = ["675695734724624404", "ID"];
  if (message.author.bot || message.channel.type === "dm") return;
  var gifler = [
    "https://media1.tenor.com/images/401e36d9b3ccb66cbcb8f6b1cb116d11/tenor.gif?itemid=9847853",
    "https://media2.giphy.com/media/W1hd3uXRIbddu/giphy.gif?cid=ecf05e47872whjqt11d864h08fps5iibyqfeg1y38qifkv1s&rid=giphy.gif",
    "https://media0.giphy.com/media/kSaS8zTdMJ0DdNyIGb/giphy.gif?cid=ecf05e471itkxdkspunvmdtd5l9hbogshijtsh3cuo5f8fbj&rid=giphy.gif"
  ];
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kullanıcı) {
    message.channel.send(`\`Tag someone.Proper use: [kiss/k] [user]\``);
    return;
  }
  if (
    !message.mentions.members.first().user.username ===
    message.isMentioned(message.author)
  ) {
    const candyEmb = new Discord.RichEmbed()
      .setDescription(`\`${message.author.username}\` kissed you.. `)
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
    return;
  }
  if (message.author.id === kullanıcı.id) {
    const candyEmb = new Discord.RichEmbed()
      .setTitle(`Loner ever..`)
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k", "kiss"],
  permLevel: 0
};
exports.help = {
  name: "kiss-user",
  description: "kisses the person you tagged = k ",
  usage: "kiss [user]"
};
