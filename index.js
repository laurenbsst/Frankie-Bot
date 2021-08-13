// require the needed discord.js classes
const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();
const mongoose = require('mongoose');
const Quotes = require('./schemas/quote-schema');

// create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();
client.events = new Collection();

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to the database!');
}).catch((err) => {
    console.log(err);
});

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Frankie is online!');
    client.user.setActivity('The Bachelor', { type: 'WATCHING' });
});

client.on('messageCreate', async (message) => {
    const newQuote = await Quotes.create({
        quote: message
    });
});

// login to Discord with your app's token
client.login(process.env.TOKEN);