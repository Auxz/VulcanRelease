const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json');
const { write } = require("ascii-art-font");
const axios = require('axios')
const { writeEmbed } = require('../utils/functions.js')
module.exports = {
    name: 'getroblox', // Uses the ROVER API to fetch a discord user's roblox.
    execute(message) {
        const tagged = message.mentions.users.first()
        var targetDiscordID = tagged.id;
                    if(tagged) {
                    axios.get(`https://verify.eryn.io/api/user/${targetDiscordID}`).then(response => {
                    const newEmbed = new Discord.RichEmbed()
                    writeEmbed(response.data.robloxUsername, newEmbed)
                    message.channel.send(newEmbed)
                    message.delete()
                    })
                        }
                    else {
                        const messageArray = message.content.split(' ')
                        const discordID = messageArray[1]
                        axios.get(`https://verify.eryn.io/api/user/${discordID}`).then(response => {
                            const newEmbed = new Discord.RichEmbed()
                            writeEmbed(response.data.robloxUsername, newEmbed)
                            message.channel.send(newEmbed)
                            message.delete()
                            })
                                }
                    }

                }