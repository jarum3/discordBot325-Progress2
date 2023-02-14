const { Events } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName); // Set command equal to the object in the command file.
      if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`); // Print out an error if no command was found
        return;
      }
      try {
        await command.execute(interaction); // Run the execute block of the command
      }
      catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
    if (interaction.isStringSelectMenu()) {
      if (interaction.customId === 'reaction-roles') {
        // TODO: Insert code for handling role joining
        const selected = interaction.values.join(',');
        const userReply = `The user has selected ${selected}`;
        await interaction.reply({ content: userReply, ephemeral: true });

        // Sample code for possibly handling single-selection menus
        // await interaction.deferReply({ ephemeral: true})

        // const roleID = interaction.values[0];
        // const role = interaction.guild.roles.cache.get(roleID);
        // const memberRoles = interaction.member.roles;
        // const hasRole = memberRoles.cache.has(roleID);
        // if (hasRole) {
        //    memberRoles.remove(roleID);
        //    interaction.followUp(`${role.name} has been removed.`);
        // }
        // else {
        //     memberRoles.add(roleID);
        //     interaction.followUp(`${role.name} has been added.`);
        // }
      }
    }
  },
};