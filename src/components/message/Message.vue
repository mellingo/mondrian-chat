<script>
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        props: ["message", "bgColor"]
    })
    export default class Message extends Vue {

    }
</script>

<template>
    <div class="message" :style="{backgroundColor: bgColor, color: (bgColor === 'blue' || bgColor === 'red')? 'white':'black'}">
        {{ message.username }} dit:
        <span>{{ message.message }}</span>
    </div>
</template>

<style lang="scss" scoped>
    .message {
        padding: 5px;
        border: 5px solid black;
        border-collapse: collapse;
        max-width: 100%;
    }
    span {
        word-wrap: break-word;
    }
</style>