const Discord = require('discord.js');
var auth = require('./auth.json');

const client = new Discord.Client();
console.log(api);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});
