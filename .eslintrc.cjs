module.exports = {
    extends: ["eslint:recommended", "plugin:vue/vue3-essential"],
    plugins: ["vue"],
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
        "no-unused-vars": ["warn"],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double",
        ],
        "semi": [
            "error",
            "never"
        ],

        // Vue
        "vue/multi-word-component-names": ["off"],
        "vue/component-name-in-template-casing": [
            "error",
            "PascalCase",
            {
                registeredComponentsOnly: true
            }
        ],
        "vue/attribute-hyphenation": ["error", "always"],
        "vue/first-attribute-linebreak": ["error"],
        "vue/prop-name-casing": ["error", "camelCase"],
        "vue/require-default-prop": ["off"],
        "vue/require-prop-types": ["off"],
        "vue/singleline-html-element-content-newline": ["off"],
        "vue/this-in-template": ["warn", "never"],
        "vue/match-component-file-name": ["warn", { extensions: ["vue"] }],
        "vue/no-multiple-objects-in-class": ["error"],
        "vue/no-static-inline-styles": ["warn"],
        "vue/no-useless-mustaches": ["error"],
        "vue/no-useless-v-bind": ["error"],
        "vue/padding-line-between-blocks": ["error", "always"],
        "vue/block-order": [
            "error",
            {
                order: ["script", "template", "style"]
            }
        ],
        "vue/html-indent": ["error", 4],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 1
            },
            "multiline": {
                "max": 1
            }
        }]
    }
}
