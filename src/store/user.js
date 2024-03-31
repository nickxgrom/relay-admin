import {defineStore} from "pinia"
import {ref} from "vue"
import useFetch from "../composables/useFetch.js"

export const useUserStore = defineStore("user", () => {
    const user = ref({
        firstName: "",
        lastName: "",
        patronymic: "",
        email: "",
        password: ""
    })

    async function signup() {
        await useFetch("/users", {
            method: "POST",
            body: {
                ...user.value
            }
        })
    }

    return {
        user,
        signup,
    }
})