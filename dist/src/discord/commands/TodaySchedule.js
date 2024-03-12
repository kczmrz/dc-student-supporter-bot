"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodaySchedule = void 0;
const discord_js_1 = require("discord.js");
exports.TodaySchedule = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
