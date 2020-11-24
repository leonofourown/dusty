const { apikey } = require("./ayarlar.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const os = require("discord.js/src/util/Constants.js");
os.DefaultOptions.ws.properties.$browser = "Discord iOS";
const ayarlar = require("./ayarlar.json");
const YouTube = require("simple-youtube-api");
const queue = new Map();
const ffmpeg = require("ffmpeg");
const express = require("express");
const youtube = new YouTube(apikey);
const ytdl = require("ytdl-core");
const prefix = ayarlar.prefix;
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const chalk = require("chalk");

client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(" ")[0].slice(ayarlar.prefix.length);
  let dusty = message.content.split(" ").slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, dusty, perms);
  }
});

client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("online");
  client.user.setActivity(`??`);  //playing
  console.log(
    `Bot AKTİF! Şu an ` +
      client.channels.size +
      ` adet kanala, ` +
      client.guilds.size +
      ` adet sunucuya ve ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` kullanıcıya hizmet veriliyor!`
  );
});


//EXTRA CODES

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut ismi:${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

//PERM LEVELS

client.yetkiler = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if (message.author.id === message.guild.ownerID) permlvl = 6;
  if (message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};

client.login(ayarlar.token);

// AUTO REPLY

client.on("message", msg => {
  if (msg.content.toLowerCase() === "dusty") {
    msg.channel.send("What ? Im busy..");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "?owner") {
    msg.channel.send("I created myself buddy!!.");
  }
});

client.on("messageDelete", message => {
  const dusty = require("quick.db");
  dusty.set(`snipe.mesaj.${message.guild.id}`, message.content);
  dusty.set(`snipe.id.${message.guild.id}`, message.author.id);
});

