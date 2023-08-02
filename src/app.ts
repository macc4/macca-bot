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

const ryanGoslingQuotes = [
  {
    quote:
      "There's a hundred-thousand streets in this city. You don't need to know the route. You give me a time and a place, I give you a five minute window. Anything happens in that five minutes and I'm yours. No matter what. Anything happens a minute either side of that and you're on your own. Do you understand?",
    origin: 'Drive',
  },
  {
    quote: "I don't have wheels on my car.",
    origin: 'Drive',
  },
  {
    quote:
      "If I drive for you, you get your money. You tell me where we start, where we're going, where we're going afterwards. I give you five minutes when we get there. Anything happens in that five minutes and I'm yours. No matter what. Anything a minute on either side of that and you're on your own. I don't sit in while you're running it down. I don't carry a gun. I drive.",
    origin: 'Drive',
  },
  {
    quote: 'My hands are a little dirty.',
    origin: 'Drive',
  },
  {
    quote: 'Hey, you want a toothpick?',
    origin: 'Drive',
  },
  {
    quote: 'I drive.',
    origin: 'Drive',
  },
  {
    quote:
      'I just wanted you to know, just getting to be around you, that was the best that ever happened to me.',
    origin: 'Drive',
  },
  {
    quote:
      'Sometimes I think that the one thing I love most about being an adult is the right to buy candy whenever and wherever I want.',
    origin: 'General',
  },
  {
    quote:
      "So it's not gonna be easy, it's gonna be really hard. And we're gonna have to work at this everyday, but I wanna do that because I want you. I want all of you, forever. You and me. Everyday.",
    origin: 'The Notebook',
  },
  {
    quote:
      "I wrote you 365 letters. I wrote you everyday for a year...it wasn't over, it still isn't over!",
    origin: 'The Notebook',
  },
  {
    quote: "If you're a bird, I'm a bird.",
    origin: 'The Notebook',
  },
  {
    quote:
      "I could be fun, if you want. I could be pensive, uh... smart, superstitious, brave? And I, uh, I can be light on my feet. I could be whatever you want. You just tell me what you want, and I'm gonna be that for you.",
    origin: 'The Notebook',
  },
  {
    quote: 'I want all of you, forever, you and me, every day.',
    origin: 'The Notebook',
  },
  {
    quote:
      "I'm letting life hit me until it gets tired. Then I'll hit back. It's a classic rope-a-dope.",
    origin: 'La Land Land',
  },
  {
    quote: "I'm always gonna love you, too.",
    origin: 'La Land Land',
  },
  {
    quote:
      "You're a barista? I can see how you can look down on me from all the way up there.",
    origin: 'La Land Land',
  },
  {
    quote: "What do you mean you don't like jazz?",
    origin: 'La Land Land',
  },
  {
    quote:
      "It's conflict and it's compromise, and it's just... it's new every time. It's brand new every night. It's very, very exciting!",
    origin: 'La Land Land',
  },
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

    if (
      /\b(?:[Rr][Yy][Aa][Nn]|[Gg][Oo][Ss][Ll][Ii][Nn][Gg])\b/.test(
        message.content,
      )
    ) {
      const greeting_id = Math.floor(Math.random() * ryanGoslingQuotes.length);
      const { quote, origin } = ryanGoslingQuotes[greeting_id];

      await message.reply(
        `"Random Ryan Gosling Quote: \n${quote}" - ${origin}`,
      );
    }
  });

  await BOT.login(process.env.DISCORD_BOT_TOKEN);
})();
