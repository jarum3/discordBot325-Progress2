const { SlashCommandBuilder } = require('discord.js');

// TODO: Adds an optional role to the list, with its role ID and description
module.exports = {
  data: new SlashCommandBuilder().setName('addoptrole').setDescription('Adds an optional role to the list of roles'),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    interaction.editReply(`Pong!\nTook ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};