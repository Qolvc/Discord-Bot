exports.run = async (client, message, args, con) => {

    let embed = new client.discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor(client.config.colorhex)
    .setDescription(`**Creators:**\n[@Hyperz](https://github.com/itz-hyperz) - *Physical Programming.*\n[@Qolvc](https://github.com/qolvc) - *Physical Programming.*\n[@Whobejoe](https://github.com/Whobejoe) - *Physical Programming.*`)
    message.channel.send({ embeds: [embed] }).then((msg) => {
        if(client.config.deleteCommands) {
            setTimeout(() => {
                msg.delete().catch(e => {});
            }, 14000);
        }
    }).catch(e => {});

}

exports.info = {
    name: "credits",
    description: "View the credits for this bot!",
    aliases: ['creator', 'hyperz']
}
