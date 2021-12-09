exports.execute = async (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
    let authordata = client.eco.fetchMoney(message.author.id) 
    if (!member) return message.channel.send('Molim vas tagujte osobu kojoj zelite dati pare') 
    let amount = args[1]
    if (!amount || isNaN(amount)) return message.channel.send('Molim Vas unesiti validnu cifru') 
    if(authordata.amount < amount) return message.channel.send('Nemas dovoljno para u ruci/racunu') 
    await client.eco.transfer(message.author.id, member.id, amount) 
    return message.channel.send(`Uspesno si poslao pare 💸**${amount}** to ** ${member.user.tag}**.`)
  }