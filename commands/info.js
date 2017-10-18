const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()

module.exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor('Luezoid Bot', `https://cdn.discordapp.com/attachments/366186774172663808/366228601844006912/LuezoidBotIcon.png`)
    .setColor(0x00AE86)
    .setTitle('**Hello and welcome to the Luezoid Hangout!**')
    .setDescription("Here, you can speak with other people, play with others and get free Minecraft alts, because we all know you hack on servers! Don't act like you don't want too!")
    message.channel.send({embed});
}

module.exports.help = {
    name: "help"
}
