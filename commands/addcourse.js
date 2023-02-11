const { SlashCommandBuilder } = require('discord.js');

// Adds a course to the list of courses, with a role and veteran role attached
module.exports = {
  data: new SlashCommandBuilder()
    .setName('addcourse')
    .setDescription('Adds a course to the list of courses')
    .addStringOption(option =>
      option.setName('prefix')
        .setDescription('Course prefix'))
    .addStringOption(option =>
      option.setName('number')
        .setDescription('Course number')),
  async execute(interaction) {
    const funcs = require('../helpers/functions');
    const roleData = require('../helpers/role');
    const prefix = interaction.options.getString('prefix');
    const number = interaction.options.getString('number');
    const rolesList = funcs.getListFromFile('data/courses.json');
    const serverRoles = [];
    interaction.guild.roles.cache.forEach(r => {
      serverRoles.push(r.name);
    });
    for (const course of rolesList) {
      if (course.prefix === prefix && course.number === number) {
        // If our course is already in the list, just return an error message
        interaction.reply('A course with that name already exists.');
        return;
      }
    }
    const roleName = prefix + '-' + number;
    let color;
    let role = interaction.guild.roles.cache.find(x => x.name === roleName);
    let veteranRole = interaction.guild.roles.cache.find(x => x.name === roleName + ' Veteran');
    if (!role) {
      color = funcs.generateColor();
      while (interaction.guild.roles.cache.find(x => x.hexColor === color)) {
        // Keep generating a new color until no role matches it
        color = funcs.generateColor();
      }
      role = await interaction.guild.roles.create({
        name: roleName,
        color: color,
      })
        .then(x => {
          return x;
        })
        .catch(console.error());
    }
    else {
      color = role.hexColor;
    }
    if (!veteranRole) {
      const veteranColor = funcs.adjustColor(color, -35);
      veteranRole = await interaction.guild.roles.create({
        name: roleName + ' Veteran',
        color: veteranColor,
      })
        .then(x => {
          return x;
        })
        .catch(console.error());
    }
    const newCourse = new roleData.CourseRole(prefix, number, role, veteranRole);
    rolesList.push(newCourse);
    funcs.saveListToFile(rolesList, 'data/courses.json');
    interaction.reply('Course added!');
  },
};