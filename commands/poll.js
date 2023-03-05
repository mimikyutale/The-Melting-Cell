const { Client, Events, GatewayIntentBits, SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Create a poll')
        .addStringOption(option =>
            option
                .setName('question')
                .setDescription('please add a question'))
        .addStringOption(option =>
            option
               .setName('option1')
               .setDescription('please add an option 1'))
        .addStringOption(option =>
            option
                .setName('option2')
                .setDescription('please add an option 2'))
        .addStringOption(option =>
            option
                 .setName('option3')
                 .setDescription('please add an option 3'))
        .addStringOption(option =>
            option
                .setName('option4')
                .setDescription('please add an option 4'))
        .addStringOption(option =>
            option
                .setName('option5')
                .setDescription('please add an option 5')),
    async execute(interaction) {
        const question = interaction.options.getString('question');
        
        const option1 = interaction.options.getString('option1');
        const option2 = interaction.options.getString('option2');
        const option3 = interaction.options.getString('option3');
        const option4 = interaction.options.getString('option4');
        const option5 = interaction.options.getString('option5');

        const pollembed = new EmbedBuilder()
            .setTitle(`📋${question}📋`)
            .setDescription(`📗.${option1}\n📘.${option2}\n📙.${option3}\n📔.${option4}\n📕.${option5}\nPlease add a reaction`);

        
        interaction.reply({ embeds: [pollembed] });
    },
};
    