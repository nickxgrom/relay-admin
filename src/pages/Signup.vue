<script setup>
import InputText from "primevue/inputtext"
import Button from "primevue/button"
import {useUserStore} from "../store/user.js"
import {useI18n} from "vue-i18n"
import {useRouter} from "vue-router"

const store = useUserStore()

const {t} = useI18n()
const router = useRouter()

async function submit() {
    await store.signup()
    router.push("/")
}
</script>

<template>
    <div class="wrapper">
        <form>
            <h1 class="text-center">{{ t('signup.title') }}</h1>
            <InputText
                v-for="key in Object.keys(store.user)"
                :key
                v-model="store.user[key]"
                variant="filled"
                :placeholder="t(`signup.fields.${key}`)"
                :type="key === 'password' ? 'password' : 'text'"
                class="text-field"
            />
            <Button
                @click="submit"
                :label="t('signup.submit')"
            />
            <!--            TODO: add link to login-->
        </form>
    </div>
</template>

<style scoped>
.wrapper {
    @apply flex justify-center items-center h-screen;

    form {
        @apply h-fit py-10 px-16 flex flex-col gap-5 border border-gray-400 rounded-2xl;

        .text-field {
            @apply py-2 px-4;
        }
    }
}
</style>