export const EditCorparationFormValidator =
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
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'Ikke gyldig email'
        },
        {
            field: 'cvr',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler cvr'
        },
        {
            field: 'cvr',
            method: 'isLength',
            args: [{min:8, max: 8}],
            validWhen: true,
            message: 'Ikke gyldigt CVR'
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
            field: 'billingEmail',
            method: 'isEmail',
            validWhen: true,
            message: 'Ikke gyldig email'
        },
        {
            field: 'ean',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler EAN'
        }
    ];

