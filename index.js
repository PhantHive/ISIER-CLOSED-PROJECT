const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

//const TOKEN = process.env.TOKEN;

client.login('NjIwNjc4MzQ1MzY0ODY1MDUx.XXaXIg._nEozuswYnld1yto3Q4gpKtqetM');
client.commands = new Discord.Collection();

fs.readdir("./Commands/", (err, f) => {
  if (err) console.log(err);

  let commands = f.filter(f => f.split(".").pop() === "js");
  if (commands.length <= 0) return console.log("0 commands");

  commands.forEach((f) => {
      let command = require(`./Commands/${f}`);
      console.log(`${f} command done successfully`);

  client.commands.set(command.help.name, command);
  });
});

fs.readdir("./Events/", (err, f) => {
    if (err) console.log(err);
    console.log(`${f.length} events loading`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];
    client.on(event, events.bind(null, client));
    });
});

//join user
client.on('guildMemberAdd', member => {
    //JOIN SERVER
    let embed = new Discord.RichEmbed()
        .setDescription('\nHELLO! bienvenue Ipsalien' + member.user + '\n check tes messages prives')
        .setFooter('Now we are ' + member.guild.memberCount + ' users')
        .setColor('F9841F')
        .setThumbnail('https://imgur.com/oamlctq.png')
        .setTitle('IPSA')
    member.guild.channels.get('502931781012684820').send(embed).then(
        member.createDM().then(
            channel => {
                channel.send(
                    `Salutation Ipsalien et bienvenue sur le discord  ***${member.guild.name}*** 😉\n` +
                    '\n' +
                    'Premiere chose a faire vas sur ce channel---> <#611829909332951055> \n' +
                    '                               Puis choisis ta classe et tes assos ici---> <#611653257806217244>  \n' +
                    '\n' +
                    '                                                 ●¸.•*¨Ƹ̵̡Ӝ̵̨̄Ʒ¨*•.¸●\n');


            }).catch(console.error)
    )
});