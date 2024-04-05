<script setup>
import InputText from "primevue/inputtext"
import Button from "primevue/button"
import Message from "primevue/message"
import {useUserStore} from "../store/user.js"
import {useI18n} from "vue-i18n"
import {useRoute, useRouter} from "vue-router"
import {computed, onMounted, ref} from "vue"

const store = useUserStore()

const {t} = useI18n()
const router = useRouter()
const route = useRoute()

const errors = ref([])

const isEmployee = computed(() => !!route.params.organizationId)
const organizationName = ref("")

onMounted(async () => {
    if (isEmployee.value) {
        organizationName.value = await store.getOrganizationName(route.params.organizationId)

        if (!organizationName.value) {
            router.push("/signup")
        }
    }
})

async function submit() {
    errors.value = []
    if (isEmployee.value) {
        store.employeeLogin(route.params.organizationId)
            .then(() => {
                localStorage.setItem("organizationId", route.params.organizationId)
                router.push("/")
            })
            .catch(err => {
                errors.value.push(err)
            })
    } else {
        await store.userLogin()
            .then(() => {
                router.push("/")
            })
            .catch(err => {
                errors.value.push(err)
            })
    }
}

const fields = ["email", "password"]
</script>

<template>
    <div class="wrapper">
        <form>
            <div>
                <h1 class="text-center mb-2">{{ t('login.title') }}</h1>
                <div
                    v-if="isEmployee"
                    class="text-center"
                >
                    <i18n-t
                        keypath="login.organizationInfo"
                        as="span"
                    >
                        <template #orgName>
                            "{{ organizationName }}"
                        </template>
                    </i18n-t>

                    <div>
                        <router-link
                            class="text-center"
                            to="/login"
                        >
                            <Button
                                :label="t('login.notOperator')"
                                link
                                size="small"
                            />
                        </router-link>
                    </div>
                </div>
            </div>
            <InputText
                v-for="key in fields"
                :key
                v-model="store.user[key]"
                variant="filled"
                :placeholder="t(`login.fields.${key}`)"
                :type="key === 'password' ? 'password' : 'text'"
                class="text-field"
            />

            <div v-if="errors.length">
                <Message
                    v-for="error in errors"
                    :key="error.alias"
                    severity="error"
                >{{ t(`errors.${error.alias}`) }}</Message>
            </div>

            <div class="flex flex-col">
                <Button
                    @click="submit"
                    :label="t('login.submit')"
                />
                <router-link
                    class="text-center"
                    :to="isEmployee ? `/signup/${route.params.organizationId}` : `/signup`"
                >
                    <Button
                        :label="t('login.haveAccount')"
                        link
                    />
                </router-link>
            </div>
        </form>
    </div>
</template>

<style scoped>
.wrapper {
    @apply flex justify-center items-center h-screen;

    form {
        max-width: 480px;

        @apply w-full h-fit py-10 px-16 flex flex-col gap-5 border border-gray-400 rounded-2xl;

        .text-field {
            @apply py-2 px-4;
        }
    }
}
</style>