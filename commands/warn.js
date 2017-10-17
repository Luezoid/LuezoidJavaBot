const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()

module.exports.run = async (client, message, args) => {
	const toWarn = message.mentions.users.last() === client.user ? message.mentions.users.first() : message.mentions.users.last();
	const mayLog = message.guild.channels.find('name', 'may-log');
	let reason;
	let duration;
	if (!args[1]) {
			reason = args.slice(2).join(' ') ? args.slice(2).join(' ') : 'None';
	} else {
			reason = args.slice(1).join(' ');
	}

	if (!toWarn || toWarn === client.user) {
			return message.channel.send('Please mention someone.');
	}

	const embed = new Discord.RichEmbed()
			.setColor(0x23D992)
			.setAuthor(`Warned ${toWarn.tag}`)
			.setDescription(`**Warned User:** ${toWarn.tag} \`(${toWarn.id})\`\n**Warned By** ${message.author.tag} \`(${message.author.id})\`\n**Reason:** ${reason}`);
	mayLog ? mayLog.send({embed}) : message.channel.send({embed});


	update('warnCount', message.guild.id, toWarn.id)
	};

module.exports.help = {
    name: "warn"
}
