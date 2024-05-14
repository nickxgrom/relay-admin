<script setup>
import Menu from "primevue/menu"
import {computed} from "vue"
import {useI18n} from "vue-i18n"
import {useUserStore} from "../store/user.js"
import AppHeader from "../components/AppHeader.vue"

const { t } = useI18n()
const userStore = useUserStore()

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
    <div
        class="container"
        v-if="userStore.user.role"
    >
        <div class="card flex justify-content-center min-w-[260px]">
            <Menu
                class="w-full"
                :model="menuItems"
            >
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
        <div class="content">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    min-height: calc(100vh - 48px);
    min-width: 100%;

    .content {
        padding: 20px;
        width: 100%;
        height: calc(100vh - 48px);
        overflow: auto;
    }
}
</style>