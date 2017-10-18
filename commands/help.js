const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()

module.exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setAuthor('Luezoid Bot', `https://cdn.discordapp.com/attachments/366186774172663808/366228601844006912/LuezoidBotIcon.png`)
    .setColor(0x00AE86)
    .setDescription(' **∴Commands∴**')
    .addField('« Use `-help` to show this message! »', '`-help`')
    .addField('« Use `-rules` to show the rules! »', `-rules`)
    .addField('« Use `-program` to show what program I was made in! »', '`-program`')
    .addField('« Use `-ping` to show your ping! »', '`-ping`')
    .addField('« Use `-testdm` to send you a DM! »', '`-testdm`')
    .addField('« Use `-botinfo` to see my information! »', '`-botinfo`')
    .addField('« Use `-purge` to clear messages! »', '`-purge (num)` ***[MODS]***')
    .addField('« Use `warn` to warn people! »', '`-warn (@someone)` ***[MODS]***')
    .addField('« Use `-kick/ ban` to kick or ban someone! »', '`-kick/ ban (@someone)` ***[MODS]***')
    .addField('« Use `-getalt` to get an alt! »', '`-getalt (num)` ***[LIMITED]***')
    .addField("« Use `-userinfo` to check someone's information! »", '`-userinfo (@someone)`')
    message.channel.send({embed});
}

module.exports.help = {
    name: "help"
}
