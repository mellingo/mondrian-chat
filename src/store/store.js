import Vue from "vue";
import Vuex from "vuex";
import {cloneDeep} from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userLogin: "",
        messages: [],
        colors: [],
        positionParams: [],
        rowNumber: 1
    },
    mutations: {
        updateUserLogin(state, value){
            state.userLogin = value;
        },
        updateMessages(state, value){
            state.messages.push(value);
        },
        updateColors(state, color){
            state.colors.push(color);
        },
        updatePositionParams(state, params){
            if (params.width + params.startPos > 6) {
                state.positionParams[state.positionParams.length-1].width = 6 - state.positionParams[state.positionParams.length-1].startPos;
                params = {width: params.width, startPos: 1};
                state.rowNumber += 1;
            }
            params.rowNumber = state.rowNumber;
            state.positionParams.push(params);
        }
    },
    actions: {

    }
});