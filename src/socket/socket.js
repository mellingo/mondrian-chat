import io from "socket.io-client";
const socket = io();
import store from "./../store/store";

socket.on('connect', () => {
    store.commit('updateSocketId', socket.io.engine.id);
});

socket.on('user joined', (data) => {
    store.commit("updatePeople", data.userlist);
});

socket.on('new message', (value) => {
    store.commit("updateMessages", value);
});

socket.on('user left', (data) => {
   store.commit("updatePeople", data.userlist);
});


export default {
    socket: socket,
    connect: (username) => {
        socket.emit('add user', username);
    },
    sendMessage: (message) => {
        socket.emit('new message', message);
    }
}

