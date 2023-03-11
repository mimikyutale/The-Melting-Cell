const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('The bot speaks up.')
        .addStringOption(option =>
            option
                .setName('words')
                .setDescription('words')
                .setRequired(true)),
	async execute(interaction) {
        const words = interaction.options.getString('words');
		await interaction.channel.send(`${words}`);
	},
};
