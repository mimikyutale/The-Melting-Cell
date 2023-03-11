const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cursed')
        .setDescription('Generate a cursed image'),
    async execute(interaction) {
        const bignum = 20
        const smallnum = 1
        const count = Math.floor(Math.random() * bignum) + smallnum; // smallからbigまでの数値を生成
        
        if (count == 1) {
            await interaction.reply({ files: ['./assets/cursed/1.png'] });
        }
        if (count == 2) {
            await interaction.reply({ files: ['./assets/cursed/2.png'] });
        }
        if (count == 3) {
            await interaction.reply({ files: ['./assets/cursed/3.png'] });
        }
        if (count == 4) {
            await interaction.reply({ files: ['./assets/cursed/4.png'] });
        }
        if (count == 5) {
            await interaction.reply({ files: ['./assets/cursed/5.png'] });
        }
        if (count == 6) {
            await interaction.reply({ files: ['./assets/cursed/6.png'] });
        }
        if (count == 7) {
            await interaction.reply({ files: ['./assets/cursed/7.png'] });
        }
        if (count == 8) {
            await interaction.reply({ files: ['./assets/cursed/8.png'] });
        }
        if (count == 9) {
            await interaction.reply({ files: ['./assets/cursed/9.png'] });
        }
        if (count == 10) {
            await interaction.reply({ files: ['./assets/cursed/10.png'] });
        }
        if (count == 11) {//please add more cursed images
            await interaction.reply({ files: ['./assets/cursed/11.png'] });
        }
        if (count == 12) {
            await interaction.reply({ files: ['./assets/cursed/12.png'] });
        }
        if (count == 13) {
            await interaction.reply({ files: ['./assets/cursed/13.png'] });
        }
        if (count == 14) {
            await interaction.reply({ files: ['./assets/cursed/14.png'] });
        }
        if (count == 15) {
            await interaction.reply({ files: ['./assets/cursed/15.png'] });
        }
        if (count == 16) {
            await interaction.reply({ files: ['./assets/cursed/16.png'] });
        }
        if (count == 17) {
            await interaction.reply({ files: ['./assets/cursed/17.png'] });
        }
        if (count == 18) {
            await interaction.reply({ files: ['./assets/cursed/18.png'] });
        }
        if (count == 19) {
            await interaction.reply({ files: ['./assets/cursed/19.png'] });
        }
        if (count == 20) {
            await interaction.reply({ files: ['./assets/cursed/20.png'] });
        }
        const message = await interaction.fetchReply();
        message.react('👍');
        message.react('👎');
    },
};
