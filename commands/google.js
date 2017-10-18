const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()
const google = require('google')

module.exports.run = async (client, message, args) => {
	const toSearch = args.join(' ');
	let links = [];
	if (!toSearch) {
			return msg.reply('Please insert something to search');
	}

	google(toSearch, async (err, res) => {
			for (let i = 0; i < 3; i++) {
					if (res.links[i].href !== null) {
							links.push('<' + res.links[i].href + '>');
					}
			}
			await msg.react('✅');
			await msg.channel.send(`**I found:**\n${links.join('\n')}`);
	});
};
}

module.exports.help = {
    name: "google"
}
