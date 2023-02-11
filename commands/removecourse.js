const { SlashCommandBuilder } = require('discord.js');

// TODO: Removes a course from the list, only removing one course and leaving the rest untouched.

module.exports = {
  data: new SlashCommandBuilder().setName('removecourse').setDescription('Removes a course from the list of courses'),
  async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    interaction.editReply(`Pong!\nTook ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};