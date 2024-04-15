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
    navBar: {
        newOrganization: "Добавить организацию",
        organizationManager: "Менеджер организаций",
        operatorManager: "Менеджер сотрудников",
    },
    organization: {
        newOrganizationTitle: "Добавить новую организацию",
        organizationListTitle: "Список организаций",
        updateOrganizationTitle: "Редактировать организацию",
        fields: {
            name: "Имя организации",
            description: "Описание",
            email: "Электронный адрес",
            address: "Физический адрес",
            creationDate: "Дата создания",
        },
        create: "Создать",
        update: "Обновить",
        delete: "Удалить",
        deleteConfirmation: "Вы действительно хотите удалить данную организацию?",
        submit: "Да",
        cancel: "Отмена",
        confirmAction: "Подтвердите действие",
        warning: {
            firstLine: "Чтобы пригласить сотрудников в данную организацию, скопируйте и отправьте сотрудникам ссылку {copyBtn}",
            secondLine: "Будьте внимательны, не делитесь ссылкой с незнакомыми людьми. Если в списке сотрудников появился неизвестный сотрудник не подтверждайте его аккаунт"
        },
        copyLink: "Копировать ссылку"
    },
    employee: {
        employeeListTitle: "Список сотрудников",
        updateEmployeeTitle: "Редактировать сотрудника",
        fields: {
            name: "Имя",
            email: "Электронный адрес",
            verified: "Подтвержден",
            createdAt: "Дата регистрации",
        },
        noData: "В текущей организации еще не регистрировались сотрудники",
        warning: "Если Вы не знаете этого сотрудника, то не подтверждайте его аккаунт",
        update: "Обновить",
        verified: {
            yes: "Да",
            no: "Нет"
        }
    },
    errors: {
        "incorrect-email": "Некорректный адрес электронной почты",
        "email-required": "Поле \"Электронный адрес\" обязательно",
        "email-taken": "Данный адрес электронной почты занят",
        "password-requires-six-character": "Пароль должен содержать 6 символов и более",
        "name-is-required": "Поле 'Имя' обязательно",
        "employee-not-found": "Пользователь с такой электронной почты или паролем не найден",
        "employee-is-not-verified": "Пользователь не подтвержден. Обратитесь к владельцу организации",
        "password-or-email-incorrect": "Неверный адрес электронной почты или пароль",
        "name-required": "Поле \"Имя\" обязательно"
    }
}
