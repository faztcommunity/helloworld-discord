import { GatewayIntentBits, Client } from "discord.js";
import { token } from './data.json' assert { type: "json" }

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
})

client.on('interactionCreate', interaction => {
  if (!interaction.isChatInputCommand()) return;
  interaction.reply("hello world")
})

client.login(token)