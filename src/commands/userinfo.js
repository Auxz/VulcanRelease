const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
module.exports = {
    name: 'userinfo', // Command to fetch information regarding a particular user
    execute(message) {
        if(message.guild === null) {
            const taggedUser = message.mentions.users.first()
            if(taggedUser) { 
                const newEmbed = new Discord.RichEmbed()
                writeEmbed(`User Info for ${taggedUser}`, newEmbed)
                newEmbed.setThumbnail(taggedUser.avatarURL)
                newEmbed.addField('Created at', taggedUser.createdAt)
                newEmbed.addField('Presence', taggedUser.presence.status)
                message.channel.send(newEmbed)
                message.delete()
                }
        }
        else {
            const taggedUser = message.mentions.users.first()
            const newEmbed = new Discord.RichEmbed()
            if(taggedUser) { 
               message.guild.fetchMember(taggedUser).then(guildmember => {
                   writeEmbed(`User info for ${taggedUser}`, newEmbed)
                   newEmbed.setThumbnail(taggedUser.avatarURL)
                   newEmbed.addField('Created at', taggedUser.createdAt)
                   newEmbed.addField('Presence', taggedUser.presence.status)
                   newEmbed.addField('Joined at', guildmember.joinedAt)
                   newEmbed.addField('Highest Role', guildmember.highestRole.name)
                   newEmbed.addField('Nickname', guildmember.nickname)
                   newEmbed.addField('Permissions', guildmember.permissions.toArray())
                   newEmbed.addField('Kickable', guildmember.kickable)
                   message.channel.send(newEmbed)
                   message.delete()


               })
                }
            if(!taggedUser) {
                const array = message.content.split(' ')
                const userID = array[1]
                message.guild.members.forEach(guildmember => {
                    if(guildmember.id === userID) {
                        writeEmbed(`User info for ${guildmember.nickname}`, newEmbed)
                        newEmbed.setThumbnail(guildmember.user.avatarURL)
                        newEmbed.addField('Created at', guildmember.user.createdAt)
                        newEmbed.addField('Presence', guildmember.user.presence.status)
                        newEmbed.addField('Joined at', guildmember.joinedAt)
                        newEmbed.addField('Highest Role', guildmember.highestRole.name)
                        newEmbed.addField('Nickname', guildmember.nickname)
                        newEmbed.addField('Permissions', guildmember.permissions.toArray())
                        newEmbed.addField('Kickable', guildmember.kickable)
                        message.channel.send(newEmbed)
                        message.delete()
     
                    }
                })
            }
        }
    }
}