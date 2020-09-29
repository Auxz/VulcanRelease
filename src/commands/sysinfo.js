const Discord = require("discord.js");
const utils = require('../utils/functions.js')
const config = require('../config.json')
const systeminfo = require('systeminformation');
const { writeEmbed } = require("../utils/functions.js");
module.exports = {
    name: 'sysinfo',
    execute(message) { 
        const newEmbed = new Discord.RichEmbed()
        writeEmbed('System Information', newEmbed)
        systeminfo.cpu().then(cpu =>  {
            newEmbed.addField('CPU Model and Speed', `${cpu.brand} - ${cpu.speed}`)
        systeminfo.osInfo().then(os => {
            newEmbed.addField('Operating System Information', os.distro)
        systeminfo.memLayout().then(memory => {
            for(var i = 0; i < memory.length; i++) {
                const megaBytes = memory[i].size / 1000000 - 500;
                newEmbed.addField('Memory Stick Information', `Speed - ${memory[i].clockSpeed}\n Size - ${megaBytes}`)
            }
        message.channel.send(newEmbed)
        message.delete()
        })
})
        })
    }
}