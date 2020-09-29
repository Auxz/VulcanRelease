const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const ascii = require('ascii-art-font')
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
const settings = require('../settings.json')
const fs = require('fs');
const { write } = require("ascii-art-font");
module.exports = {
    name: 'serverinfo',
    execute(message) {
        const guildObject = message.guild
        const newEmbed = new Discord.RichEmbed()
        writeEmbed('Server Information', newEmbed)
        newEmbed.addField('Guild Name', guildObject.name)
        newEmbed.addField('Created at', guildObject.createdAt)
        newEmbed.setThumbnail(guildObject.iconURL)
        newEmbed.addField('Member Count', guildObject.memberCount)
        newEmbed.addField('Owner', guildObject.owner.user.tag)
        message.channel.send(newEmbed)
        message.delete()
    }
}