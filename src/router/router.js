import Vue from "vue";
import Router from "vue-router";
import {isNil, isEmpty} from "lodash";

Vue.use(Router);

import App from "./../App.vue";
import Chat from "./../components/views/Chat.vue";
import Main from "./../components/views/Main.vue";
import Login from "./../components/views/Login.vue";
import store from "./../store/store.js";

export default new Router({
    mode: "history",
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            redirect: "app",
            component: Main,
            children: [
                {
                  path: 'app',
                  components: {
                      main: Chat
                  },
                  meta: {
                      auth: true
                  },
                  beforeEnter: (to, from, next) => {
                    if (to.meta.auth && !isNil(store.state.userLogin) && !isEmpty(store.state.userLogin)) {
                        return next();
                    }
                    //next('login');
                    return next();
                  }
                },
                {
                    path: 'login',
                    components: {
                        main: Login
                    }
                }
            ]
        }
    ],
    beforeEach(){

    }
});
