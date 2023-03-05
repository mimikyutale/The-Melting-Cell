const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('information about the bot'),
	async execute(interaction) {
        await interaction.reply({ files: ['./assets/MeltingCell.png'] });
        await interaction.followUp('🔥**Melting Cell**🔥\n /commands - ping, server, user, poll, cursed, video etc......\ndesc----\nMeltinggggg........ CELL yes nice beutiful. pLEasE uSe mEeEEEEeeEEeEEEe!!!!');
	},
};
