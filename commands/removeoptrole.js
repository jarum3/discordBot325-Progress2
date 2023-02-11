const { SlashCommandBuilder } = require('discord.js');

// TODO: Removes an optional role from the list, only removing one course and leaving the rest untouched.

module.exports = {
  data: new SlashCommandBuilder().setName('removeoptrole').setDescription('Removes an optional role from the list of roles'),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    interaction.editReply(`Pong!\nTook ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};