import { Client, IntentsBitField } from 'discord.js';
import { onInteraction } from './events/on-interaction';

const greetings = [
  'Hello',
  'Bonjour',
  'Hola',
  'Guten tag',
  'Hej',
  'Salve',
  'Nǐ Hǎo',
  'Xin chào',
  'Hei',
  'Ahoj',
];

(async () => {
  const BOT = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });

  BOT.on('ready', () => console.log('Connected to Discord!'));

  BOT.on(
    'interactionCreate',
    async (interaction) => await onInteraction(interaction),
  );

  BOT.on('messageCreate', async (message) => {
    if (message.author.bot) {
      return;
    }

    if (message.content === 'hi') {
      const greeting_id = Math.floor(Math.random() * greetings.length);

      await message.reply(`${greetings[greeting_id]} ${message.author.tag}`);
    }

    if (/\b(?:[Cc][Uu][Rr][Rr][Yy])\b/.test(message.content)) {
      await message.reply(`Don't be mean to Gran, ${message.author.username}!`);
    }
  });

  await BOT.login(process.env.DISCORD_BOT_TOKEN);
})();
