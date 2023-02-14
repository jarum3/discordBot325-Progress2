
const { ActionRowBuilder, Events, StringSelectMenuBuilder } = require('discord.js');

// Reaction Roles Handling

if(interaction.isSelectMenu()) {
    if(interaction.customID !== 'reaction-roles') return;
    await interaction.deferReply({ ephemeral: true})

    const roleID = interaction.values[0];
    const role = interaction.guild.roles.cache.get(roleID);
    const memberRoles = interaction.member.roles;

    const hasRole = memberRoles.cache.has(roleID);

    if (hasRole) {
        memberRoles.remove(roleID);
        interaction.followUp(`${role.name} has been removed.`);
    }
    else {
        memberRoles.add(roleID);
        interaction.followUp(`${role.name} has been added.`);
    }
}