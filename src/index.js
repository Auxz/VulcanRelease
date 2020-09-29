const Discord = require('discord.js')
const axios = require('axios')
const fs = require('fs')
const config = require('./config.json')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const settings = require('./settings.json');
const { writeEmbed, writeLogEmbed } = require('./utils/functions');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Use https://www.colorhexa.com/ for selecting embed colors

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if(message.author.id === config.userid) {
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;
	const args = message.content.slice(config.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, client);
	} catch (error) {
		console.error(error);
		
	}
	}
	else { 
		return
	}
})
client.on('ready', () => {
	console.log(`VULCAN - ONLINE AS ${client.user.tag}`)
})
client.on('messageDelete' , deletedMessage => { // Event for the logging command, would add more events such as deleted messages, but I'm quite lazy. You're free to make a pull request.
	if(settings.logger === 'off') {
		//Do Nothing
	}
	else { 
	const newEmbed = new Discord.RichEmbed()
	writeLogEmbed('Message Deleted', newEmbed)
	newEmbed.addField(deletedMessage.author.tag, `Message Content : \n${deletedMessage.content}`)
	if(deletedMessage.guild != null){
	newEmbed.addField('Guild Information', `Name : ${deletedMessage.guild.name}\nID: ${deletedMessage.guild.id}`)
	}
	client.fetchWebhook(settings.logWebhook).then(webhook => {
		webhook.send(newEmbed)
	})
}
})

client.login(config.token)