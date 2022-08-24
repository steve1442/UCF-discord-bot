require('dotenv').config()


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

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
});

// Login to Discord with your client's token
client.login(process.env.BOT_KEY);