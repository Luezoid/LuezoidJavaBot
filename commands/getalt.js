const Discord = require('discord.js');
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()

module.exports.run = async (client,  message,  args) => {
	var alts = ["ismaw34@hotmail.com:AuronWakka1!", " m.ryan@hotmail.ch:fusil123", " jennypaul@iinet.net.au:mollyc4", " cedrik-99@web.de:dersewski1", " dexter@support-wehen.de:liebe2004", " jd_serolf777@yahoo.com:JonSerolf21", " Fitzpatrickleslie@yahoo.com:Leslie1019", " trisaarlag@gmail.com:tantan0706", " alexis.83143@live.fr:Miaouss11", " HallCZ@atlas.cz:Zatazeno11", " bindinglight@hotmail.com:apprentice1", " la_fergez@mail.ru:Artyom1212", " h2olover7@gmail.com:ght743", " TamGam3r@gmail.com:xd-1310", " chrisnox1@yahoo.com:married", " practicality@live.com:notreal104", " henrikbecker1@live.de:albert55", " pkdick@gmail.com:8zxc2e1s", " vali.ferst@web.de:StarWars0!", " glacenjack@hotmail.com:wase4poki8", " cpainter@btinternet.com:ThomasP1", " e-staley@att.net:raptor3305", " justin.lummis@bigpond.com:justice7", " ahamamura1@gmail.com:AlexAndrew1", " fija11@gmx.de:Waldweg2"]
	var rand = alts[Math.floor(Math.random() * alts.length)];
			message.channel.send("**Check your DM's for your free alt!**")
			message.author.send(`Enjoy your alt! ${rand}`);
}

module.exports.help = {
    name: "getalt"
}
