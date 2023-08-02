import { Interaction } from 'discord.js';
import { commandList } from '../command-list';

export const onInteraction = async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  for (const Command of commandList) {
    if (interaction.commandName === Command.data.name) {
      await Command.run(interaction);
      break;
    }
  }
};
