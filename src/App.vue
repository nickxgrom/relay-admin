<script setup>
import empty from "./layouts/empty.vue"
import defaultLayout from "./layouts/default.vue"
import {computed, getCurrentInstance} from "vue"

const layout = {
    empty: empty,
    default: defaultLayout,
}

const { proxy } = getCurrentInstance()

const currentLayout = computed(() => {
    return proxy.$currentLayout.value
})

</script>

<template>
    <component :is="layout[currentLayout]">
        <RouterView/>
    </component>
</template>

<style scoped>
</style>
