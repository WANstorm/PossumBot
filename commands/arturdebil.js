const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {

    function stuff() {

        message.channel.send("asd");

    }

    try {

        message.guild.members.cache.each(member => {

            setInterval(stuff, 3000);

        });

    } catch(e) {

        console.log(e.stack);

    }
        
}

module.exports.help = {

    name: "arturdebil",
    desc: "Bans everyone."

}
