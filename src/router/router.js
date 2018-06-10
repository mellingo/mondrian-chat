import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import App from "./../App.vue";
import Main from "./../components/views/Main.vue"

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Main,
        }
    ]
});
