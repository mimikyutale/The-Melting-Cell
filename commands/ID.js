const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('id')
		.setDescription('please Ids')
        .addStringOption(option =>
            option
                .setName('ids')
                .setDescription('Enter... ID')),
	async execute(interaction) {
        const bignum = 50 
        const smallnum = 0
        const count = Math.floor(Math.random() * bignum) + smallnum; // smallからbigまでの数値を生成
        const ids = interaction.options.getString('ids');
        const rickroll = new EmbedBuilder()
            .setTitle('wow You get Sercret ID')
            .setDescription('wowowowowowowowowowowowowowowowowowowowowowowowow')
        const yelmwe_alphsm_cqowner_completed_com = new EmbedBuilder()
            .setTitle(`${ids}`)
            .setDescription('this is keyqweord!');
        const cat = new EmbedBuilder()
            .setTitle(`${ids}`)
            .setDescription('nyan,nyan,nyan,nyan,nyan,nyan,nyan,nyan')
            .setThumbnail('https://cdn.discordapp.com/attachments/1044823678136897536/1075766827298344970/cat.png');
        const Error404 = new EmbedBuilder()
            .setTitle('Error Type:404')
            .setDescription('The ID does not exist or its whereabouts are currently unknown.');
        const insert_here = new EmbedBuilder()
            .setTitle(`${ids}`)
            .setDescription('You cant send Messages to this ID');
		await interaction.reply('WARNING');
		await interaction.editReply('ID number in preparation...');
        await interaction.fetchReply();
		await interaction.editReply('IDs being finalized');
        await interaction.fetchReply();
        await interaction.editReply('loading');
        await interaction.fetchReply();
        await interaction.editReply('loading.');
        await interaction.fetchReply();
        await interaction.editReply('loading..');
        await interaction.fetchReply();
        await interaction.editReply('loading...');
        await interaction.fetchReply();
        await interaction.editReply('loading');
        await interaction.fetchReply();
        await interaction.editReply('loading..');
        await interaction.fetchReply();
        await interaction.editReply('loading...');
        await interaction.editReply('COMPLETE!');
        if (ids === 'cat') {
            interaction.followUp({ embeds: [cat] });
        } else if (ids === 'yelmwe_alphsm_cqowner_completed_com') {
            interaction.followUp({ embeds: [yelmwe_alphsm_cqowner_completed_com] });
        } else if (ids === 'insert here') {
            interaction.followUp({ embeds: [insert_here] })
        } else {
            if (count < 1) {
                await interaction.fetchReply();
                interaction.followUp({ embeds: [rickroll]});
                interaction.followUp('wow! this is sercret message!\nclick here:<https://www.youtube.com/watch?v=dQw4w9WgXcQ>');
            } else {
                interaction.followUp({ embeds: [Error404] });
            }
        }
	},
};
