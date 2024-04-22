<script setup>
import {useUserStore} from "../store/user.js"

const store = useUserStore()
</script>

<template>
    <div class="wrapper">
        <div class="system-name">Relay Admin</div>

        {{store.user.role}}
    </div>
</template>

<style scoped>
.wrapper {
    @apply w-full h-12 flex items-center px-4 bg-gray-200 justify-between;

    .system-name {
        @apply text-2xl;
    }
}
</style>