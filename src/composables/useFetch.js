import router from "../../router.js"
export default function (url, options = {}) {
    const baseUrl = import.meta.env.VITE_API_HOST + url

    return new Promise((resolve, reject) => {
        fetch(baseUrl, {
            method: options.method ?? "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: options.method ? JSON.stringify(options.body ?? {}) : null,
            credentials: "include"
        }).then(async res => {
            if (res.ok) {
                if (res.headers.get("content-length") > "0") {
                    resolve(await res?.json())
                } else resolve()
            } else {
                if (res.status === 401) {
                    await router.push("/signin")
                }

                reject(await res?.json())
            }
        }).catch((err) => {
            reject(err)
        })
    })
}