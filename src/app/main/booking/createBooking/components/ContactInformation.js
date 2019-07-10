import React from 'react';
import {TextField} from "@material-ui/core";

const ContactInformation = (props) => {

    const {
        contactPerson,
        changeHandler,
        phoneNumber,
        address,
        zipCode,
    } = props;

    return (
        <div className=" p-4 w-full">
            <div className="w-full">
                <h2>Kontakt information & adresse</h2>
            </div>
            <TextField
                name="contactPerson"
                className="mr-16 max-w-256"
                id="contactPerson"
                value={contactPerson}
                label="Kontakt person"
                margin="normal"
                variant="outlined"
                onChange={changeHandler}
            />

            <TextField
                name="phoneNumber"
                className="max-w-192 mr-16"
                id="phoneNumber"
                type="number"
                label="Telefon Nr."
                value={phoneNumber}
                margin="normal"
                variant="outlined"
                onChange={changeHandler}
            />

            <TextField
                name="address"
                className="w-full sm:w-2/3 mr-16"
                id="address"
                value={address}
                label="Adresse for arrangement."
                margin="normal"
                variant="outlined"
                onChange={changeHandler}
            />

            <TextField
                name="zipCode"
                className="w-1/3 max-w-92"
                id="zipCode"
                type="number"
                value={zipCode}
                label="Post nr."
                margin="normal"
                variant="outlined"
                onChange={changeHandler}
            />


        </div>
    );
};

export default ContactInformation;
