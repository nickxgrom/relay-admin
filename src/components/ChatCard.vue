<script setup>
defineProps({
    chatId: {
        type: Number,
        required: true
    },
    message: {
        type: String,
    },
    time: {
        type: String,
    }
})
</script>

<template>
    <div class="py-2 px-4">
        Клиент номер 1
        {{message}}
        {{time}}
    </div>
</template>

<style scoped>

</style>