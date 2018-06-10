import io from "socket.io-client";

const socket = io({api: "https://socket-io-chat.now.sh/"});

socket.on("add user", () => {
    console.log("New user");
});

socket.on("new message", () => {
   console.log("New Message")
});

export default {
    connect: (username) => {
        socket.emit('user connected', username);
    },
    sendMessage: (message) => {
        socket.emit('new message', message);
    }
}

