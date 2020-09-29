
const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const { writeToConsole } = require("../utils/functions.js");
module.exports = {
    name: 'spam',
    execute(message) { 
const contentArray = message.content.split(' ')
const numberOfTimes = contentArray[1]
if(numberOfTimes >= 50) return writeToConsole("Don't spam more then 50 messages at a time to prevent API abuse", config.consoleColor)
const spamMessage = contentArray.slice(2).join(' ')
message.delete()
for(var i = 0; i < numberOfTimes; i++) {
    message.channel.send(spamMessage)
}
writeToConsole(`Spamming ${spamMessage} ${numberOfTimes} times`)
    }
}