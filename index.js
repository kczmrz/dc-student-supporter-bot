"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_1 = require("./src/discord/config");
const index_1 = require("././src/discord/commands/index");
const deploy_commands_1 = require("./src/discord/deploy-commands");
const client = new discord_js_1.Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});
client.once("ready", () => {
    console.log("Discord bot is ready! 🤖");
});
client.on("guildCreate", async (guild) => {
    await (0, deploy_commands_1.deployCommands)({ guildId: guild.id });
});
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName } = interaction;
    if (index_1.commands[commandName]) {
        index_1.commands[commandName].execute(interaction);
    }
});
client.login(config_1.config.DISCORD_TOKEN);
