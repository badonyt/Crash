module.exports = {
    name: 'delete',
    description: "this is a delete command!",
    execute(message, args){
        

        const channeltar = message.mentions.channels.first() || message.channel;

        channeltar.delete()
        
        
    }
}