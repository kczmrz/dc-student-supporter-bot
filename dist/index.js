"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const schedule_1 = require("./src/main/schedule");
const dc_config_1 = require("./src/discord-config/dc-config");
const functions_1 = require("./src/main/functions");
require('dotenv').config();
const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.MessageContent] });
const mySchedule = new schedule_1.Schedule();
client.on("ready", msg => {
    client.user?.setActivity("Pracujemy....");
});
client.on("messageCreate", async (msg) => {
    if (msg.content.charAt(0) !== dc_config_1.DiscordConfig.CommandSign)
        return;
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (msg.content === dc_config_1.DiscordConfig.CommandSign + "today") {
        mySchedule.TodayPlan().then((data) => (0, functions_1.CreateMessage)(data[0], data[1])).then(fullmessage => msg.reply(fullmessage));
    }
    if (msg.content === dc_config_1.DiscordConfig.CommandSign + "tomorrow") {
        mySchedule.TomorowPlan().then((data) => (0, functions_1.CreateMessage)(data[0], data[1])).then(fullmessage => msg.reply(fullmessage));
    }
    if (cmd === dc_config_1.DiscordConfig.CommandSign + "plan") {
        mySchedule.GetPlanforDate(parseInt(args[0]), parseInt(args[1])).then((data) => (0, functions_1.CreateMessage)(data[0], data[1])).then(fullmessage => msg.reply(fullmessage));
    }
});
client.login(process.env.DISCORD_TOKEN);
