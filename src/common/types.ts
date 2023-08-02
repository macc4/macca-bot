import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export interface Command {
  data: Omit<SlashCommandBuilder, 'addSubcommandGroup' | 'addSubcommand'>;
  run: (interaction: CommandInteraction) => Promise<void>;
}
