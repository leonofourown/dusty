const Discord = require("discord.js");
const dusty = [
  "YESS",
  "NOOO",
  "PROBABLY",
  "NOPE",
  "UPSS!",
  "SORRY!",
  "DAMNN YOU!",
  "OKAY",
  "NO PROBLEM",
  "I DO",
  "OK OK YOU CAN BE MY FRIEND!",
  "CMONNNNN",
  "I AM NOT IN MY MOOD! ...",
  "HOW SHAME!",
  "WHY?",
  "DIDNT SEE THE QUESTION I WAS IN THE TOILET!",
  "IMPOSSIBLE",
  "GOOD",
  "BLINK FOR YOU",
  "WHAT WAS THE QUESTION ?",
  "NOT GOOD!",
  "YOU ARE RIGHT BUDDY!",
  "THE RIGHT PERSON HIDDEN UNDER YOUR BED!",
  "BAD BOY",
  "HA CNIM",
  "BUYUR",
  "YOU ARE ALONE",
  "I HATE YOU",
  "HELL YEAHH!!",
  "NOT MY PROBLEM",
  "I'M BUSY RIGHT NOW",
  "I'M JUST A BOT",
  "LAHMACUN?",
  "I AM GOOD, THANKS FOR ASKING !!!",
  "I SAID NO!",
  "WHAT DO YOU WANT FROM ME?",
  "UNFORTUNATELY",
  "WHAT? DID YOU INVITE ME TO DINNER?",
  "OF COURSE",
  "MAYBE",
  "QUESTION AGAIN? NEVER MIND!",
  "I HAVE A BOYFRIEND!",
  "I CAN'T TELL NOW",
  "FOCUSED AND ASK AGAIN"
];
exports.run = function(client, message, args) {
  var soru = args.join(" ");
  var cevap = dusty[Math.floor(Math.random() * dusty.length)];
  if (!soru)
    return message.channel.send(
      `\`Ask a question.Proper use: [ask/??] [question]\``
    );
  else message.reply(cevap);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["?", "ask-question", "ask", "question", "q"],
  permLevel: 0
};
exports.help = {
  name: "ask-question",
  description: "Ask a question to the bot = ??",
  usage: "?"
};
