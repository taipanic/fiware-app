const express = require('express');
const app = express();

const http = require('http').createServer(app);
var io = require('socket.io')(http);



app.post('/subscription/temp-change', (req, res) => {
    
    res.send('Hello');
});

app.get('/', (req, res) => {
    res.send('Hello');
});

io.on('connection', (socket) => {
    console.log('Client connected');
    interval = setInterval(() => getApiAndEmit(socket), 1000);

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
});

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
  };

const port = process.env.PORT || 3000;
http.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});
