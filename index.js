const Discord = require('discord.js');

const pet = require("./pet.js")
require('dotenv').config()

const bot = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

bot.once('ready', () => {
    console.log('PetBot is online!')
})

bot.on('messageCreate', async msg => {
    //check permissions
    permission = msg.channel.permissionsFor(bot.user);
    permission = permission.toArray();

    //dont respond to self
    if(msg.author.username === bot.user.username) {return;}

    if(msg.content.includes("!petbotinfo")){
        msg.reply("Welcome to the petBot! To interact type \n!petdog\n!playdog\n!feeddog\n!statusdog\n!bathroomdog\nand !washdog")
    }
    //
    if(msg.content.includes("!petdog")){
        pet.pet(msg)
    }

    //
    if(msg.content.includes("!playdog")){
        pet.play(msg)
    }

    //
    if(msg.content.includes("!feeddog")){
        pet.feed(msg)
    }

    if(msg.content.includes("!statsdog")){
        pet.stats(msg)
    }

    if(msg.content.includes("!statusdog")){
        pet.status(msg)
    }

    if(msg.content.includes("!bathroomdog")){
        pet.bathroom(msg)
    }

    if(msg.content.includes("!washdog")){
        pet.wash(msg)
    }

    
})

bot.login(`${process.env.TOKEN}`);