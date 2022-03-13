/**
 * index.js - created 06/08/2021
 * @description Main bot logic that sends random quotes to a Discord channel, and schedules a daily quote
 * to be posted in a specified channel.
 * @author Lauren Bassett <laurenb252@outlook.com>
 **/

const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();
const mongoose = require('mongoose');
const Quotes = require('./schemas/quote-schema');
const cron = require('node-cron');
const { channel } = require('node:diagnostics_channel');

// Create a new Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();
client.events = new Collection();

mongoose.connect(process.env.MONGODB_SRV1, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to the database!');
}).catch((err) => {
    console.log(err);
});

async function getQuote() {
    try {
        // Generates a random number
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        // Fetches all entries in the DB
        const quote = await Quotes.find();
        // Holds random number between 0 and 140 (number of DB entries)
        const index = random(0, 140);

        // Returns quote with assigned random index
        return quote[index]

    } catch (error) {
        console.log("Something went wrong. Could not find quote.", error);
    }
};


// When the client is ready, run this code
client.on('ready', () => {
    console.log('Frankie is online!');
    // Presence shown in Discord
    client.user.setActivity('The Bachelor', { type: 'WATCHING' });

    try {
        // Schedules messages so one random quote is sent at 6:30 PM every day
        cron.schedule('0 30 18 * * *', async () => {
            // Holds ID of specified channel for quote to be posted in
            const channel = client.channels.cache.get(process.env.CHANNEL);
            // Random quote to be posted
            const finalQuote = await getQuote();
            // Bot waits 0.5 seconds before posting quote
            setTimeout(() => {
                // Posts a quote to database using randomly generated index
                channel.send("Daily quote: " + finalQuote.quote);
            }, 500)
        }, {
            scheduled: true,
            timezone: 'Europe/Dublin'
        });

    } catch (error) {
        console.log("Something went wrong. Could find quote for scheduled post.", error);
    }
});



// Executed upon message event
client.on('messageCreate', async (message) => {
    try {
        // If user types '!quote' command
        if (message.content.toLowerCase() === "!quote") {
            const channel = process.env.CHANNEL;
            if (message.channel.id === channel) {
                // Quotes only allowed to be posted in the bot-commands channel to cut down on spam
                const finalQuote = await getQuote();
                setTimeout(() => {
                    // Posts a quote to database using randomly generated index
                    message.channel.send(finalQuote.quote);
                }, 500);
            }
            else {
                message.channel.send("Not allowed here! Type '!quote' in the bot-commands channel to see a quote.");
            }
        }
    } catch (error) {
        console.log("Something went wrong. Could not find quote.", error);
    }
});
// Login to Discord with app's token
client.login(process.env.TOKEN);