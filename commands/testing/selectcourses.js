const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

//list iteration would need to be done outside of function, .addOptions
for(element in getListFromFile()){
            
}

// Creates a short, hard-coded example of a select menu. Template for other commands.
module.exports = {
  data: new SlashCommandBuilder()
    .setName('selectcourses')
    .setDescription('Select the courses you are enrolled in'),
  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(new StringSelectMenuBuilder()
      .setCustomId('Select')
      .setPlaceholder('Nothing selected')
      .setMinValues(1)
      .setMaxValues(2)
      .addOptions([
        
        //itarate through the file to gain every course and info about that course
        //{
        //    label: 'course name'
        //    description: 'description of course'
        //    value: 'course name'
        //},
       
        

        

      ]));
    await interaction.reply({ content: 'Select menu example', components: [row] });
  },
};