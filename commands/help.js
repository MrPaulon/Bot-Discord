const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send( new Discord.MessageEmbed()
            .setTitle('Liste des commandes')
            .setDescription('Voici la liste des commandes du bot vous pouvez également les consulter sur le [Site Internet](https://google.fr)')
            .setColor('#3f51b5')
            .addField('p!**bjr**', 'Cette commande permet de dire bonjour au bot !', true)
            .addField('p!**help**', 'Cette commande permet de demander les commandes que propose le bot !', true)
            .setFooter('[BOT] Paulon', 'https://cdn.discordapp.com/attachments/641713008414031912/795764169957048361/Paulon.png')
            .setTimestamp())
    },
    name: 'help'
}