<script>
    import Vue from "vue";
    import Component from "vue-class-component";
    import Message from "./../message/Message.vue";

    @Component({
        components: {
            "v-message": Message
        }
    })
    export default class Chat extends Vue {
        colors = ['blue', 'red', 'yellow', 'white', 'white', 'white'];
        innerModel = null;

        mounted(){
            console.log("hello");
        }

        get messages(){
            return this.$store.state.messages;
        }

        randomColor(index){
           if (this.$store.state.colors.length < index+1) {
               let color = this.colors[Math.round(Math.random()*this.colors.length)];
               if (index > 0 && this.$store.state.colors[index-1] !== 'white'){
                   color = 'white';
               }
               this.$store.commit("updateColors", color);
           }
           return this.$store.state.colors[index];
        }

        isTitle(message){
            return message.message.match(/!/);
        }

        sendMessage(){
            this.$store.dispatch('sendMessage', this.innerModel).then(
                () => {this.innerModel = ""}
            );
        }

        generateParams(index, message){
            if (this.$store.state.positionParams.length < index+1) {
                let width = Math.round(Math.random()*4+1);
                let startPos = 1;
                if (index > 0){
                    startPos = this.$store.state.positionParams[index-1].startPos + this.$store.state.positionParams[index-1].width;
                    if (width > 6 - startPos){
                        width = Math.round(Math.random()*(5 - startPos)+1);
                    }
                }
                if (message.message.length >= 400 || message.message.length >= 200 && this.isTitle(message)) {
                    width = 5;
                }
                this.$store.commit("updatePositionParams", {width, startPos});
            }
            let value = {
                gridColumnStart: this.$store.state.positionParams[index].startPos,
                gridColumnEnd: this.$store.state.positionParams[index].startPos + this.$store.state.positionParams[index].width,
                gridRowStart: this.$store.state.positionParams[index].rowNumber,
                gridRowEnd: this.$store.state.positionParams[index].rowNumber,
                minHeight: "100px"
            };
            return value;
        }
    }
</script>

<template>
    <div class="chat">
        <div class="chat_content">
            <div class="chat_messages">
                <v-message v-for="(message, index) in messages" :message="message" :key="index"
                           :bgColor="randomColor(index)" :class="[{title: isTitle(message)}, randomColor(index)]" :style="generateParams(index, message)">
                </v-message>
            </div>
        </div>
        <div class="chat_bottom">
            <input class="chat_input" v-model="innerModel" type="text" placeholder="Tape ton message ici..." @keyup.enter="sendMessage"/>
            <button class="chat_send" @click="sendMessage">Send</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Righteous');
    @import "theme/colors.scss";

    .chat {
        width: 100%;
        height: 100%;
        max-height: 100%;
        position: relative;

        &_messages {
            display: grid;
            position: absolute;
            width: 100%;
            max-height: 100%;
            overflow-y: scroll;
        }

        &_content {
            width: 100%;
            height: 100%;
            max-height: 100%;
        }

        &_bottom {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-areas:
                    "input input input input input input button";
            position: absolute;
            bottom: 0;
            width: 100%;
            border-top: solid 5px black;
        }

        &_input {
            padding: 10px 5%;
            border: none;
            font-size: 1.2em;
            grid-area: input;
        }

        &_send {
            background-color: black;
            color: white;
            text-transform: uppercase;
            border: none;
            padding: 10px 5%;
            font-size: 1.2em;
            grid-area: button;
        }
    }

    .red {
        background-color: $xindi-chat-red;
    }

    .blue {
        background-color: $xindi-chat-blue;
    }

    .yellow {
        background-color: $xindi-chat-yellow;
    }

    .white {
        background-color: white;
    }

    .title {
        font-weight: bold;
        font-family: Righteous, cursive;
        font-size: 36px;
    }
</style>