// require the needed discord.js classes
const { Client, Intents } = require('discord.js');

// create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Frankie is online!');
});

// login to Discord with your app's token
client.login('ODczMjY4MDA2ODY2NzgwMjgw.YQ18NQ.ZSbQ_WFszb8RdiXAjtXf3I-ghs4');