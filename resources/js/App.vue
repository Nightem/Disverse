<template>
    <navbar/>
    <router-view></router-view>
</template>

<script>
import navbar from "./views/appComponents/navbar.vue";
export default {
    name: "app",
    components: {navbar},
}
</script>
