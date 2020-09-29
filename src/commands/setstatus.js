const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const ascii = require('ascii-art-font')
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
const settings = require('../settings.json')
module.exports = {
    name: 'setstatus',
    execute(message, args, client) {
        const messageArray = message.content.split(' ')
        const type = messageArray[1]
        const setStatusString = messageArray.slice(2).join(' ')
    
        switch(type) {
            case('streaming'):
                client.user.setActivity(setStatusString, {type: 'STREAMING', url: settings.twitchURL})
                writeToConsole('Successfully changed status to streaming', config.consoleColor)
                const newEmbed = new Discord.RichEmbed()
                writeEmbed(`Successfully set status to streaming ${setStatusString}`, newEmbed)
                message.channel.send(newEmbed)
                message.delete()
            break;
            case('watching'):
                client.user.setActivity(setStatusString, {type: 'WATCHING'})
                writeToConsole('Successfully changed status to watching', config.consoleColor)
                const newEmbedTwo = new Discord.RichEmbed()
                writeEmbed(`Successfully set status to watching ${setStatusString}`, newEmbedTwo)
                message.channel.send(newEmbedTwo)
                message.delete()
            break;
            case('playing'):
                client.user.setActivity(setStatusString, {type: 'PLAYING'})
                writeToConsole('Successfully changed status to playing', config.consoleColor)
                const newEmbedThree = new Discord.RichEmbed()
                writeEmbed(`Successfully set status to playing ${setStatusString}`, newEmbedThree)
                message.channel.send(newEmbedThree)
                message.delete()
            break;
            case('off'):
            client.user.setPresence({status: 'online'})
            break;
        }
    }
}