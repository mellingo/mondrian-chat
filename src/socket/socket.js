import io from "socket.io-client";
const socket = io("https://socket-io-chat.now.sh/");
import store from "./../store/store";

socket.on('connect', () => {
    console.log('connect');
});

socket.on("user joined", () => {
    console.log("New user");
});

socket.on("new message", (value) => {
    console.log(value);
    store.commit("updateMessages", value);
});


export default {
    socket: socket,
    connect: (username) => {
        socket.emit('user joined', username);
    },
    sendMessage: (message) => {
        socket.emit('new message', message);
    }
}

