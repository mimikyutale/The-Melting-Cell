const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('pong!\nWebSocket Ping: ...\nAPI Endpoint Ping: ...');
		let msg = await interaction.fetchReply();
		await interaction.editReply(`WebSocket Ping: ${interaction.client.ws.ping}ms\nAPI Endpoint Ping: ...`);
		await interaction.fetchReply();
		await interaction.editReply(`WebSocket Ping: ${interaction.client.ws.ping}ms\nAPI Endpoint Ping: ${msg.createdTimestamp - interaction.createdTimestamp}ms`);
	},
};
