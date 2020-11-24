const Discord = require("discord.js");
exports.run = (client, message, dusty) => {
  if (!dusty[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send({
      embed: {
        color: 0x000001,
        author: {
          name: "",
          icon_url:
            "https://cdn.discordapp.com/attachments/773668869453643796/775938969359482910/sourceiii.gif"
        },
        thumbnail: {
          url:
            "https://cdn.discordapp.com/attachments/773668869453643796/775938969359482910/sourceiii.gif"
        },
        title: "",
        description:
          "\n[Dusty Invite]( https://discord.com/oauth2/authorize?client_id=740702938791411712&scope=bot&permissions=8) \n[Join Support](https://discord.gg/XGsKz76nQx)\n[Visit Website](https://dustybot.cf) \n[Vote Me](https://top.gg/bot/740702938791411712/vote)",
        fields: [],
        footer: {
          icon_url:
            "https://cdn.discordapp.com/attachments/773668869453643796/775938969359482910/sourceiii.gif",
          text: ""
        }
      }
    });
    message.react(" ");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite-link", "link", "invite", "i"],
  permLevel: 0
};
exports.help = {
  name: "invite-link",
  description: " = i ",
  usage: "invite"
};
