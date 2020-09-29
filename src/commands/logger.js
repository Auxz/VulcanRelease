const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const ascii = require('ascii-art-font')
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
const settings = require('../settings.json')
const fs = require('fs');
const { write } = require("ascii-art-font");
module.exports = {
    name: 'logger', // Works by using a webhook to send deleted messages to on the 'messageDeleted event', check index.js:51 for more info.
    execute(message) {
        const messageArray = message.content.split(' ')
        const option = messageArray[1]
        const webhookID = messageArray[2]
        switch(option) {
            case('off'):
            const data = {
                logger: 'off',
                nitrosniping: settings.nitrosniping,
                logWebhook: settings.logWebhook,
                twitchURL: settings.twitchURL
            }
            const writeData = JSON.stringify(data, null, 2)
            fs.writeFileSync('./settings.json', writeData)
            writeToConsole('Written to settings.json file, logging turned off', config.consoleColor)
            const newEmbedOne = new Discord.RichEmbed()
            writeEmbed('Logging turned [Off]', newEmbedOne)
            message.channel.send(newEmbedOne)
            message.delete()
            break;
            case('on'): 
            const dataTwo = {
                logger: 'on',
                nitrosniping: settings.nitrosniping,
                logWebhook: webhookID,
                twitchURL: settings.twitchURL
            }
            const writeDataTwo = JSON.stringify(dataTwo, null, 2)
            fs.writeFileSync('./settings.json', writeDataTwo)
            writeToConsole('Written to setting.json file, logging turned on', config.consoleColor)
            const newEmbed = new Discord.RichEmbed()
            writeEmbed('Logging turned [On]', newEmbed)
            message.channel.send(newEmbed)
            message.delete()
            break;

            
        }
    }
}
        
