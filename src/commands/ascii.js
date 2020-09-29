const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const ascii = require('ascii-art-font')
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
module.exports = {
    name: 'ascii', // Super simple command utilizing the ASCII art module to send a ASCII message.
    execute(message) {
        const args = message.content.split(' ').slice(1).join(' ')
        const codeString = '```'
        if(args.length >= 20) return writeToConsole('Please enter a single word or string for the ASCII command', config.consoleColor), message.delete()
        ascii.create(args, 'Doom').then(rendered => {
            message.channel.send(`${codeString}${rendered}${codeString}`)
            message.delete()
        })
    }
}
