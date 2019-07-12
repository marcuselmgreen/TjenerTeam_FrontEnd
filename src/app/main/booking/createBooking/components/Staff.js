import React from 'react';
import {MenuItem, TextField} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import '../Booking.css';

import {
    DatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";

const Staff = (props) => {


    const {
        staffType,
        changeHandler,
        staff,
        dateHandler,
        numberOfStaff,
        startTime,
        endTime,
        date,
        validation,
        time} = props;

    return (
        <div className=" p-4 w-full ">
            <div className="w-full">
                <h2>Personale</h2>
            </div>
            <TextField
                name="staffType"
                select
                className="min-w-128 mr-16 "
                id="staffSelection"
                style={{borderColor: 'red'}}
                label="Personale type"
                helperText={<span style={{color: 'red'}}>{validation.staffType.message}</span>}
                margin="normal"
                value={staffType}
                variant="outlined"
                onChange={changeHandler}
            >
                {staff.map((val, index) => (
                    <MenuItem key={index} value={val}>
                        {val}
                    </MenuItem>
                ))}
            </TextField>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <DatePicker
                        className="max-w-128 mt-16 mr-16 "
                        autoOk
                        label="Date"
                        helperText={<span style={{color: 'red'}}>{validation.date.message}</span>}
                        inputVariant="outlined"
                        format="dd/MM/yyyy"
                        value={date}
                        onChange={(date) => dateHandler(date)}/>
            </MuiPickersUtilsProvider>


            <TextField
                name="numberOfStaff"
                type="number"
                className="max-w-76 mr-16 "
                id="staffNumber"
                helperText={<span style={{color: 'red'}}>{validation.numberOfStaff.message}</span>}
                label="Antal"
                margin="normal"
                value={numberOfStaff}
                variant="outlined"
                onChange={changeHandler}
            />

            <TextField
                name="startTime"
                className="min-w-76 mr-16"
                id="startTime"
                select
                value={startTime}
                helperText={<span style={{color: 'red'}}>{validation.startTime.message}</span>}
                label="Start"
                margin="normal"
                variant="outlined"
                onChange={changeHandler}
            >{time.map((val, index) => (
                <MenuItem key={index} value={val.val}>
                    {val.val}
                </MenuItem>
            ))}
            </TextField>

            <TextField
                name="endTime"
                className="min-w-76 mr-16"
                id="endTime"
                select
                helperText={<span style={{color: 'red'}}>{validation.endTime.message}</span>}
                value={endTime}
                label="Slut"
                margin="normal"
                variant="outlined"
                onChange={changeHandler}
            >
                {time.map((val, index) => (
                    <MenuItem key={index} value={val.val}>
                        {val.val}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};


export default Staff;
