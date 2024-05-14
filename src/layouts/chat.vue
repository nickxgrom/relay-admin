<script setup>
import AppHeader from "../components/AppHeader.vue"
import {useUserStore} from "../store/user.js"

const userStore = useUserStore()
</script>

<template>
    <AppHeader/>
    <slot v-if="userStore.user.role"></slot>
</template>

<style scoped>

</style>