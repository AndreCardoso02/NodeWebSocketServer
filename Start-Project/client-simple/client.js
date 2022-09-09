
const webSocketClient = require('ws');

// const address = 'ws://localhost:5000';
const address = 'wss://metal-gossamer-dance.glitch.me/'

const wsServer = new webSocketClient(address, {
    headers: {
        "User-Agent": "Mozilla"
    }
});

wsServer.on('open', function() {
    wsServer.send('Olá servidor');
});

wsServer.on('message', function(message) {
    console.log("> mensagem recebida do servidor: " + message);
});