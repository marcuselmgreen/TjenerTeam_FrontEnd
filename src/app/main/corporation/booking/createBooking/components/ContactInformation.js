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

        <form autoComplete="off" className="w-full">
            <div className="flex flex-wrap sm:my-2">
            <div className="p-2 w-full sm:w-1/2">
                    <TextField
                        name="bookingPerson"
                        className="w-full pl-2 pr-2 m-0"
                        id="bookingPerson"
                        autoComplete="none"
                        value={bookingPerson}
                        helperText={<span style={{color: 'red'}}>{validation.bookingPerson.message}</span>}
                        label="Ansvarlig for bookingen"
                        margin="normal"
                        variant="outlined"
                        onChange={changeHandler}
                    />
                </div>
                <div className="p-2 w-full sm:w-1/2">
                    <TextField
                        name="address"
                        className="w-full pl-2 pr-2 m-0"
                        id="udfyld"
                        autoComplete="none"
                        helperText={<span style={{color: 'red'}}>{validation.address.message}</span>}
                        value={address}
                        label="Adresse for arrangement"
                        margin="normal"
                        variant="outlined"
                        onChange={changeHandler}
                    />
                </div>
                

                
                <div className="p-2 w-full sm:w-1/2">
                    <TextField
                        name="phoneNumber"
                        className="w-full pl-2 pr-2 m-0"
                        id="phoneNumber"
                        autoComplete="none"
                        helperText={<span style={{color: 'red'}}>{validation.phoneNumber.message}</span>}
                        type="number"
                        label="Kontakt til ansvarlig - Mobil tlf. nr."
                        value={phoneNumber}
                        margin="normal"
                        variant="outlined"
                        onChange={changeHandler}
                    />
                </div>
                <div className="p-2 w-full sm:w-1/2">
                    <div className="w-1/3 float-left">
                        <TextField
                            name="zipCode"
                            className="w-full pl-2 pr-2 m-0"
                            id="zipCode"
                            autoComplete="none"
                            helperText={<span style={{color: 'red'}}>{validation.zipCode.message}</span>}
                            type="number"
                            value={zipCode}
                            label="Post nr."
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="w-2/3 float-left">
                        <TextField
                            name="city"
                            className="w-full pl-2 pr-2 m-0"
                            id="city"
                            autoComplete="none"
                            helperText={<span style={{color: 'red'}}>{validation.city.message}</span>}
                            value={city}
                            label="By"
                            margin="normal"
                            variant="outlined"
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                
                
            </div>
        </form>



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
