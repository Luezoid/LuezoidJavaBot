const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()
let usageMb = process.memoryUsage().heapUsed / 1024 / 1024;
let usage = usageMb.toFixed(2);
const embedClass = require('../classes/embedMessage.js');

module.exports.run = async (client, message, args) => {
  let embedMessage = new embedClass(message);

  const moment = require('moment');
  const ms = require('ms');
  let DiscordMoji = client.guilds.get('361925830521257984').emojis.find('name', 'discord');
  let SocialMoji = client.guilds.get('361925830521257984').emojis.find('name', 'social');

  /**
   * @param {Object} author
   * @param {Array} {Object}
   * @param {String} color
   * @param {String} thumbnail
   * @param {String} footer
   * @return {Error}
   * @return {Promise}
   */
  embedMessage.advanced({
      author: {
          name: `Take a look at my info`,
          pic: client.user.displayAvatarURL
      },
      fields: [{
          title: `My Discord Info:`,
          content: `**Username:** ${client.user.username}\n\
**Descriminator:** ${client.user.tag}\n\
**ID:** ${client.user.id}`
      },
          {
              title: `Process:`,
              content: `**Online since:** ${ms(client.uptime, {long: true})}\n\
**Memory Usage:** ${usage} MB\n\
**Operation System:** Windows 8.1 Pro`,
              inline: true
          },
          {
              title: `Social`,
              content: `**Total Guilds:** ${client.guilds.size}\n\
**Total Users:** ${client.users.filter(i => !i.bot).size}\n\
**Total Bots:** ${client.users.filter(i => i.bot).size}`,
              inline: true
          }
      ],
      color: 0x17B8B3,
      thumbnail: client.user.displayAvatarURL,
      footer: `Requested by ${message.author.username} | ${moment(new Date).format('DD/MM/YYYY [at] hh:mm:ss a')}`
  });
};

module.exports.help = {
    name: "botinfo"
}
