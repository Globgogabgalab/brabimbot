const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
    if (message.content.startsWith(".brabim")){
        randomNumber = Math.floor(Math.random() * (1 - 1) + 1);
        if(randomNumber == 1){
            message.reply("Va te toma no cú");
        }
    }

    if (message.content.startsWith(".bomdia")){
        randomNumber = Math.floor(Math.random() * (1 - 1) + 1);
        if(randomNumber == 1){
            message.reply("https://www.youtube.com/watch?v=J4CaOMAtFxg");
        }
    }

    if (message.content.startsWith(".unimed")){
        randomNumber = Math.floor(Math.random() * (1 - 1) + 1);
        if(randomNumber == 1){
            message.reply("TA NO SEU CU FILHA DA PUTA");
        }
    }
});

bot.login(process.env.BOT_TOKEN);
