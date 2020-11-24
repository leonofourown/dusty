const Discord = require("discord.js");
exports.run = async (client, message) => {
  let prefix = "?";
  const dusty = new Discord.RichEmbed()
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/773668869453643796/776050534657556490/memememme-removebg-preview.png"
    )
    .setTitle(`💀 Dusty Explanations`)
    .setColor("GOLD")
    .setDescription(
      `\n**avatar** **-** It allows you or another user you have tagged to view their profile pictures in a larger size.
**calculate** **-** It allows you to calculate the transaction you have written easily.
**delete** **-** Deletes the amount of messages you specified from the text channels.
**embed** **-**  Embeds the text you wrote in channels.
**fail** **-** Shows you the jumping gif of a failed great man.
**horror** **-** This command sends a scary gif to the channel.
**information** **-** Shows the user information of you or the person you have tagged.
**invite** **-** It shows the dusty bot invite link and support server.
**kiss** **-** Kisses the person you tagged with pictures.
**love** **-** It measures the amount of love between you and the person you tagged.
**lucky** **-** Master dusty will send you a magical lucky number.
**mirror** **-** It makes a mirror effect to your texts.
**question** **-** Answers your question randomly,be careful dusty can be aggressive.
**rip** **-** Places your avatar or the person you tagged  on the tombstone.
**roma** **-** It can convert multi-digit numbers to roman numerals.
**say** **-** Lovely dusty can type the text you want.
**search** **-** You can make a visual search on google.
**slot** **-** You can play a slot game with fruits. If all three come the same, you win.
**snipe** **-** Shows the last deleted post in the channel.
**speak** **-** Its a tts command that dusty can speak whatever you want on the voice channel.
**speed** **-** You can do speed test.
**split** **-** Dusty will split the sentence you want.
**spoiler** **-** It will hide your typed text as spoiler in channel.
**vote** **-** Allows you to vote on any topic you want.
**weather** **-** Shows the weather forecast of the city you want in fahrenheit. `
    )
    .setFooter(
      `You can use the first letters for short commands`,
      client.user.avatarURL
    );
  return message.channel.send(dusty);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["explanation", "explanations", "ex"],
  permLevel: 0
};

exports.help = {
  name: "exp",
  description: "",
  usage: "exp"
};
