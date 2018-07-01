const express = require('express');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 3000;

app.use(history());

app.use(express.static(path.join(__dirname, 'dist')));

app.get("/", (req, res) => {
    res.render('dist/')
});

const server = app.listen(port, function() {
    console.log('server running on port'+ port);
});

const io = require('socket.io')(server);

let userlist = [];

io.on('connection', function(socket) {

    socket.on('add user', (username) => {
        userlist.push(username);
        socket.username = username;
        socket.emit('login', {userlist});
        socket.broadcast.emit('user joined', {username, userlist})
    });

    socket.on('disconnect', () => {
        userlist.splice(userlist.indexOf(socket.username), 1);
        socket.broadcast.emit('user left', {
            username: socket.username,
            userlist
        })
    });

    socket.on('new message', (data) => {
       socket.broadcast.emit('new message', {
           username: socket.username,
           message: data
       })
    });
});