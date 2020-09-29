const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
module.exports = {
    name: 'selfpurge',
    execute(message) { 
        const array = message.content.split(' ');
        const number = array[1]
        if(!number) {
            message.channel.fetchMessages({limit: 100}).then(messages => {
                messages.forEach(msg => { 
                if(message.author.id === msg.author.id) {
                    message.delete()
                    msg.delete()
              
            }
        })
        const newEmbed = new Discord.RichEmbed
        writeEmbed(`Deleted 100 messages`, newEmbed)
        message.channel.send(newEmbed)
    })
}
if(number >= 101) return writeToConsole('Cannot delete more then 100 messages', config.consoleColor)
    else { 
        message.channel.fetchMessages({limit: number}).then(messages => {
            messages.forEach(msg => { 
            if(message.author.id === msg.author.id) {
                message.delete()
                msg.delete()
          
        }
    })
    const newEmbed = new Discord.RichEmbed
    writeEmbed(`Deleted ${number} messages`, newEmbed)
    message.channel.send(newEmbed)
})
    }
}
}