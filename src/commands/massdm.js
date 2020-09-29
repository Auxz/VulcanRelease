const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
module.exports = {
    name: 'massdm',
    execute(message) { 
        const args = message.content.split(' ').slice(1).join(' ')
        message.guild.members.forEach(members => {

            members.send(args)

        })
        writeToConsole(`Sucessfully dm'd all users in ${message.guild.name}`, config.consoleColor)
        message.delete()
    }
}