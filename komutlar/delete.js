const Discord = require("discord.js");
exports.run = function(client, message, args) {
  let bs = args.slice(0).join(".");
  let id = Number(args[0]);

  if (isNaN(id))
    return message.channel.send(
      `\`Specify a number.Proper use: [delete/del/d] [number]\``
    );
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(
      "Upss You Do Not Have Permission To Use This Command!"
    );
  if (!args[0])
    return message.channel.send("hey,Number of messages to clear Specify!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(` ${args[0]} messages deleted `)
      .then(msg => msg.delete(10000));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["del", "d","delete"],
  permLevel: 1
};

exports.help = {
  name: "delete-messages",
  description: "Deletes a specified amount of messages = d",
  usage: "delete <numbers>"
};
