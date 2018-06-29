const express = require('express');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');

app.use(history());

app.use(express.static(path.join(__dirname, 'dist')));

app.get("/", (req, res) => {
    res.render('dist/')
});

const server = app.listen(3000, function() {
    console.log('server running on port 3000');
});

const io = require('socket.io')(server);

let userlist = [];

io.on('connection', function(socket) {
    console.log(socket.id);

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