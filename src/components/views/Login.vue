<script>
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({})
    export default class Login extends Vue {
    }
</script>

<template>
    <div class="login">
        <div class="title">
            <h1>Essential chat</h1>
        </div>
        <div class="right-middle"></div>
        <div class="left-middle"></div>
        <div class="middle">
            <div class="middle_content">
                <p>Bonjour</p>
                <input type="text" placeholder="...tape ton nom ici">
            </div>
        </div>
        <div class="left-down"></div>
        <button class="button">
            <p>Log in</p>
        </button>
    </div>
</template>

<style lang="scss" scoped>
    @import "./../../theme/colors";

    .login {
        display: grid;
        width: 100%;
        height: 100%;
        background-color: black;
        grid-gap: 5px;
        grid-template-columns: calc(20% - 5px) auto calc(20% - 5px);
        grid-template-rows: calc(15% - 5px) auto calc(50% - 5px);
        grid-template-areas:
                "title title right-middle"
                "left-middle middle right-middle"
                "left-middle middle right-middle"
                "left-down button button";
    }
    div {
        background-color: white;
    }
    .title {
        grid-area: title;
        background-color: $xindi-chat-red;
        padding: 10px;
        color: white;
    }
    .left-middle {
        grid-area: left-middle;
        background-color: $xindi-chat-yellow;
    }
    .right-middle {
        grid-area: right-middle;
    }
    .left-down {
        grid-area: left-down;
    }
    .button {
        grid-area: button;
        background-color: black;
        color: white;
        border: none;
        font-size: 2em;

        &:focus {
            border: solid 1px white;
        }
    }
    .middle {
        grid-area: middle;
        display: flex;
        justify-content: center;
        align-items: center;

        &_content {
            width: 50%;
            height: 50%;
            font-size: 2em;

            input {
                font-size: 1em;
                border: none;
                padding-bottom: 10px;

                &:focus {
                    outline: 0;
                    border-bottom: solid 1px black;
                }
            }
        }
    }
</style>