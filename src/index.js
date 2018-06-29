import Vue from 'vue'
import router from './router/router'
import store from './store/store'
import socket from './socket/socket'

store.subscribe((mutation) => {
    if (mutation.type === "updateUserLogin") {
        socket.connect(mutation.payload);
        router.push('app');
    } else if (mutation.type === "messageSend") {
        socket.sendMessage(mutation.payload);
    }
});

new Vue({
    el: "router-view",
    store,
    router,
    socket
});