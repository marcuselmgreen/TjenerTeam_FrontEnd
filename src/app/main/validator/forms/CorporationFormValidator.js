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
            args: [{ min: 8, max: 8 }],
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
            field: 'zipCode',
            method: 'isLength',
            args: [{ min: 4, max: 4 }],
            validWhen: true,
            message: 'Ugyldigt post nr.'
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
       /*{
            field: 'department',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler afdeling'
        },*/
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
        /*{
            field: 'ean',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler EAN'
        },*/
        /*{
            field: 'ean',
            method: 'isLength',
            args: [{ min: 13, max: 13 }],
            validWhen: false,
            message: 'Ugyldigt EAN nr.'
        },*/
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
            message: 'Bekræft kodeord'
        },
        {
            field: 'confirmPassword',
            method: (confirmation, state) => (state.password === confirmation),
            validWhen: true,
            message: 'Kodeordene stemmer ikke overens'
        },
        {
            field: 'gdpr',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler at vælge'
        },
        {
            field: 'gdpr',
            method: 'isLength',
            args: [{ min: 5, max: 5 }],
            validWhen: false,
            message: 'Tryk "ja" for at oprette en virksomhed'
        }
    ];