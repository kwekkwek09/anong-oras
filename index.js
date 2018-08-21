const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async() => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity(`say "anong oras na my dudes" to trigger bot`);
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type ==="dm" )return;


    let prefix = botconfig.prefix;
    let customprefix1 = botconfig.customprefix1;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    if(message.content.startsWith("anong oras na my dudes?")){
        return message.channel.send(`${message.createdAt} na my dudes`);
    }

});
bot.login(botconfig.token);

