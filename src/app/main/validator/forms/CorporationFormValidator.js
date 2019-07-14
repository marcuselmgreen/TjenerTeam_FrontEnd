export const CorparationFormValidator =
    [
        {
            field: 'name',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler navn'
        },
        {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler email'
        },
        {
            field: 'cvr',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler cvr'
        },
        {
            field: 'address',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler addresse'
        },
        {
            field: 'zipCode',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler post nr.'
        },
        {
            field: 'city',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler by'
        },
        {
            field: 'contactPerson',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler kontaktperson'
        },
        {
            field: 'department',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler afdeling'
        },
        {
            field: 'phoneNumber',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler telefon nr.'
        },
        {
            field: 'billingEmail',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler email'
        },
        {
            field: 'ean',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler EAN'
        },
        {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler kodeord'
        },
        {
            field: 'confirmPassword',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler at bekræfte kodeord'
        },
        {
            field: 'gdpr',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler at vælge'
        }
    ];
