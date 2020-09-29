const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const ascii = require('ascii-art-font')
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
const settings = require('../settings.json')
const fs = require('fs');
const { write } = require("ascii-art-font");
module.exports = {
    name: 'nitrosnipe',
    execute(message) {
        const messageArray = message.content.split(' ')
        const option = messageArray[1]
        switch(option) {
            case('on'):
            const data = {
                logger: settings.logger,
                nitrosniping: 'on',
                logWebhook: settings.logWebhook,
                twitchURL: settings.twitchURL
            }
            const writeData = JSON.stringify(data, null, 2)
            fs.writeFileSync('./settings.json', writeData)
            writeToConsole('Written to settings.json file, nitrosniping turned on', config.consoleColor)
            const newEmbedOne = new Discord.RichEmbed()
            writeEmbed('Nitrosniping turned [On]', newEmbedOne)
            message.channel.send(newEmbedOne)
            message.delete()
            break;
            case('off'):
            const dataTwo = {
                logger: settings.logger,
                nitrosniping: 'off',
                logWebhook: settings.logWebhook
            }
            const writeDataTwo = JSON.stringify(dataTwo, null, 2)
            fs.writeFileSync('./settings.json', writeDataTwo)
            writeToConsole('Written to settings.json file, nitrosniping turned off', config.consoleColor)
            const newEmbedTwo = new Discord.RichEmbed()
            writeEmbed('Nitrosniping turned [Off]', newEmbedTwo)
            message.channel.send(newEmbedTwo)
            message.delete()
            break;
        }
    }
}
                