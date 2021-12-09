module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Vec si uradio posao vrati se kasnije ${work.time.minutes} ${work.time.seconds} `);
    else return message.reply(`Radio si posao **${work.workedAs}** i dobio si **${work.amount}** 💸. Sada imas **${work.after}** 💸.`);
};