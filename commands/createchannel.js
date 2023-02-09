const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createchannel')
		.setDescription('creates a new channel')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name of the new channel')),
	async execute(interaction) {
        const name = interaction.options.getString('name');

        interaction.guild.channels.create({
            name: name,
        })
            .then(console.log)
			.catch(console.error);

		await interaction.reply('new channel created');
	},
};