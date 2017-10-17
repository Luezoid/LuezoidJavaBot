const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()

module.exports.run = async (client, message, args) => {
			message.author.sendMessage('Hi!');
}

module.exports.help = {
    name: "testdm"
}
