const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
const { execute } = require("./ascii.js");
module.exports = {
    name: 'help',
    execute(message) {
        const messageArray = message.content.split(' ')
        const command = messageArray[1]
        if(!command) {
            const newEmbed = new Discord.RichEmbed()
            newEmbed.addField('***General***', '`help`, `ascii`, `createchannels`, `deletechannels`, `embed`, `getroblox`, `logger`, `massdm`, `selfpurge`, `serverinfo`, `setstatus`, `smoke', `spam`, `sysinfo`, `userinfo`)
            newEmbed.setDescription('View specific usage for a command via (prefix)help [commandname]')
            newEmbed.setAuthor('Vulcan Help Center')
            message.channel.send(newEmbed)

        }
        const embed = new Discord.RichEmbed()
            embed.setAuthor('Vulcan Help Center')
        switch(command) {
            case('help'):
            embed.setDescription('Displays this command')
            message.channel.send(embed)
            break;
            case('ascii'):
            embed.setDescription('Sends a string of less then 30 characters in ASCII format')
            message.channel.send(embed)
            break;
            case('createchannels'):
            embed.setDescription('Creates channels in the server the command is ran in. \n/createchannels [vc/text] [channelname] or /createchannels random \n [REQUIRES PERMS]')
            message.channel.send(embed)
            break;
            case('deletechannels'):
            embed.setDescription('Deletes ALL channels in the server the command is ran in. \n /deletechannels [REQUIRES PERMS]')
            message.channel.send(embed)
            break;
            case('embed'):
            embed.setDescription('Sends text in an embed. /embed [text]')
            message.channel.send(embed)
            break;
            case('getroblox'):
            embed.setDescription('Returns a discord users roblox if they have one. \n /getroblox [@USER]')
            message.channel.send(embed)
            break;
            case('logger'):
            embed.setDescription('Turns logging on and off. \n /logger [ON/OFF] [WEBHOOKID]')
            message.channel.send(embed)
            break;
            case('massdm'):
            embed.setDescription('DMs all users in a guild, do not use this command unless you want to get banned. \n /massdm [MESSAGE]')
            message.channel.send(embed)
            break;
            case('selfpurge'):
            embed.setDescription('Purges messages sent by the user. \n /selfpurge [NUMBEROFMESSAGES < 100]')
            message.channel.send(embed)
            break;
            case('serverinfo'):
            embed.setDescription('Displays information about the server that the command is ran in. \n /serverinfo')
            message.channel.send(embed)
            break;
            case('setstatus'):
            embed.setDescription('Sets a users status. \n /setstatus [STREAMING/WATCHING/PLAYING] [TEXT]')
            message.channel.send(embed)
            break;
            case('smoke'):
            embed.setDescription("Smokes a server's audit logs by creating channels and deleting them in miliseconds. \n /smoke [NUMBEROFCHANNELS] \n [REQUIRES PERMS]")
            message.channel.send(embed)
            break;
            case('spam'):
            embed.setDescription('Spams your message a specificed number of times. \n /spam [NUMBEROFTIMES] [MESSAGE]')
            message.channel.send(embed)
            break;
            case('sysinfo'):
            embed.setDescription('Sends your PC informations in chat. \n /sysinfo')
            message.channel.send(embed)
            break;
            case('userinfo'):
            embed.setDescription('Sends tagged user information. \n /userinfo [@USER]')
            message.channel.send(embed)
            break;


        }
    }
}