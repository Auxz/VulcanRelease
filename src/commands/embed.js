const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json')
module.exports = {
    name: 'embed',
    execute(message) { 
        const contentArray = message.content.split(' ');
        const embedMessage = contentArray.slice(1).join(' ');
        const newEmbed = new Discord.RichEmbed()
        newEmbed.setColor(config.embedColor)
        newEmbed.setDescription(embedMessage)
        message.channel.send(newEmbed)
        message.delete()
    }
}