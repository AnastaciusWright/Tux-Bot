const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


client.once('ready', () => {
	console.log('Ready!');
});
client.on('message',message =>{
    if(message.content ==='!ping')
    {
        message.channel.send('Pong.');
    }
  if(message.content =='!consulta')
  {
    message.channel.send("El estado actual del usuario es "+message.member.voice.serverMute);
    message.channel.send("Intentando desmutear");
    //aca hay que desmutearlos
    message.member.voice.setMute(false,"consulta");
    setTimeout(function(){message.member.voice.setMute(true,"consulta fin")},10000)
  }
});

client.login(config.token);
