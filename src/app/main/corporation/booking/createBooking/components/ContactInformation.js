import React from 'react';
import {TextField} from "@material-ui/core";
import '../Booking.css';

const ContactInformation = (props) => {

    const {
        bookingPerson,
        changeHandler,
        phoneNumber,
        city,
        address,
        zipCode,
        validation,
    } = props;

    return (

        <div className="w-full">
            <div className="flex flex-wrap sm:my-2">
                <div className="p-2 w-full sm:w-1/2">
                    <h4 className="mb-6 ml-2">Adresse for arrangement</h4>
                    <TextField
                        name="address"
                        className="w-full pl-2 pr-2 m-0"
                        id="udfyld"
                        helperText={<span style={{color: 'red'}}>{validation.address.message}</span>}
                        value={address}
                        label="Eks. Gammel kongevej 15"
                        margin="normal"
                        variant="outlined"
                        onChange={changeHandler}
                    />
                </div>

                <div className="p-2 w-full sm:w-1/2">
                    <div className="w-1/3 float-left">
                        <h4 className="mb-6 ml-2">Post nr.</h4>
                        <TextField
                            name="zipCode"
                            className="w-full pl-2 pr-2 m-0"
                            id="zipCode"
                            helperText={<span style={{color: 'red'}}>{validation.zipCode.message}</span>}
                            type="number"
                            value={zipCode}
                            label="Eks. 1610"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="w-2/3 float-left">
                        <h4 className="mb-6 ml-2">By</h4>
                        <TextField
                            name="city"
                            className="w-full pl-2 pr-2 m-0"
                            id="city"
                            helperText={<span style={{color: 'red'}}>{validation.city.message}</span>}
                            value={city}
                            label="Eks. København V"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className="p-2 w-full sm:w-1/2">
                    <h4 className="mb-6 ml-2">Ansvarlig for bookinger</h4>
                    <TextField
                        name="bookingPerson"
                        className="w-full pl-2 pr-2 m-0"
                        id="bookingPerson"
                        value={bookingPerson}
                        helperText={<span style={{color: 'red'}}>{validation.bookingPerson.message}</span>}
                        label="Eks. Thomas Marcussen"
                        margin="normal"
                        variant="outlined"
                        onChange={changeHandler}
                    />
                </div>
                <div className="p-2 w-full sm:w-1/2">
                    <h4 className="mb-6 ml-2">Mobil tlf. nr. (sms)</h4>
                    <TextField
                        name="phoneNumber"
                        className="w-full pl-2 pr-2 m-0"
                        id="phoneNumber"
                        helperText={<span style={{color: 'red'}}>{validation.phoneNumber.message}</span>}
                        type="number"
                        label="Eks. 12345678"
                        value={phoneNumber}
                        margin="normal"
                        variant="outlined"
                        onChange={changeHandler}
                    />
                </div>
            </div>
        </div>



        // <div className=" p-4 w-full">
        //     {/*<div className="w-full">*/}
        //     {/*    <h2>Kontakt information & adresse</h2>*/}
        //     {/*</div>*/}
        //     <TextField
        //         name="contactPerson"
        //         className="mr-16 max-w-256"
        //         id="contactPerson"
        //         value={contactPerson}
        //         helperText={<span style={{color: 'red'}}>{validation.contactPerson.message}</span>}
        //         label="Kontakt person"
        //         margin="normal"
        //         variant="outlined"
        //         onChange={changeHandler}
        //     />
        //
        //     <TextField
        //         name="phoneNumber"
        //         className="max-w-192 mr-16"
        //         id="phoneNumber"
        //         helperText={<span style={{color: 'red'}}>{validation.phoneNumber.message}</span>}
        //         type="number"
        //         label="Telefon Nr."
        //         value={phoneNumber}
        //         margin="normal"
        //         variant="outlined"
        //         onChange={changeHandler}
        //     />
        //
        //     <TextField
        //         name="address"
        //         className="w-full sm:w-2/3 mr-16"
        //         id="address"
        //         helperText={<span style={{color: 'red'}}>{validation.address.message}</span>}
        //         value={address}
        //         label="Adresse for arrangement."
        //         margin="normal"
        //         variant="outlined"
        //         onChange={changeHandler}
        //     />
        //
        //     <TextField
        //         name="zipCode"
        //         className="w-1/3 max-w-92"
        //         id="zipCode"
        //         helperText={<span style={{color: 'red'}}>{validation.zipCode.message}</span>}
        //         type="number"
        //         value={zipCode}
        //         label="Post nr."
        //         margin="normal"
        //         variant="outlined"
        //         onChange={changeHandler}
        //     />
        // </div>
    );
};

export default ContactInformation;
