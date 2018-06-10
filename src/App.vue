<script>
    import Vue from "vue"
    import Component from "vue-class-component"
    import HelloComponent from "./components/HelloComponent.vue"

    @Component({
        components: {
            "hello-component": HelloComponent
        }
    })
    export default class App extends Vue {

    }
</script>

<template>
    <div>
        <hello-component name="World" />
    </div>
</template>
