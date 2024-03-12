import { GatewayIntentBits, Client,} from 'discord.js';
import { Schedule } from './src/main/schedule';
import {DiscordConfig} from './src/discord-config/dc-config';
import { CreateMessage } from './src/main/functions';
require('dotenv').config();



const client = new Client({ intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });
const mySchedule = new Schedule();
client.on("ready", msg => {
  client.user?.setActivity("Pracujemy....")
});

client.on("messageCreate", async msg => {
  if(msg.content.charAt(0) !== DiscordConfig.CommandSign) return;
  
  let messageArray = msg.content.split(" ");
  let cmd = messageArray[0]; 
  let args = messageArray.slice(1)
  

  
  if(msg.content === DiscordConfig.CommandSign + "today") {
    mySchedule.TodayPlan().then((data) => CreateMessage(data[0], data[1])).then(fullmessage => msg.reply(fullmessage));
    
  }

  if(msg.content === DiscordConfig.CommandSign + "tomorrow") {
    mySchedule.TomorowPlan().then((data) => CreateMessage(data[0], data[1])).then(fullmessage => msg.reply(fullmessage));
  }
  if(cmd === DiscordConfig.CommandSign + "plan")  {
    mySchedule.GetPlanforDate(parseInt(args[0]), parseInt(args[1])).then((data) => CreateMessage(data[0], data[1])).then(fullmessage => msg.reply(fullmessage));
  }
});

client.login(process.env.DISCORD_TOKEN as string);
