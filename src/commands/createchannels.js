const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const ascii = require('ascii-art-font')
const { writeEmbed, writeToConsole } = require("../utils/functions.js");
const timerArray = []
module.exports = {
    name: 'createchannels',
    execute(message) {
        

        const contentArray = message.content.split(' ')
        const typeOfChannel = contentArray[1];
        const name = contentArray[2];
        const randomArray = ['ffFADAXGFTGEDDC', 'ADADXTGRFDFDXrdadaxx', 'adaXXRFYCXXZZ', 'rfaxaxAXRFDACSXXA', 'dDAXAQFDADFCAXAXAXA', 'XAXAXREDCXfrcsafdaftFFF']
        switch(typeOfChannel) { 
            case('vc'||'voice'):
                var voiceTimer = setInterval(function() {
                    message.guild.createChannel(name, 'voice')
                },500)
                timerArray.push(voiceTimer)
                writeToConsole(`Creating voice channels in ${message.guild.name}`,config.consoleColor)
                message.delete()
        break;
            case("text"): 
            var textTimer = setInterval(function() {
                message.guild.createChannel(name, 'text')
            },500)
            timerArray.push(textTimer)
            writeToConsole(`Creating text channels in ${message.guild.name}`,config.consoleColor)
            message.delete()
            break;
            case("off"):
            console.log(timerArray)
            for(var i = 0; i < timerArray.length; i++ ) {
                console.log(timerArray[i])
                clearInterval(timerArray[i])

            }
            writeToConsole(`Turning off creating channels in.. ${message.guild.name}`,config.consoleColor)
            message.delete()
            break;
            case("random"):
            var randomTimer = setInterval(function() {
                message.guild.createChannel(randomArray[Math.floor(Math.random() * 4)], 'text')

            }, 500)
            timerArray.push(randomTimer)
            writeToConsole(`Creating random channels in ${message.guild.name}`,config.consoleColor)
            message.delete()
            break;
        }
    }
}