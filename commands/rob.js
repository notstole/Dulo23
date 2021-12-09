exports.execute = async (client, message, args) => {
    let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
    if(!target) return message.reply("Who are you trying to rob?")
    let messages = [
      `You tripped while trying to rob ${target} and got caught!`,
      `Getting sneaky eh? ${target} !`,
      `Nisi Uspeo Rob Evo ti kurcinu ${target}`
    ]
     let amount = Math.floor(Math.random() * 50) + 10;
      let rob = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
      if (rob.onCooldown) return message.reply(`Vec si uradio pljacku ${rob.time.seconds} .`);
      if (rob.lost) return message.channel.send(messages[Math.floor(Math.random() * messages.length)]);
      else { 
        let x = client.eco.fetchMoney(target.id).amount - amount 
        
        client.eco.setMoney(target.id,parseInt(x))
        message.reply(`Uspesno si opljackao ${target} for **${rob.amount}** 💸. Sada Imas **${rob.after}** 💸.`);
      }
  };
  
 