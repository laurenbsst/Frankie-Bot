// require the needed discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config();

// create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Frankie is online!');
    client.user.setActivity('The Bachelor', { type: 'WATCHING' });
});

// login to Discord with your app's token
client.login(process.env.TOKEN);