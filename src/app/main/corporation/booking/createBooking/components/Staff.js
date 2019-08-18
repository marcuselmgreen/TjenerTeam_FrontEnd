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
        time
    } = props;

    return (

        <div className="w-full">
            <div className="flex flex-wrap sm:my-2">
                <div className="p-2 w-full sm:w-1/2">
                    <h4 className="mb-6 ml-2">Typer personale</h4>
                    <TextField
                        name="staffType"
                        select
                        className="w-1/2 pr-2 pl-2 m-0"
                        id="staffSelection"
                        style={{borderColor: 'red'}}
                        label="Vælg"
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
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            className="w-1/2 pr-2 pl-2"
                            autoOk
                            label="Date"
                            helperText={<span style={{color: 'red'}}>{validation.date.message}</span>}
                            inputVariant="outlined"
                            format="dd/MM/yyyy"
                            value={date}
                            onChange={(date) => dateHandler(date)}/>
                    </MuiPickersUtilsProvider>
                </div>


                <div className="p-2 w-full sm:w-1/2">
                        <div className="w-full sm:w-1/3 float-left">
                            <h4 className="mb-6 ml-2">Personale</h4>
                            <TextField
                                name="numberOfStaff"
                                className="w-full pr-2 pl-2 m-0"
                                id="staffNumber"
                                helperText={<span style={{color: 'red'}}>{validation.numberOfStaff.message}</span>}
                                label="Antal"
                                type="number"
                                margin="normal"
                                value={numberOfStaff}
                                variant="outlined"
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="w-full sm:w-2/3 float-left">
                                <div className="w-1/2 float-left">
                                    <h4 className="mb-6 ml-2">Start</h4>
                                    <TextField
                                        name="startTime"
                                        className="w-full pr-2 pl-2 m-0"
                                        id="startTime"
                                        select
                                        value={startTime}
                                        helperText={<span style={{color: 'red'}}>{validation.startTime.message}</span>}
                                        label="Tid"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={changeHandler}
                                    >{time.map((val, index) => (
                                        <MenuItem key={index} value={val.val}>
                                            {val.val}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                </div>
                                <div className="w-1/2 float-left">
                                    <h4 className="mb-6 ml-2">Slut</h4>
                                    <TextField
                                        name="endTime"
                                        className="w-full pr-2 pl-2 m-0"
                                        id="endTime"
                                        select
                                        helperText={<span style={{color: 'red'}}>{validation.endTime.message}</span>}
                                        value={endTime}
                                        label="Tid"
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
                        </div>
                </div>
            </div>

        </div>




    );
};


export default Staff;
