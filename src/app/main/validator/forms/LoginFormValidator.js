export const LoginFormValidator =
    [
        {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler email'
        },
        {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'Ikke en email'
        },
        {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler kodeord'
        }

    ];
