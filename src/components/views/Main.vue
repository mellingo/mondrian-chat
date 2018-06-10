<script>
    import Vue from "vue";
    import Component from "vue-class-component";
    import Login from "./Login.vue";

    @Component({
        components: {
            "login": Login
        }
    })
    export default class Main extends Vue {

    }
</script>

<template>
    <main>
        <div class="left-up"></div>
        <div class="middle-up"></div>
        <div class="right-up"></div>
        <div class="left-middle"></div>
        <div class="middle">
            <login/>
        </div>
        <div class="right-middle"></div>
        <div class="left-down"></div>
        <div class="middle-down"></div>
        <div class="right-down"></div>
    </main>
</template>

<style lang="scss" scoped>
    main {
        display: grid;
        grid-template-columns: calc(5% - 20px) auto calc(5% - 20px);
        grid-template-rows: calc(5vw - 20px) auto calc(5vw - 20px);
        grid-template-areas:
        "left-up middle-up right-up"
        "left-middle middle right-middle"
        "left-down middle-down right-down";
        grid-gap: 5px;
        background-color: black;
        width: 100vw;
        height: 100vh;
    }
    div {
        background-color: white;
    }
    .left-up {
        grid-area: left-up;
    }
    .right-up {
        grid-area: right-up;
    }
    .left-down {
        grid-area: left-down;
    }
    .right-down {
        grid-area: right-down;
    }
    .left-middle {
        grid-area: left-middle;
    }
    .right-middle {
        grid-area: right-middle;
    }
    .middle-down {
        grid-area: middle-down;
    }
    .middle-up {
        grid-area: middle-up;
    }
    .middle {
        grid-area: middle;
    }
</style>