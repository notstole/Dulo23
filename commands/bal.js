const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Balans na Racunu`)
        .addField(`Korsnik`, `<@${userBalance.user}>`)
        .addField(`Balance`, `${userBalance.amount} 💸`)
        .addField(`Position`, userBalance.position)
        .setColor("#0000FF")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}