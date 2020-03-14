const Discord = require('discord.js');
const client = new Discord.Client();



client.once('ready', () => {
	console.log('Ready!');
});
client.on('message',message =>{
    console.log(message.content);
    });
client.login('Njg4NDYxOTY3MDEwNDMxMjUz.Xm0q7A.c5EVw7C9KGJwQpkzF6cxuxQ6-Yk');