<script setup>
import {useRoute} from "vue-router"

const route = useRoute()
</script>

<template>
    {{route.params.chatId}}
</template>

<style scoped>

</style>