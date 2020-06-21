const Discord = require('discord.js');
const client = new Discord.Client();
const GUILDID = '683070380663242857'; // اي دي السيرفر  
const CHANNELID = '720383366326648912'; // اي دي الروم

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready',async () => {
  setInterval(() => {
client.channels.find(ch => ch.id === CHANNELID && ch.type === 'voice').join();
},1000); 
 voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if(!guildid) throw new Error('Syntax: voiceStay function requires guildid');
    if(!channelid) throw new Error('Syntax: voiceStay function requires channelid');

    let guild = client.guilds.get(guildid);
    let channel = guild.channels.get(channelid);

    if(channel.type === 'voice') {
      channel.join().catch(e => {
        console.log(`Failed To Join :: ${e.message}`);
      });
    } else {
      console.log(`Channel Type ::  ${channel.type}, It must be Voice.`);
    }
  }
});

client.login(process.env.TOKEN);
