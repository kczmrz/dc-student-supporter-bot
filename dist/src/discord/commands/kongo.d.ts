import { CommandInteraction, SlashCommandBuilder } from "discord.js";
export declare const data: SlashCommandBuilder;
export declare function execute(interaction: CommandInteraction): Promise<import("discord.js").InteractionResponse<boolean>>;
