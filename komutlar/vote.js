const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.delete();
  let question = args.join(" ");
  let user = message.author.username;
  if (!question)
    return message.reply(
      `\`What you want to vote.Proper use: [vote/v] [text]\``
    );

  console.log(
    "vote" +
      message.author.username +
      "#" +
      message.author.discriminator +
      " used ."
  );
  message.channel
    .sendEmbed(
      new Discord.RichEmbed()
        .setThumbnail(client.user.avatarURL)
        .setFooter(" ", client.user.avatarURL)
        .addField(`vote`, `${question}`)
    )
    .then(function(message) {
      message.react("✅");
      message.react("❌");
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vote", "v", "votes", "vote-votes"],

  permLevel: 1
};

exports.help = {
  name: "vote-votes",
  description: "You can vote any topic you want = v",
  usage: "₺vote <topictext>"
};
