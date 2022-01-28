module.exports = async(client, con, message) => {

    if (!message.author) return;
    if (message.author.bot) return;
    if(message.channel.type === 'DM') {
        return;
    }

    if(message.mentions.users.first()) {
        if(message.mentions.users.first().id === client.user.id) {
            let embed = new client.discord.MessageEmbed()
            .setColor(client.config.colorhex)
            .setDescription(`My prefix is \`${client.config.prefix}\`\n[Invite Me](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`)
            await message.channel.send({ embeds: [embed] }).catch(e => {});
        }
    }

    if (message.content.startsWith(client.config.prefix)) {
        const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
        let command = args.shift().toLowerCase();
        const cmd = await client.commands.get(command)
        if (cmd) {
            try {
                await cmd.run(client, message, args, con);
                if(client.config.deleteCommands) {
                    message.delete().catch(e => {});
                }
            } catch(e) {
                return client.utils.error(client, e);
            }
        }
    }

}
