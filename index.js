// Require the needed discord.js classes
const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();
const mongoose = require('mongoose');
const Quotes = require('./schemas/quote-schema');

// Create a new Discord client
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

// When the client is ready, run this code
// This event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Frankie is online!');
    client.user.setActivity('The Bachelor', { type: 'WATCHING' });
});

// Message event
client.on('messageCreate', async (message) => {
    // If user types quote command
    if (message.content.toLowerCase() === "!quote") {
        // Generates a random number
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        // Fetches all entries in the DB
        const quote = await Quotes.find();
        // Posts a quote to database using randomly generated index
        message.channel.send(quote[random(0, 2)].quote);
    }
});
// login to Discord with your app's token
client.login(process.env.TOKEN);