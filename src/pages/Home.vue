<script setup>
import ChatList from "../components/ChatList.vue"
</script>

<template>
    <div class="wrapper">
        <ChatList />

        <!--        <CurrentChat />-->
    </div>
</template>

<style scoped>
.wrapper {
    @apply flex justify-between;

    height: calc(100vh - 48px);
}
</style>