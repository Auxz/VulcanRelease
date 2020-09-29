const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const { writeToConsole, writeEmbed } = require("../utils/functions.js");
const { red } = require("colors");
module.exports = {
    name: 'deletechannels',
    execute(message, args, client) { 
        if(message.member.hasPermission('MANAGE_CHANNELS')) {
            message.guild.channels.forEach(channel => {
                    channel.delete()  // USE WITH CAUTION
                    
        })
        writeToConsole(`Channels successfully deleted in ${message.guild.name}`, config.consoleColor)
    }
    else { 
        const newEmbed = new Discord.RichEmbed()
        writeEmbed('No permissions to complete this action.', newEmbed)
        message.channel.send(newEmbed);
    }
}
}