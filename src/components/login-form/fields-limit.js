export const fieldsLimits = {
    email: {
        chars: [
            {
                regExp: /[\s"]/,
                errorMessage: 'В адресе не может быть пробелов или "',
                isOnChange: true,
            },
            {
                regExp: /^@/,
                errorMessage: 'В адресе должна присутствовать часть до @',
                isOnChange: true,
            },
            {
                regExp: /@[^@]*@/,
                errorMessage: 'В адресе должен присутствовать только один символ @',
                isOnChange: true,
            },
            {
                regExp: /^[^@]*$/,
                errorMessage: 'В адресе должен присутствовать символ @',
                isOnChange: false,
            },
        ],
        length: {
            max: {
                value: 150,
                errorMessage: 'Адрес не может содержать более 150 символов',
                isOnChange: true,
            },
            min: {
                value: 3,
                errorMessage: 'Адрес должен содержать не менее 3 символов',
                isOnChange: false,
            },
        },
    },
    password: {
        chars: [
            {
                regExp: /[^\w!@#$%&.]/i,
                errorMessage:
                    'Пароль может содержать только символы [a-z,A-Z,0-9,_!@#$%&.]',
                isOnChange: true,
            },
            {
                regExp: /^[^_!@#$%&.]*$/,
                errorMessage: 'Пароль должен содержать хотябы один символ [_!@#$%&.]',
                isOnChange: false,
            },
            {
                regExp: /^[^\d]*$/,
                errorMessage: 'Пароль должен содержать хотябы одно число [0-9]',
                isOnChange: false,
            },
            {
                regExp: /^[^a-z]*$/i,
                errorMessage: 'Пароль должен содержать хотябы одну букву [a-z,A-Z]',
                isOnChange: false,
            },
        ],
        length: {
            max: {
                value: 150,
                errorMessage: 'Пароль не может содержать более 150 символов',
                isOnChange: true,
            },
            min: {
                value: 8,
                errorMessage: 'Пароль должен содержать не менее 8 символов',
                isOnChange: false,
            },
        },
    },
    repeatedPassword: {
        chars: [
            {
                regExp: /[^\w!@#$%&.]/i,
                errorMessage:
                    'Пароль может содержать только символы [a-z,A-Z,0-9,_!@#$%&.]',
                isOnChange: true,
            },
            {
                regExp: /^[^_!@#$%&.]*$/,
                errorMessage: 'Пароль должен содержать хотябы один символ [_!@#$%&.]',
                isOnChange: false,
            },
            {
                regExp: /^[^\d]*$/,
                errorMessage: 'Пароль должен содержать хотябы одно число [0-9]',
                isOnChange: false,
            },
            {
                regExp: /^[^a-z]*$/i,
                errorMessage: 'Пароль должен содержать хотябы одну букву [a-z,A-Z]',
                isOnChange: false,
            },
        ],
        length: {
            max: {
                value: 150,
                errorMessage: 'Пароль не может содержать более 150 символов',
                isOnChange: true,
            },
            min: {
                value: 8,
                errorMessage: 'Пароль должен содержать не менее 8 символов',
                isOnChange: false,
            },
        },
    },
};
