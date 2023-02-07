import { SlashCommandBuilder, REST, Routes } from 'discord.js'
import { client, token } from './data.json' assert { type: "json" }

const ping = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with pong')

const rest = new REST({ version: '10' }).setToken(token)
const commands = [ ping.toJSON() ]

(async () => {
  try {
    await rest.put(Routes.applicationCommands(client), { body: commands })
    console.log("your command was submitted gracefully");
  } catch (error) {
    console.error(error)
  }
})()