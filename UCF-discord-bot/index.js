require('dotenv').config()

list = ["chickfila", "chipotle", "lazy moon", "ramen takagi", "pub sub", "panda express", "tijuana flats", "la granja", "random indian place abdul was talking about", "firehouse subs", "**STARVE**", "five guys"];
// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'rng') {
		await interaction.reply(list[Math.floor(Math.random() * list.length)]);
	} else if (commandName === 'list') {
		await interaction.reply(list.toString());
	}
});

// Login to Discord with your client's token
client.login(process.env.BOT_KEY);