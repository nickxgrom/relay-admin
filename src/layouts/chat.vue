<script setup>
import AppHeader from "../components/AppHeader.vue"
import {useUserStore} from "../store/user.js"
import ChatList from "../components/ChatList.vue"

const userStore = useUserStore()
</script>

<template>
    <AppHeader/>
    <div class="chat-layout">
        <ChatList />
        <RouterView v-if="userStore.user.role"/>
    </div>
</template>

<style scoped>

.chat-layout {
    @apply flex;

    height: calc(100vh - 48px);
}
</style>