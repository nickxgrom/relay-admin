<script setup>
import ChatCard from "./ChatCard.vue"
</script>

<template>
    <div class="chat-list">
        <ChatCard
            v-for="i in 5"
            :key="i"
            :chat-id="i"
            :title="`Клиент ${i}`"
            message="lorem impsum dolor sit amet lorem ipsum dolor"
            :unread-count="5"
            :time="new Date()"
        />
    </div>
</template>

<style scoped>
.chat-list {
    @apply w-1/5 h-full border border-r-gray-400;
}
</style>