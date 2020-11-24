const Discord = require("discord.js");
const os = require("os");
var speedTest = require("speedtest-net");

exports.run = (client, message) => {
  var osType = os.type();
  if (osType === "Darwin") osType = "macOS";
  else if (osType === "Windows") osType = "Windows";
  else if (osType === "Linux") osType = "Linux";
  else if (osType === "Ubuntu") osType = "Ubuntu";
  else osType = os.type();
  var test = speedTest({ maxTime: 5000 });
  test.on("data", data => {
    const embed = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle("Speedtest Results")
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/773668869453643796/776667460572151818/lalalalala.png"
      )
      .addField(
        "Instant Statistics",
        `Download: ${data.speeds.download}
Upload: ${data.speeds.upload}`
      )

      .addField(
        "Pings",
        `Discord API Ping: ${client.ping}
Measured Ping in Speedtest: ${data.server.ping}`
      )
      .addField(
        "Other informations",
        `
Operating System: ${osType}
Location: ${data.server.country},${data.client.country}`
      );
    message.channel.send(embed);
  });
  test.on("error", err => {
    console.log(err);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["speed", "test", "speed-test"],
  permLevel: 0
};

exports.help = {
  name: "speedtest",
  description: "",
  usage: "speedtest"
};
