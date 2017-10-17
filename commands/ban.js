const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()

module.exports.run = async (client, message, args) => {
	let modRole = message.guild.roles.find("name", "Owner");
	if(message.member.roles.has(modRole.id)) {
		let banMember = message.guild.member(message.mentions.users.first());
		message.guild.member(banMember).ban();
		message.channel.sendMessage("That member has been banned.");
	} else {
		return message.reply("Unfortunatley, you dont have the perms to kick members. PM Luezoid if you think you should have this command!");
}};


module.exports.help = {
    name: "ban"
}
