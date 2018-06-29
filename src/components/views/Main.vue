<script>
    import Vue from "vue";
    import Component from "vue-class-component";
    import ListUserLogo from "static/list_user.svg";

    @Component({})
    export default class Main extends Vue {

        ListUserLogo = ListUserLogo;
        width = null;

        setWidth(){
            this.width = this.$refs.peopleBlock? window.getComputedStyle(this.$refs.peopleBlock, null).width:null;
        }

        mounted(){
            this.$nextTick(() => {
                this.setWidth();
                window.addEventListener('resize', this.setWidth);
            })
        }

        get login(){
            return this.$store.state.userLogin;
        }

        beforeDestroy() {
            window.removeEventListener('resize', this.setWidth)
        }

        open = false;

        toggleOpen(){
            if (this.login) {
                this.open = !this.open;
            }
        }
    }
</script>

<template>
    <main>
        <div class="left-up" :class="{'blue': !login}"></div>
        <div class="middle-up"></div>
        <div class="right-up"></div>
        <div class="middle">
            <div class="people" :class="{'open':open}" :style="{backgroundColor: login? 'black':'white', transition: 'all .5s'}" ref="peopleBlock">
                <img class="people-logo" @click="toggleOpen" v-bind:src="ListUserLogo" :class="{'open':open}" v-if="login">
                <ul class="people-list" :class="{'open':open}" :style="{marginTop: width}">
                    JESUISTRESTRESTRESTRESTRESLONG
                    <li v-for="user in $store.state.people">{{ user }}</li>
                </ul>
            </div>
            <div class="chat-wrapper">
                <router-view  name="main"></router-view>
            </div>
            <div class="deco" :class="{'blue': !login}">

            </div>
        </div>
        <div class="left-down"></div>
        <div class="middle-down"></div>
        <div class="right-down"></div>
    </main>
</template>

<style lang="scss" scoped>
    @import "theme/colors.scss";
    main {
        display: grid;
        grid-template-columns: calc(5% - 20px) auto calc(5% - 20px);
        grid-template-rows: calc(5vw - 20px) auto calc(5vw - 20px);
        grid-gap: 5px;
        background-color: black;
        width: 100vw;
        height: 100vh;
    }
    .chat-wrapper {
        position: relative;
        width: calc(100% - 2*(5% - 15px));
    }
    .deco {
        min-width: calc(5% - 20px);
        border-left: solid 5px black;
    }
    div {
        background-color: white;
    }
    .people {
        width: calc(5% - 20px);
        border-right: solid 5px black;
        min-width: 20px;
        height: 100%;
        color: white;
        transition: all .5s;
        position: relative;

        &.open {
            width: 20%;
            min-width: 20%;
            transition: all .5s;
        }

        &-logo {
            position: absolute;
            right: 0;
            width: calc(5vw - 20px);
            min-width: 20px;
        }

        &-list {
            position: absolute;
            transform: translateX(-100%);
            transition: all .5s;
            padding: 0 20px;
            list-style-type: none;

            &.open {
                transform: translateX(0);
                transition: all .5s;
                overflow-y: scroll;
            }
        }
    }
    .left-up {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 1;
    }
    .right-up {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 1;
    }
    .left-down {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 3;
        grid-row-end: 3;
    }
    .right-down {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 3;
    }
    .middle-down {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 3;
    }
    .middle-up {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 1;
    }
    .middle {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 2;
        display: flex;
    }
    .blue {
        background-color: $xindi-chat-blue;
    }
</style>