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
};
