const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()

module.exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
		.setAuthor('Luezoid Bot', `https://cdn.discordapp.com/attachments/366186774172663808/366228601844006912/LuezoidBotIcon.png`)
 		.setColor(0x00AE86)
 		.setDescription(' **[« Rules »]** | Have you broken one of these?')
 		.addField('**[« Spam »]**', 'Do not spam the text channels with random/stupid stuff. Also please use commands in the #bot-commands channel, PLEASE')
 		.addField('**[« Swearing »]**', 'Swearing *is* allowed, but please do not flood the chat with swear words')
 		.addField('**[« Behaviour »]**', 'Be respectful to other players and admins')
		.addField('**[« Listen »]**', 'If an admin says something, listen. Simple.')
		.addField('**[« Bugs »]**', 'Report any bugs you find to Twashi, Madd_Luezoid or WaiTiBoii.')
		.addField('**[« Banter »]**', "Just don't take it too far, you will get a mute.")
		.addField('**[« Alts »]**', " You can spam the t-getalt command if you want. But do it in #bot-commands.")
		.addField('**[« Banter »]**', "Go get them with that 6 block reach on your lovely new alt!")
		message.channel.send({embed});

}

module.exports.help = {
    name: "rules"
}
