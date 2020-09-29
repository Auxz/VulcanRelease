const { Message } = require("discord.js")
const colors = require('colors')
const config = require('../config.json')
module.exports =  {
writeEmbed: function writeEmbed(text, embed) { // Simple function to standardize embeds
	embed.setColor(config.embedColor)
	embed.setAuthor('Vulcan')
    embed.setDescription(text)
    embed.setFooter('© Vulcan 2020')
    
},
writeToConsole: function writeToConsole(text, color) {   // Function to write to console using colored text!
    switch(color) { 
        case('red'): 
        var consoleText = text.red
        console.log(consoleText)
            
    }
},
writeLogEmbed: function writeLogEmbed(event, embed) {
    embed.setColor(config.embedColor)
    embed.setTitle(`Vulcan Logger \n ${event}`)
    embed.setFooter('© Vulcan 2020')

}
}