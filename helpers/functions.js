/* eslint-disable no-unused-vars */
module.exports = {
  createRole: async function (guild, roleName, color) {
    // Create a new role
    const createdRole = await guild.roles.create({
      name: roleName,
      color: color,
    })
      .then(role => console.log('Role created: ' + role.name))
      .catch(console.error());
    return createdRole;
  },
  createCategory: async function (guild, categoryName, role) {
    const { ChannelType } = require('discord.js');
    const createdCategory = await guild.channels.create({
      name: categoryName,
      type: ChannelType.GuildCategory,
    })
      .then(category => console.log('Created category: ' + category.name))
      .catch(category => console.error('Error created category: ' + category.name));
    // TODO #1 lock permissions to the given role object
    return createdCategory;
  },
  createChannel: async function (guild, channelName, category) {
    const { ChannelType } = require('discord.js');
    const createdChannel = await guild.channels.create({
      name: channelName,
      type: ChannelType.GuildText,
    })
      .then(channel => console.log('Created channel: ' + channel.name))
      .catch(channel => console.error('Error created category: ' + channel.name));
    createdChannel.setParent(category);
    createdChannel.lockPermissions();
    return createdChannel;
  },
  archiveCategory: function (category) {
    // TODO #2 Archive a category
    return 0;
  },
  getSemester: function () {
    // TODO #3 Get current semester
    return 0;
  },
  saveListToFile: function (list, file) {
    // TODO #4 Write data passed as an array of objects to JSON, overwrite file given.
    const arrList = JSON.stringify(list);
    return 0;
  },
  getListFromFile: function (file) {
    // TODO Function should return a list of objects parsed from the given file
    return JSON.parse(file);
  },
  isColor: function (strColor) {
    const { Colors } = require('discord.js');
    const RegExp = /(^#?[0-9A-F]{6}$)|(^#?[0-9A-F]{3}$)/i; // Regex to check if the input is a valid hex code.
    return Object.keys(Colors).includes(this.capitalizeString(strColor)) || RegExp.test(strColor);
  },
  capitalizeString: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
};