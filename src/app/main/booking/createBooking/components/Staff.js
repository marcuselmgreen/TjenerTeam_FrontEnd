import React from 'react';
import {MenuItem, TextField} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";

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
                label="Personale type"
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

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    className="max-w-128 mt-16 mr-16"
                    autoOk
                    label="Date"
                    inputVariant="outlined"
                    format="dd/MM/yyyy"
                    value={date}
                    onChange={(date) => dateHandler(date)}/>
            </MuiPickersUtilsProvider>

            <TextField
                name="numberOfStaff"
                type="number"
                className="max-w-76 mr-16"
                id="staffNumber"
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
                className=" max-w-92 mr-16"
                id="endTime"
                select
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
