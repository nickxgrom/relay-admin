<script setup>
import empty from "./layouts/empty.vue"
import defaultLayout from "./layouts/default.vue"
import {computed, getCurrentInstance, onMounted} from "vue"
import {useUserStore} from "./store/user.js"

const layout = {
    empty: empty,
    default: defaultLayout,
}

const { proxy } = getCurrentInstance()

const currentLayout = computed(() => {
    return proxy.$currentLayout.value
})

const userStore = useUserStore()

onMounted(async () => {
    // TODO: think about saving name etc
    await userStore.getUser()
})

</script>

<template>
    <component :is="layout[currentLayout]">
        <RouterView/>
    </component>
</template>

<style scoped>
</style>
