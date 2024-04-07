<script setup>
import Menu from "primevue/menu"

import AppHeader from "../components/AppHeader.vue"
import {computed} from "vue"
import {useI18n} from "vue-i18n"

const {t } = useI18n()

const menuItems = computed(() => {
    return [
        {
            label: t("navBar.newOrganization"),
            icon: "pi pi-plus",
            route: "/organization/new"
        },
        {
            label: t("navBar.organizationManager"),
            icon: "pi pi-building",
            route: "/organization-manager"
        },
        {
            label: t("navBar.operatorManager"),
            icon: "pi pi-user",
            route: "/operator-manager"
        }
    ]
})
</script>

<template>
    <AppHeader/>
    <div class="flex">
        <div class="card flex justify-content-center">
            <Menu :model="menuItems" >
                <template #item="{ item, props }">
                    <router-link
                        v-if="item.route"
                        v-slot="{ href, navigate }"
                        :to="item.route"
                        custom
                    >
                        <a
                            :href="href"
                            v-bind="props.action"
                            @click="navigate"
                        >
                            <span :class="item.icon" />
                            <span class="ml-3">{{ item.label }}</span>
                        </a>
                    </router-link>
                </template>
            </Menu>
        </div>
        <div class="p-5">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
div {
    height: calc(100vh - 48px)
}
</style>