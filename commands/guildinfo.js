const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()
const moment = require('moment');

module.exports.run = async (client, message, args) => {
	exports.run = async (client, message, args) => {
			if (!message.guild.available) {
					try{await message.channel.send('Discord API Error');}catch(e) {logger.error(e)}
					return;
			}
			let guild = message.guild;
			let name = guild.name;
			let createdAt = moment(guild.createdAt).format('MMMM Do YYYY, h:mm:ss a');
			let channels = guild.channels.size;
			let owner = guild.owner.user.tag;
			let memberCount = guild.memberCount;
			let large = guild.large;
			let iconUrl = guild.iconURL;
			let region = guild.region;
			let afk = message.guild.channels.get(guild.afkChannelID) === undefined ? 'None' : message.guild.channels.get(guild.afkChannelID).name;

			const embed = new Discord.RichEmbed()
					.setTitle('Guild Information')
					.addField('Channels', `**Channel Count:** ${channels}\n**AFK Channel:** ${afk}`, true)
					.addField('Members', `**Member Count:** ${memberCount}\n**Owner:** ${owner}\n**Owner ID:** ${guild.owner.id}`, true)
					.addField('More', `**Created at:** ${createdAt}\n**Large Guild?:** ${large ? 'Yes' : 'No'}\n**Region:** ${region}`)
					.setThumbnail(iconUrl)
					.setFooter('May')
					.setTimestamp();

			try{await message.channel.send({embed});}catch(e){logger.error(e)}
	};
}

module.exports.help = {
    name: "guildinfo",
		botPerm: ['Official Bots']
}
