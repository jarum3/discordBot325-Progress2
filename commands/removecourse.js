const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');
// Adds a course to the list of courses, with a role and veteran role attached
module.exports = {
  data: new SlashCommandBuilder()
    .setName('removecourse')
    .setDescription('Provides a dropdown to remove courses'),
  async execute(interaction) {
    const funcs = require('../helpers/functions');
    const rolesList = funcs.getListFromFile('data/courses.json');
    if (rolesList.length === 0) {
      await interaction.reply('There are no courses currently in the list.');
      return;
    }
    const options = [];
    rolesList.forEach(element => options.push({ label: element.name, description: element.name, value: element.name }));
    const row = new ActionRowBuilder().addComponents(new StringSelectMenuBuilder()
      .setCustomId('remove-courses')
      .setPlaceholder('Nothing selected')
      .setMinValues(1)
      .setMaxValues(options.length) // Registers as a multi-choice menu when more than 1 course is available
      .addOptions(options));
    await interaction.reply({ content: 'Please select which courses you\'d like to remove:', components: [row], ephemeral: true });
  },
};