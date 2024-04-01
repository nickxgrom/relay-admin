export default {
    language: "Русский",
    signup: {
        title: "Регистрация",
        fields: {
            firstName: "Имя",
            lastName: "Фамилия",
            patronymic: "Отчество",
            email: "Электронная почта",
            password: "Пароль",
        },
        submit: "Зарегистрироваться",
        haveAccount: "Есть аккаунт? Войти",
        organizationInfo: "Организация {orgName}",
        notOperator: "Регистрация вне организации"
    },
    login: {
        title: "Вход",
        fields: {
            email: "Электронная почта",
            password: "Пароль",
        },
        submit: "Войти",
        haveAccount: "Нет аккаунта? Регистрация",
        organizationInfo: "Организация {orgName}",
        notOperator: "Вход вне организации"
    },
    errors: {
        "incorrect-email": "Некорректный адрес электронной почты",
        "email-taken": "Данный адрес электронной почты занят",
        "password-requires-six-character": "Пароль должен содержать 6 символов и более",
        "name-is-required": "Поле 'Имя' обязательно",
        "employee-not-found": "Пользователь с такой электронной почты или паролем не найден",
        "employee-is-not-verified": "Пользователь не подтвержден. Обратитесь к владельцу организации",
        "password-or-email-incorrect": "Неверный адрес электронной почты или пароль"

    }
}