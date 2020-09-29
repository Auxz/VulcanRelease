
const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
module.exports = {
    name: 'smoke',
    execute(message) { 
        const contentArray = message.content.split(' ')
        var number = contentArray[1]
        for(var i = 0; i < number; i++) {
            message.guild.createChannel('jnfsfsfsGFFKAXX').then(channel => { // Change the string inside of the create to whatever channel names you want
                channel.delete()
            })
        }
        message.delete()
        writeToConsole(`Smoked ${message.guild.name}`, config.consoleColor)
    }
}