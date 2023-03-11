const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('milenakos')
		.setDescription('milenakos description!'),
	async execute(interaction) {
        const bignum = 100
        const smallnum = 0
        const Milenakos = Math.floor(Math.random() * bignum) + smallnum; // smallからbigまでの数値を生成
        const bignum2 = 100000000
        const smallnum2 = 0
        const Subscribers = Math.floor(Math.random() * bignum2) + smallnum2; // smallからbigまでの数値を生成
        await interaction.reply({ files: ['./assets/Milenakos.jpg'] });
        await interaction.channel.send(`*Milenakos Random power*: ${Milenakos}%`);
        await interaction.channel.send(`*Milenakos Random Subscribers*: ${Subscribers}`)
        
        const message = await interaction.fetchReply();
        message.react('1083953553892200469');
	},
};
