exports.run = function(client, message) {
  let y =
    Math.floor(Math.random() * (Math.floor(75) - Math.ceil(1) + 1)) +
    Math.ceil(1);
  let x = null;
  if (y < 15) {
    x = "";
  } else if (y < 30) {
    x = "";
  } else if (y < 45) {
    x = "";
  } else if (y < 60) {
    x = "";
  } else {
    x = "";
  }
  message.channel.send(x + y);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["l", "lucky", "lucky-number"],
  permLevel: 0,
  kategori: "fun"
};

exports.help = {
  name: "luck",
  description: "lucky number.",
  usage: "lucky"
};
