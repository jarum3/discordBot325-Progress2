const { SlashCommandBuilder } = require('discord.js');
const funcs = require('../helpers/functions');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('createcategory')
    .setDescription('Creates a new category')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('The Name of the category'))
    .addRoleOption(option =>
      option.setName('role')
        .setDescription('Role to restrict category to')),

  async execute(interaction) {
    const name = interaction.options.getString('name');
    const role = interaction.options.getRole('role');
    const categoryId = funcs.createCategory(interaction.guild, name, role);
    if (categoryId) await interaction.reply('New Category Created!');
    else await interaction.reply('For some reason, that category was not created.');
  },
};