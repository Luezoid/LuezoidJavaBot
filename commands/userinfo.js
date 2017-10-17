const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()
const moment = require('moment');

module.exports.run = async (client, message, args) => {
	if (!args[0]) {
			return message.channel.send('Please mention someone or use their ID for the command');
	}
	let userCom = client.users.get(args[0]) || message.mentions.users.last();
	if (!userCom) {
			return message.channel.send('Please `mention` someone or use their `ID` for the command!');
	}
	let memberCom = await message.guild.fetchMember(userCom);
	let created = moment(userCom.createdAt).format('MMMM Do YYYY, h:mm:ss a');
	let joined = moment(memberCom.joinedAt).format('MMMM Do YYYY, h:mm:ss a');
	let game = userCom.presence.game ? userCom.presence.game.name : 'None';
	let nickname = !memberCom.nickname ? 'None' : memberCom.nickname;
	let avatar = userCom.displayAvatarURL;
	let uid = userCom.id;
	let tag = userCom.tag;
	let isBot = userCom.bot ? 'Yes' : 'No';
	let status = '';
	if (userCom.presence.status === 'online') {
			status = 'Online';
	} else if (userCom.presence.status === 'offline') {
			status = 'Offline';
	} else if (userCom.presence.status === 'idle') {
			status = 'Idle';
	} else if (userCom.presence.status === 'dnd') {
			status = 'Do not disturb';
	}
	const embed = new Discord.RichEmbed()
			.setTitle('Userinfo | ' + userCom.username)
			.setThumbnail(avatar)
			.setDescription(`[Click here for the Avatar Link](${avatar})`)
			.addField('General Information', `Tag: **${tag}**\nID: **${uid}**\nGame: **${game}**\nStatus: **${status}**\nCreated at: **${created}**\nIs a Bot?: **${isBot}**`)
			.addField('Guild Spec. Information', `Nickname: **${nickname}**\nJoined at: **${joined}**\n`)
			.setFooter('May')
			.setColor('#19A6D4')
			.setTimestamp();

	message.channel.send({embed});
};

module.exports.help = {
    name: "userinfo"
}
