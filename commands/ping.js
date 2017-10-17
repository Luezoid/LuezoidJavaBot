const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()

module.exports.run = async (client, message, args) => {
message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
}

module.exports.help = {
    name: "ping"
}
