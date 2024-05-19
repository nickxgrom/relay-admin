<script setup>
import ChatCard from "./ChatCard.vue"
import {reactive, ref} from "vue"

const chatListPort = import.meta.env.VITE_CHAT_LIST_PORT

const relayToken = ref("")

function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length >= 2) return parts.pop().split(";").shift()
}

relayToken.value = getCookie("relay-token")

const chatList = reactive(new Map())

// Establish a connection to the WebSocket.
const socket = new WebSocket(`ws://localhost:${chatListPort}?relay-token=${relayToken.value}`)

// Connection opened
socket.addEventListener("open", (event) => {
    console.log("WebSocket is open now.", event)
})

// Listen for messages
socket.addEventListener("message", (event) => {
    const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data
    if (data != null) {
        data.forEach((item) => {
            const unreadCount = chatList.has(item.key) ? chatList.get(item.key).unreadCount + 1 : 0
            chatList.delete(item.key)
            chatList.set(item.key, { lastMessage: item.lastMessage, unreadCount })
        })
    }
})

// Connection closed
socket.addEventListener("close", (event) => {
    console.log("WebSocket is closed now.")
})

// Connection error
socket.addEventListener("error", (event) => {
    console.log("WebSocket error: ", event)
})
</script>

<template>
    <div class="chat-list">
        <div
            v-if="chatList.size"
        >
            <ChatCard
                v-for="([key, chat], i) in chatList.entries()"
                :key="key"
                :chat-id="key"
                :title="`Клиент ${i + 1}`"
                :message="chat.lastMessage?.text"
                :unread-count="chat.unreadCount"
                :time="new Date(chat.lastMessage?.createdAt).toLocaleTimeString()"
            />
        </div>
        <div v-else>
            Пока нет активных чатов
        </div>
    </div>
</template>

<style scoped>
.chat-list {
    @apply w-1/5 h-full border border-r-gray-400;
}
</style>