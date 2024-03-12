import { SlashCommandBuilder, CommandInteraction } from "discord.js";
export declare const TodaySchedule: {
    data: SlashCommandBuilder;
    execute(interaction: CommandInteraction): Promise<void>;
};
