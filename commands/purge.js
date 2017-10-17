const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()

module.exports.run = async (client, message, args) => {
	message.delete();
	let messagecount = parseInt(args, 10);
	if (!messagecount) {
			return message.reply('How many messages?');
	}
	if (messagecount > 100) {
			return message.reply(`Purge has a limit of 100 messages a time`);
	}
	let ms;
	if (messagecount === 1) {
			ms = 2;
	} else {
			ms = messagecount;
	}
	message.channel.fetchMessages({limit: messagecount}).then(async messages => {
			message.channel.bulkDelete(ms);
	})
			.catch(err => {
					logger.error(err, message.channel.send('I cant delete message that are older than a 14 days'));
			})
			.catch(e => logger.error(e));
	setTimeout(() => {
			let promise = message.channel.send(`Deleted \`${messagecount}\` messages.`).then(m => m.delete(1500));
	}, 1500);
};

module.exports.help = {
    name: "purge",
		botPerm: ['Official Bots'],
		authorPerm: ['Owner']
}
