import { REST, Routes } from 'discord.js';
import { commandList } from './command-list';

const { DISCORD_BOT_TOKEN, GUILD_ID, CLIENT_ID } = process.env;

if (!DISCORD_BOT_TOKEN || !GUILD_ID || !CLIENT_ID) {
  throw new Error();
}

const rest = new REST({ version: '10' }).setToken(DISCORD_BOT_TOKEN);

(async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commandList.map((command) => command.data),
    });
  } catch (error) {}
})();
