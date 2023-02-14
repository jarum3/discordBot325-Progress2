const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

// list iteration would need to be done outside of function, .addOptions
// for(element in getListFromFile()){
// }

// Creates a short, hard-coded example of a select menu. Template for other commands.
module.exports = {
  data: new SlashCommandBuilder()
    .setName('selectcoursesbuilder')
    .setDescription('Creates a dropdown menu in this channel for students to select their roles'),
  async execute(interaction) {
    const funcs = require('../helpers/functions');
    const rolesList = funcs.getListFromFile('data/courses.json');
    const options = [];
    rolesList.forEach(element => options.push({ label: element.name, description: element.name, value: element.name }));
    const row = new ActionRowBuilder().addComponents(new StringSelectMenuBuilder()
      .setCustomId('reaction-roles')
      .setPlaceholder('Nothing selected')
      .setMinValues(1)
      .setMaxValues(options.length)
      .addOptions(options));
    await interaction.reply({ content: 'Please select which courses you are enrolled in for this semester:', components: [row] });
  },
};