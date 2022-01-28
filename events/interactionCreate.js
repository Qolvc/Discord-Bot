module.exports = async(client, con, interaction) => {

    try {

        let edited = new client.discord.MessageEmbed()
        .setColor(client.config.colorhex)
        .setTitle(`${client.user.username} Help Menu`)
        .setThumbnail(client.user.avatarURL({ dynamic: true }))

        let row = new client.discord.MessageActionRow()
        .addComponents(
            new client.discord.MessageButton()
            .setCustomId('helpPageLeft')
            .setLabel(`Back`)
            .setStyle(`PRIMARY`),
        )
        .addComponents(
            new client.discord.MessageButton()
            .setCustomId('helpPageRight')
            .setLabel(`Next`)
            .setStyle(`PRIMARY`),
        )

        let page2 = "`ping` - Check latency.\n`help` - Gets you this menu.\n`credits` - View the bots credits.";
        let page3 = `**Creators:**\n[@Hyperz](https://github.com/itz-hyperz) - *Physical Programming.*\n[@Qolvc](https://github.com/qolvc) - *Physical Programming.*\n[@Whobejoe](https://github.com/Whobejoe) - *Physical Programming.*`;

        if (!interaction.isButton()) return;
        let message = interaction.message
        if (interaction.customId === 'helpPageLeft') {

            // CODE FOR GOING BACK PAGES

            if(message.embeds) {
                message.embeds.forEach(embed => {
                    if(embed.footer.text.includes('Page 1/3')) {
                        edited.fields = null;
                        edited.setDescription(page3);
                        edited.setFooter(`Page 3/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    } else if(embed.footer.text.includes('Page 3/3')) {
                        edited.fields = null;
                        edited.setDescription(page2);
                        edited.setFooter(`Page 2/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    } else if(embed.footer.text.includes('Page 2/3')) {
                        edited.setDescription(``);
                        edited.addFields(
                            { name: "Bot Name", value: `\`${client.user.username}\``, inline: true, },
                            { name: "Bot Prefix", value: `\`${client.config.prefix}\``, inline: true, },
                            { name: "About Server", value: `${client.config.aboutServer}`, inline: false, },
                            { name: "Copyright", value: `${client.config.copyright}`, inline: false, },
                        )
                        edited.setFooter(`Page 1/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    }
                });
            }
        } else if (interaction.customId === 'helpPageRight') {

            // CODE FOR GOING FORWARD PAGES

            if(message.embeds) {
                message.embeds.forEach(embed => {
                    if(embed.footer.text.includes('Page 1/3')) {
                        edited.fields = null;
                        edited.setDescription(page2);
                        edited.setFooter(`Page 2/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    } else if(embed.footer.text.includes('Page 2/3')) {
                        edited.fields = null;
                        edited.setDescription(page3);
                        edited.setFooter(`Page 3/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    } else if(embed.footer.text.includes('Page 3/3')) {
                        edited.setDescription(``);
                        edited.addFields(
                            { name: "Bot Name", value: `\`${client.user.username}\``, inline: true, },
                            { name: "Bot Prefix", value: `\`${client.config.prefix}\``, inline: true, },
                            { name: "About Server", value: `${client.config.aboutServer}`, inline: false, },
                            { name: "Copyright", value: `${client.config.copyright}`, inline: false, },
                        )
                        edited.setFooter(`Page 1/3`)
                        message.edit({ embeds: [edited], components: [row] }).catch(e => {})
                        interaction.deferUpdate();
                    }
                });
            }
        }
    } catch(e) {}

}
