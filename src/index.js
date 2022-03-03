module.exports = {
    execute: function (message, args) {
        message.channel.send(new Date(Date.now()))
    }
}
