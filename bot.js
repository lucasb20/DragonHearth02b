const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
let responseObject = {
    "!invite" : "https://discordapp.com/oauth2/authorize?client_id=420712827742060545&scope=bot&permissions=2146958591",
    "!info" : "Bot Criado por lucasb20, em fase de desenvolvimente com o objetivo de ajudar nas tarefas no discord",
};

if(responseObject[message.content]){
    message.channel.send(responseObject[message.content])
}
});

Client.login(process.env.BOT_TOKEN);
