<script setup>
import {useRouter} from "vue-router"

defineProps({
    chatId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
    time: {
        type: String,
    },
    unreadCount: {
        type: Number,
        default: 0
    }
})

const router = useRouter()

function openChat(chatId) {
    router.push(`/chat/${chatId}`)
}
</script>

<template>
    <div
        @click="openChat(chatId)"
        class="chat-card"
    >
        <div class="flex flex-col w-2/3">
            <div class="title">{{ title }}</div>
            <div class="message">{{ message }}</div>
        </div>
        <div class="flex flex-col items-center gap-1">
            <div
                v-if="unreadCount > 0"
                class="unread-message-count"
            >{{ unreadCount }}</div>
            <div class="time">{{ time }}</div>
        </div>
    </div>
</template>

<style scoped>
.chat-card {
    @apply flex justify-between items-center py-2 px-4 cursor-pointer hover:bg-gray-300 rounded select-none overflow-hidden;

    .title {
        @apply text-xl font-bold w-fit;
    }


    .message {
        @apply whitespace-nowrap overflow-ellipsis overflow-hidden;
    }

    .unread-message-count {
        @apply text-white rounded-full bg-blue-500 w-fit py-1 px-2 text-xs;
    }

    .time {
        @apply text-xs text-center;
    }
}
</style>