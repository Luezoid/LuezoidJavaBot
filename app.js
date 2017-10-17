const Discord = require('discord.js');
const token = require('./config/config.json').token;
const client = new Discord.Client
const fs = require('fs')
client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
		if(err) console.error(err);

		let jsfiles = files.filter(f => f.split(".").pop() === ("js"));
		if(jsfiles.length <= 0) {
			return;
		};

		console.log(`Loading ${jsfiles.length} commands!`);

		jsfiles.forEach((f, i) => {
				let props = require(`./commands/${f}`);
				console.log(`${i + 1}: ${f} loaded!`);
				client.commands.set(props.help.name, props);
		});
});

//This command was made to say if it's online in the console and what game it's playing.

client.on('ready',() => {
	console.log('I\'m Online\n');
	console.log(client.commands);
	client.user.setGame("use -help");
});

//This command shows if someone has joined the server!

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

var prefix = "-"
client.on('message', message => {
	if (message.author.bot) return;

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);

if (!message.content.startsWith(prefix)) return;

	let commands = client.commands.get(command.slice(prefix.length));
	if (commands) commands.run(client, message, args)

});	

//This is the token.

client.login(process.env.BOT_TOKEN);
