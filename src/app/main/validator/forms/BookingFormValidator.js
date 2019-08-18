export const BookingFormValidator =

    [
        {
            field: 'staffType',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler personale'
        },
        {
            field: 'numberOfStaff',
            method: "isEmpty",
            validWhen: false,
            message: 'Mangler antal personale'
        },
        {
            field: 'numberOfStaff',
            method: 'isInt',
            args: [{min: 1, max: 1000}],
            validWhen: true,
            message: 'Der skal minimum vælges 1'
        },
        {
            field: 'date',
            method: (date) => {
                let selectedDate = new Date(date);
                let newDate = new Date();

                if (selectedDate.getFullYear() < newDate.getFullYear()) {
                    return true
                } else if (
                    selectedDate.getFullYear() === newDate.getFullYear()
                    && selectedDate.getMonth() < newDate.getMonth()) {
                    return true;
                } else if (
                    selectedDate.getFullYear() === newDate.getFullYear()
                    && selectedDate.getMonth() === newDate.getMonth()
                    && selectedDate.getDate() < newDate.getDate()) {
                    return true
                } else if (
                    selectedDate.getFullYear() === newDate.getFullYear()
                    && selectedDate.getMonth() === newDate.getMonth()
                    && selectedDate.getDate() === newDate.getDate()) {
                    return false;
                } else {
                    return false;
                }
            },
            validWhen: false,
            message: 'Dato er ikke tilladt'
        },
        {
            field: 'startTime',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler start tid'
        },
        {
            field: 'endTime',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler start tid'
        },
        {
            field: 'contactPerson',
            method: 'isEmpty',
            validWhen: false,
            message: 'Angiv kontakt person'
        },
        {
            field: 'bookingPerson',
            method: 'isEmpty',
            validWhen: false,
            message: 'Angiv kontakt person'
        },
        {
            field: 'phoneNumber',
            method: 'isEmpty',
            validWhen: false,
            message: 'Angiv tlf. nummer'
        },
        {
            field: 'address',
            method: 'isEmpty',
            validWhen: false,
            message: 'Angiv adresse'
        },
        {
            field: 'city',
            method: 'isEmpty',
            validWhen: false,
            message: 'Angiv by'
        },
        {
            field: 'zipCode',
            method: 'isEmpty',
            validWhen: false,
            message: 'Angiv post nr.'
        },
        {
            field: 'arrangementType',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler arrangementType'
        },
        {
            field: 'extraWorkHours',
            method: 'isEmpty',
            validWhen: false,
            message: 'Angiv felt'
        },
        {
            field: 'foodIncluded',
            method: 'isEmpty',
            validWhen: false,
            message: 'Vælg et felt'
        },
        {
            field: 'jobDescription',
            method: 'isEmpty',
            validWhen: false,
            message: 'Mangler beskrivelse'
        },
        // {
        //     field: 'languageSkill',
        //     method: 'isEmpty',
        //     validWhen: false,
        //     message: 'Angiv sprogkendskaber'
        // },
        // {
        //     field: 'staffGender',
        //     method: 'isEmpty',
        //     validWhen: false,
        //     message: 'Angiv køn'
        // },
        // {
        //     field: 'jobExperience',
        //     method: 'isEmpty',
        //     validWhen: false,
        //     message: 'Angiv erfaring'
        // },
        {
            field: 'transportWage',
            method: 'isEmpty',
            validWhen: false,
            message: 'Vælg felt'
        },
        {
            field: 'hourlyWage',
            method: 'isEmpty',
            validWhen: false,
            message: 'Angiv timeløn'
        },
        {
            field: 'hourlyWage',
            method: 'isNumeric',
            args: [{no_symbols: true}],
            validWhen: true,
            message: 'Kommatal er ikke muligt'
        }

    ];



