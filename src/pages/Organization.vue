<script setup>

import {useOrganizationStore} from "../store/organization.js"
import {onMounted, ref} from "vue"
import {useRoute, useRouter} from "vue-router"
import Message from "primevue/message"
import Button from "primevue/button"
import Textarea from "primevue/textarea"
import InputText from "primevue/inputtext"
import Dialog from "primevue/dialog"
import {useI18n} from "vue-i18n"

const store = useOrganizationStore()
const route = useRoute()
const router = useRouter()

const {t} = useI18n()
const errors = ref([])
const deleteDialogVisible = ref(false)

onMounted(async () => {
    await store.getOrganizationById(route.params.id)
})

function update() {
    errors.value = []

    store.updateOrganization(route.params.id)
        .then(() => {
            router.push("/organization-manager/")
        })
        .catch(err => {
            errors.value.push(err)
        })
}


function deleteOrganization() {
    errors.value = []

    store.deleteOrganization(route.params.id)
        .then(() => {
            router.push("/organization-manager/")
        })
        .catch(err => {
            errors.value.push(err)
        })
}

function copyLink() {
    navigator.clipboard.writeText(`${import.meta.env.VITE_BASE_URL}/signup/${route.params.id}`)
}
</script>

<template>
    <h1>{{ t("organization.updateOrganizationTitle") }}</h1>

    <div class="py-5 flex flex-col gap-3">
        <InputText
            v-model="store.organization.name"
            variant="filled"
            :placeholder="t(`organization.fields.name`)"
        />
        <Textarea
            v-model="store.organization.description"
            variant="filled"
            :placeholder="t(`organization.fields.description`)"
        />
        <InputText
            v-model="store.organization.email"
            variant="filled"
            :placeholder="t(`organization.fields.email`)"
        />
        <InputText
            v-model="store.organization.address"
            variant="filled"
            :placeholder="t(`organization.fields.address`)"
        />

        <div v-if="errors.length">
            <Message
                v-for="error in errors"
                :key="error.alias"
                severity="error"
            >{{ t(`errors.${error.alias}`) }}</Message>
        </div>

        <div>
            <Message
                class="w-1/3"
                severity="warn"
            >
                <i18n-t
                    keypath="organization.warning.firstLine"
                    as="span"
                >
                    <template #copyBtn>
                        <div>
                            <Button
                                @click="copyLink"
                                text
                                severity="secondary"
                            >
                                {{ t('organization.copyLink') }}
                            </Button>
                        </div>
                    </template>
                </i18n-t>
            </Message>

            <Message
                class="w-1/3"
                severity="warn"
            >
                {{t('organization.warning.secondLine')}}
            </Message>
        </div>

        <div class="flex gap-2">
            <Button
                @click="update"
                class="w-fit"
            >
                {{ t(`organization.update`) }}
            </Button>

            <Button
                @click="deleteDialogVisible = true"
                class="w-fit"
                severity="danger"
            >
                {{ t(`organization.delete`) }}
            </Button>
        </div>
    </div>

    <Dialog
        v-model:visible="deleteDialogVisible"
        modal
        :header="t('organization.confirmAction')"
    >
        <p class="mb-4">
            {{ t('organization.deleteConfirmation') }}
        </p>

        <div class="flex justify-end gap-2">
            <Button
                type="button"
                :label="t('organization.cancel')"
                severity="secondary"
                @click="deleteDialogVisible = false"
            />
            <Button
                type="button"
                :label="t('organization.submit')"
                @click="deleteOrganization"
            />
        </div>
    </Dialog>
</template>

<style scoped>

</style>
