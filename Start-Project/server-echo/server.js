
const WebSocket = require('ws');

const PORT = 5000;

// Criando um servidor webSocket
const wsServer = new WebSocket.Server({
    port: PORT
});

// Adicionando um ouvinte do evento connection
wsServer.on('connection', function(socket) {
    console.log("Cliente conectado!");

    socket.on('message', function(message) {
        console.log("Mensagem recebida do cliente: "+message);
        // socket.send("Receba de volta: " + message); - Reenvia a mensagem ao cliente
        
        // Simulando um chat - Broadcast message
        wsServer.clients.forEach(function (client) {
            client.send("Alguém enviou isso: "+message);
        });
    });
});

console.log((new Date()) + ' > Servidor iniciado na porta ' + PORT);