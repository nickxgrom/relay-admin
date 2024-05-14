<script setup>
import ChatCard from "./ChatCard.vue"
import {ref} from "vue"

const chatListPort = import.meta.env.VITE_CHAT_LIST_PORT

const relayToken = ref("")

function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length >= 2) return parts.pop().split(";").shift()
}

relayToken.value = getCookie("relay-token")

const chatList = ref([])

// Establish a connection to the WebSocket.
const socket = new WebSocket(`ws://localhost:${chatListPort}?relay-token=${relayToken.value}`)

// Connection opened
socket.addEventListener("open", (event) => {
    console.log("WebSocket is open now.", event)
})

// Listen for messages
socket.addEventListener("message", (event) => {
    console.log(event.data)
    const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data
    if (data != null) {
        chatList.value.push(...data)
        console.log(chatList.value)
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
        <ChatCard
            v-for="chat in chatList"
            :key="chat.key"
            :chat-id="chat.key"
            :title="`Клиент ${chat.key}`"
            :message="chat.lastMessage?.text"
            :unread-count="5"
            :time="new Date(chat.lastMessage?.createdAt).toLocaleTimeString()"
        />
    </div>
</template>

<style scoped>
.chat-list {
    @apply w-1/5 h-full border border-r-gray-400;
}
</style>